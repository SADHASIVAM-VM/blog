const express = require('express');
const router = express.Router();
const PostModel = require('../models/PostModel');
const upload = require('../middleware/upload');

// Get all posts
router.get("/", async (req, res) => {
  try {
    const data = await PostModel.find({});
    res.status(200).json({
      message: 'Welcome',
      data: data
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Create a new post
router.post("/", upload.single('images'), async (req, res) => {
  try {
    const { postTitle, content, category, username, posted_Date } = req.body;

    if (!postTitle || !content || !category) {
      return res.status(400).json({ success: false, message: "Data are required" });
    }

    const newPost = new PostModel({
      postTitle,
      content,
      category,
      username,
      posted_Date,
      imageUrl: req.file.path// Save the image path to the database
    });

    await newPost.save();
    res.json({ success: true, message: "PostModel record saved", data: newPost });
  } catch (error) {
    console.error('Error saving PostModel record:', error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

//singlePostView
router.get('/view/:id', async(req, res)=>{
  const id = req.params.id;
  if (id) {
    try {
      const viewData = await PostModel.findById(id);
      if (viewData) {
        return res.status(200).json({  detail: viewData });
      } else {
        return res.status(404).json({ message: "Record not found" });
      }
    } catch (error) {
      console.error('Error View Items record:', error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ delete: false, message: "ID parameter is required" });
  }

})

// Delete a post by ID
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  if (id) {
    try {
      const del = await PostModel.findByIdAndDelete(id);
      if (del) {
        return res.status(201).json({ delete: true, detail: del });
      } else {
        return res.status(404).json({ delete: false, message: "Record not found" });
      }
    } catch (error) {
      console.error('Error deleting record:', error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ delete: false, message: "ID parameter is required" });
  }
});

module.exports = router;
