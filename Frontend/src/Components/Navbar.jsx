import React, { useContext } from 'react'
import { NavData, icons } from '../assets/commonData'
import { useNavigate } from 'react-router-dom'
import { CR_Context } from '../Controllers/GlobalContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navi = useNavigate()
  const {loggedIn, logout, pTid,token} = useContext(CR_Context)

 
  return (
    <div className='min-h-16 w-full flex justify-around items-center bg-white '>
     <div className="" >
        <h1 className='logo font-bold text-[#f3030e] text-xl cursor-pointer' onClick={()=> navi('/')}>We<span className='text-[#020202] '>Dot</span></h1>
     </div>
     <div className="">
      <ul className='flex gap-2'>
      {
        NavData.map((itms)=>(
          
          <li key={itms.id} className='hover:text-[#fc3030] font-bold cursor-pointer'> <Link to={itms.link}>{itms.menu}</Link>  </li>
        
        ))
      }
       <li className='hover:text-[#fc3030] font-bold cursor-pointer'> <Link to={token != '' ? `/post/${pTid}`: '/404Pg'}>post</Link> </li>
      </ul>
     </div>
     <div className="login">
      {
        loggedIn ? 
        
      <button className='p-1 px-2 rounded-md text-white ' onClick={logout}><img src={icons.profile} alt="" className='w-7 shadow-md rounded-full shadow-gray-300' title='LogOut' /></button>
      :<button className='p-1 px-2 rounded-md text-white ' onClick={()=> navi('/login')}  title='Log in'><img src={icons.login} alt="" className='w-6'/></button>
      }
     </div>
        </div>
  )
}

export default Navbar
