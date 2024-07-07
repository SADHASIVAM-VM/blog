import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CR_Context } from '../Controllers/GlobalContext';
import { toast } from 'react-toastify';
import { icons } from '../assets/commonData';

const PostContent = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  // console.log(id)
  const {  tokenData, token, pTid} = useContext(CR_Context);
  const date = new Date();
//  console.log(tokenData)
  const [infoData, setInfoData] = useState({
    selectedFile: null,
    postTitle: '',
    content: '',
    category: '',
    username: '',
    posted_Date: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setInfoData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };


  const post = async () => {
    const formData = new FormData();
    formData.append('images', infoData.selectedFile);
    formData.append('postTitle', infoData.postTitle);
    formData.append('content', infoData.content);
    formData.append('category', infoData.category);
    formData.append('posted_Date', date);
    formData.append('username', tokenData.name);

    try {
      await fetch(import.meta.env.VITE_API_URL+'/post', {
        method: 'POST',
        body: formData,
      });
      toast.success("Successfully Posted");
    } catch (error) {
      toast.warn('Unsuccessful');
    }
  };

  return (
  
    <div className="">
      {token && pTid === id ?(
        <div className='flex justify-center'>
          <div className='md:w-[600px] w-full mx-5 my-5'>
            <h1 className='text-xl'>Hey <span className='text-[#00db64] font-bold'>{tokenData ? tokenData.name : 'User'}</span>👋</h1>
            <form onSubmit={(e) => { e.preventDefault(); post(); }}>
              <div className='flex flex-col gap-5'>
                <input
                  type='text'
                  value={infoData.postTitle}
                  className='border p-2 border-black rounded-md'
                  placeholder='Title'
                  name='postTitle'
                  onChange={handleChange}
                />

                <label htmlFor='upload' className='border border-black text-sm text-gray-600 rounded-md p-2 cursor-pointer hover:border-b-4'>
                  {infoData.selectedFile ? infoData.selectedFile.name : 'Please Select Img'}
                </label>

                <input
                  type='file'
                  name='selectedFile'
                  id='upload'
                  accept='image/*'
                  onChange={handleChange}
                  className='hidden'
                />

                <select
                  value={infoData.category}
                  onChange={handleChange}
                  name="category"
                  className='p-2 border-black border rounded-md cursor-pointer'
                  required
                >
                  <option defaultValue="All">common</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Technology">Tech</option>
                  <option value="Stocks">Stocks</option>
                  <option value="AI">AI</option>
                </select>

                <textarea
                  value={infoData.content}
                  name='content'
                  className='border-black border rounded-md h-[200px] p-2'
                  placeholder='Enter Content'
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className='grid mt-3'>
                <button type='submit' className='p-2 rounded-md bg-yellow-200 hover:border-b-4 border-black'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className='my-40'>
          <h1 className="text-xl text-center text-red-500 text-bold">Please Make an Account With Us to Create a Blog</h1>
          <div className="my-28 flex justify-center">
            <button className='bg-blue-400 px-3 p-2 rounded-sm text-white flex items-center gap-3' onClick={() => navigate('/login')}>
              <img src={icons.leftArrow} className='w-5' alt="" /> Back
            </button>
          </div>
        </div>
      )}
    </div>

  );
};

export default PostContent;
