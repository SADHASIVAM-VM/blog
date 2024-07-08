import React, { useContext, useState } from 'react'
import { CR_Context } from '../Controllers/GlobalContext'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import IconPassword from '../assets/ICONS/passsword.png'
import IconMail from '../assets/ICONS/mail.png';
import WrongP from '../assets/ICONS/wrongPassword.png'
import New_user from '../assets/ICONS/user.png'
import Sign_user from '../assets/ICONS/user1.png'


const Login = () => {
  const navigate = useNavigate()
  const {login} = useContext(CR_Context)
  const [SignUp, setSignUp] = useState("Login")
  const SignValue ={
    name:"",
    email:"",
    password:""
  }

  const [handleLogin, setHandleLogin] = useState('')
  const [handleSignUp, setHandleSignUp] = useState('')

 
  const LoginhandleChange =(e)=>{
    const {value, name} = e.target
    setHandleLogin((prev)=>({...prev,[name]:value}))

    
  }

  const LoginOnSubmit = async (e) => {
    e.preventDefault();
    const data = JSON.stringify(handleLogin);
    try {
        const response = await fetch(import.meta.env.VITE_API_URL+"/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        const result = await response.json();
  
       
        // setSuccessMsg(response.status)
        if (response.status === 200) {
           
        
            login(result.token)
            localStorage.setItem("id",result.user._id)
            
            toast.success('Registred Successfully', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
             navigate('/')
             
            // window.location.href = `/user/${result.user._id}`;
        } else {
          confirm(result.message)
            // console.log('Login failed:', result.msg);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

  const handleChange =(e)=>{
    const {name, value} = e.target
    setHandleSignUp((prev) => ({...prev, [name]:value}))
  }
  

  const SignOnSubmit = async (e) => {
    e.preventDefault();
    const data = JSON.stringify(handleSignUp);
    try {
        const response = await fetch(import.meta.env.VITE_API_URL+"/sign", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        const result = await response.json();

        if (response.ok) {
            toast.success('Successfully Sign up');
             navigate('/login')
        } else {
          toast.warn('Un-successfully Sign up');
            console.log('Sign failed:', result.msg);
        }
    } catch (error) {
        console.error('Error:', error);
    }
    setHandleSignUp(SignValue)
};

  
  return (
    <div>
      <div className="">
      
      {SignUp === "Login" &&
      <form action="" onSubmit={LoginOnSubmit}>
        <h1 className="text-3xl  my-2 text-center font-bold">Login</h1>
          <div className="flex flex-col md:w-[400px] gap-3">
           
            <div className="relative">
            <input name="email" type="mail" className=
              "border-gray-400 border-b md:w-full pl-5 w-[300px]  focus:outline-none p-2 shadow-sm " placeholder={'Type your E-mail'} onChange={LoginhandleChange} required/>
             <img src={IconMail} alt="" className='w-4 absolute bottom-3'/>
            </div>
            <div className="relative">
            <input name="password" type="password" className=
              "border-gray-400 border-b md:w-full pl-5 w-[300px]  focus:outline-none p-2 shadow-sm " placeholder={'Type your password'} onChange={LoginhandleChange} required/>
             <img src={IconPassword} alt="" className='w-4 absolute bottom-3'/>
              </div>
            <div className="btn grid">
              <button className='p-2 border border-[#ff3030] bg-[#ff3030] hover:bg-[#ff0000] hover:shadow-xl  text-white transition-all'>Login</button>
            </div>
            <div className=" flex items-center gap-2">
              <p className=" bg-gray-200 p-2 rounded-md cursor-pointer hover:bg-gray-300" title='forgot password !' onClick={()=> navigate('/')}><img src={WrongP} alt="" className='w-5 ' /> </p>
              <p className=' bg-gray-200 p-2 rounded-md cursor-pointer hover:bg-gray-300' title="New User Registration" onClick={()=> setSignUp('signup')}><img src={New_user} alt="" className='w-5 ' /></p>
            </div>
          </div>
      </form>}

      {
      SignUp === 'signup' &&
      <form action="" onSubmit={SignOnSubmit}>
      <h1 className="text-4xl  my-2 text-center font-bold">SignUp</h1>

      <div className="flex flex-col md:w-[400px] gap-3">

          <div className="relative flex items-center">
              <input name='name'  type="text" value={handleSignUp.name} className="border-gray-400 border-b md:w-full pl-6 w-[300px]  focus:outline-none p-2 shadow-sm " placeholder={'Type your Name'}  onChange={handleChange} required/>
              <img src={Sign_user} alt=""  className='w-5 absolute bottom-2'/>
         </div>

            <div className="relative">

              <input name='email' value={handleSignUp.email} type="mail" className="border-gray-400 border-b md:w-full pl-6 w-[300px]  focus:outline-none p-2 shadow-sm " placeholder={'Type your E-mail'} onChange={handleChange} required/>
              <img src={IconMail} alt=""  className='w-5 absolute bottom-2'/>
            </div>

              <div className="flex flex-col gap-2 relative">
              <input name='password' value={handleSignUp.password} type="password" className="border-gray-400 border-b md:w-full pl-6 w-[300px]  focus:outline-none p-2 shadow-sm " placeholder={'password'} onChange={handleChange}/>
              <img src={IconPassword} alt=""  className='w-5 absolute top-3'/>
              <img src={IconPassword} alt=""  className='w-5 absolute bottom-2'/>
              <input type="password" value={handleSignUp.password} className="border-gray-400 border-b md:w-full pl-6 w-[300px]  focus:outline-none p-2 shadow-sm "  placeholder='Conform Password'/>
              </div>
              </div>
      <div className="btn grid my-4">
              <button className='p-2 border border-[#ff3030] bg-[#ff3030] hover:bg-[#ff0000] hover:shadow-xl  text-white transition-all'>Sign up</button>
            </div>
           <div className="inline-block">
           <p className=' bg-gray-200 p-2 rounded-md cursor-pointer hover:bg-gray-300' title="Already I have Account" onClick={()=> setSignUp('Login')}><img src={New_user} alt="" className='w-5 ' /></p>
           <p className=''></p>
           </div>
      </form>
      }
      </div>
    </div>
  )
}

export default Login
