import React from 'react'
import { useNavigate } from 'react-router-dom'
import { icons } from '../../assets/commonData'
const Collections = ({title, content, img, category,id, username, ps_Date}) => {
const navigate = useNavigate()
    
  return (
     
            <div className="border border-black crd h-[250px] w-[300px] bg-white-300 flex  flex-col p-2 cursor-pointer hover:border-[#fc3030] md:hover:scale-[1.1] transition-all -z-1" key={id}  onClick={(e)=> navigate(`/blog/${id}`)}>
                <div className="bg-gray-300 h-[160px] w-full  flex self-center p-2">
                    <img src={import.meta.env.VITE_API_URL+`/${img}`} alt="" className='object-contain'/>
                </div>

                <div className="">
                    <h1 className='font-bold'>{title && title.length>20? title.slice(0, 30)+".....": title}</h1>
                    <p className='text-sm text-wrap'>{content && content.length>20? content.slice(0, 30)+".....": content}</p>
                </div>

                <div className="flex  justify-between ">
                  <p className='text-[10px] font-bold flex items-center gap-1 p-1'><img src={icons.reminder} alt="" className='w-4 bg-yellow-200 rounded-full'/> {ps_Date && ps_Date.length>10 ? ps_Date.slice(0,10): ''}</p>
                  <div className="flex items-center flex-col ">
                  <img src={icons.save} alt="" className='w-5 hover:rounded-full shadow-xl  hover:shadow-black '/>
                  <p className='text-[10px] font-bold text-[#fc3030]'>@{username}</p>                  
                  </div>

                </div>
            </div>
         

  )
}

export default Collections
