import React from 'react'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
  const navi = useNavigate()
  return (
    <div className='bg-[#080808] h-[200px] flex flex-col justify-center items-center '>
       <h1 className="font-bold text-[#f3030e] text-4xl logo my-2 cursor-pointer" onClick={()=> navi('/')}>
                  We<span className="text-white ">Dot</span>
       </h1>
       <p className='text-white '>contact : 8248586299</p>
    </div>
  )
}

export default Footer
