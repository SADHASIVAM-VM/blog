import React from 'react'
import { icons } from '../../assets/commonData'
import { useNavigate } from 'react-router-dom'
import banner from '../../assets/image/banner.jpg'

const SingleItemDisplay = ({title, content, category, username, Ps_Date, img}) => {

  const navigate = useNavigate()
  return (
    <div className='mb-20 relative'>
      <div>
      <div className="  h-[300px] relative flex justify-center">
        <div className="w-full ">
          <img src={banner} alt="" className='w-full md:h-[320px]'/>
        </div>
        <div className="absolute top-44 ">
        <div className=" h-[200px] w-[200px] rounded-full flex justify-center ">
          <img src={icons.profile} alt="" className='bg-white rounded-full shadow-md shadow-black w-28 h-28 md:w-full md:h-full'/>
            <h1 className='font-bold top-[120px] md:bottom-[-30px]  absolute cursive  '>@{username}</h1>
        </div>
        </div>
      </div>
  
        <div className="md:w-[600px]  mx-auto px-5 mt-28 ">
       <div className="flex  justify-between">
       <p className='text-sm hidden text-blue-400 md:flex items-center gap-1'>Home 
         <img src={icons.leftArrow} alt="" className='w-5 items-center rotate-180'/>
         {category} <img src={icons.leftArrow} alt="" className='w-5 items-center rotate-180'/> 

         <span className='text-blue-600'>{title && title.length >15 ?title.slice(0,17)+"...":title}</span></p>
       <p className='text-sm flex gap-1'><img src={icons.reminder } alt="" className='w-5 bg-yellow-300 rounded-full'/> <span className='font-bold '>{Ps_Date && Ps_Date.length>=10? Ps_Date.slice(0,10): ''}</span></p>
       </div>
       <div className="">
        <h1 className='text-xl font-bold my-2 flex gap-2 items-center'><img src={icons.breedCrumb} alt="" className='w-5 rotate-90'/>{title}</h1>
        <div className="">
          <div className="flex justify-center items-center w-full  rounded-md bg-gray-100 p-2 mb-3">
          <img src={import.meta.env.VITE_API_URL+`/${img}`} className='w-52 md:h-full md:w-full' alt="" />
          </div>
        <p className='text-md text-wrap'>{content}</p>
        
        </div>
        </div>

        </div>
      </div>

      <div className="back p-5 ">
        <img src={icons.leftArrow} alt="" className='w-8  absolute top-3 bg-[#fc3030] rounded-full shadow-md shadow-white cursor-pointer animate-bounce' onClick={()=> navigate('/blog')}/>
      </div>
    </div>

  )
}

export default SingleItemDisplay
