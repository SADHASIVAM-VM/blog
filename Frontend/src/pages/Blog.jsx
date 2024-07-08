import React, { useContext, useEffect, useState } from 'react';
import { Category, Svgs, icons } from '../assets/commonData';
import Collections from '../Components/SubComponents/Collections';
import { CR_Context } from '../Controllers/GlobalContext';
import Lottie from 'react-lottie';
import animationData from '/public/animationLoading.json' 

const Blog = () => {
  const {PostView} = useContext(CR_Context)
  const [isOpend, setIsOpend] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("All");
  const [posts, setPosts] = useState([]);
  const [searchs, setSearchs] = useState('');

  const defaultOptions = {
    loop: true,
    autoplay:'5',
    animationData: animationData,
  };
  
 
 
//console.log(posts)

  const getPost = async () => {
    try {
      await fetch(import.meta.env.VITE_API_URL+"/post")
        .then((res) => res.json())
        .then((res) => setPosts(res.data))
        .catch((er) => console.log("ERR OCCuR", er));
    } catch (err) {
      console.log(err);
    }
  
  };



  const searchFunc = (e) => {
    if (e.key === "Enter" ) {
      setSearchs(e.target.value);
    }
    else{
      setSearchs(e.target.value.length <0 ?'': '');
    }
  };

  useEffect(() => {
    getPost();
  }, [categoryTitle, setSearchs]);
  //console.log(categoryTitle)

  

  return (
    <div className='md:p-5 mb-5'>
      <div className="flex gap-3 flex-col md:flex-row relative">
        <div className={`left md:w-[300px] md:h-[600px] overflow-hidden bg-white md:bg-gray-100 flex flex-col gap-5 p-2 sticky top-[62px] ${isOpend ? "h-[full]" : "h-[55px]"}`} >
          <div className="flex flex-col">
            <input 
              type="search" 
              className='p-2 border-black border md:w-full w-[90%] pr-10' 
              placeholder='Search...' 
              onKeyDown={searchFunc} 
            />
            <img src={icons.leftArrow} alt="" className='w-7 absolute top-4 right-[55px] md:right-3 rotate-180 hover:bg-[#00db64] rounded-full transition-all cursor-pointer opacity-90'/>

            <div className="text-xl z-10 md:hidden absolute right-3 top-5 animate-pulse cursor-pointer" onClick={() => setIsOpend(!isOpend)}>{
              isOpend ? <img src={icons.arrow } className='w-5 '/>: <img src={icons.arrow } className='w-5 rotate-180'/>
              }</div>
          </div>

          <div className="w-full p-2 ">
            <h1 className='text-xl flex items-center gap-3'>Category <img src={icons.catgy} alt="" className='w-5'/></h1>
            <ul className='my-4 '>
              {Category.map((i) => (
                <li 
                  key={i.id} 
                  className='border hover:bg-transparent bg-white cursor-pointer hover:shadow-md m-2 p-2 flex gap-5 items-center' 
                  onClick={() => setCategoryTitle(i.cat)}
                ><img src={i.icon} alt="" className='w-5'/>
                  {i.cat}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full flex items-center justify-center border p-2 bg-[#fc3030] text-white">
            <h1 className=' flex items-center gap-5 cursive'><span className='bg-white rounded-full p-1'><img src={icons.save} alt="" className='w-5 '/></span> saved blogs</h1>
          </div>
        </div>
        
        <div className="right w-full h-full p-3">
          <h1 className='mb-5 text-xl flex gap-3 items-center'>{categoryTitle && categoryTitle ? <>{categoryTitle}</> : "All"}</h1>
          {
            posts.length === 0 ? <div>
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
            :
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 flex-wrap" >
            {posts
              .filter((itms) => itms.postTitle.toLowerCase().includes(searchs.toLowerCase()) && (itms.category == categoryTitle || categoryTitle == "All"))
              .map((itms) => (
                <Collections 
                 img={itms.imageUrl}
                  key={itms._id} 
                  title={itms.postTitle} 
                  id={itms._id} 
                  category={itms.category} 
                  content={itms.content} 
                  username={itms.username} 
                  ps_Date={itms.posted_Date} 
                 />
              ))}

            {
            posts.filter((itms) => itms.postTitle.toLowerCase().includes(searchs.toLowerCase()) && (itms.category === categoryTitle || categoryTitle === "All")).length === 0 && 
              <img src={icons.empty} className='text-black text-4xl my-20 text-center w-52 opacity-80 -z-[10]' />
              }
          </div>
          } 
        </div>
      </div>
    </div>
  );
};

export default Blog;
