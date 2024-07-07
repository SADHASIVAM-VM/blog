import React, { useContext, useState } from 'react'
import { CR_Context } from '../Controllers/GlobalContext'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

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
  const [ErrMsg, setErrMsg]= useState();
 
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
            console.log('Successfully Siggned in');
             navigate('/login')
        } else {
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
        <h1 className="text-2xl  my-2 text-center">Login</h1>
          <div className="flex flex-col md:w-[400px] gap-3">
              <input name="email" type="mail" className=
              "border  focus:outline-none p-2 rounded-md shadow-sm border-black" placeholder={'E-mail'} onChange={LoginhandleChange} required/>
              {ErrMsg && <p className='text-red-500 text-[10px]'>{ErrMsg}</p>}

              <input name="password"  type="password" className={`border ${ErrMsg ?  "border-red-500": "border-black"} focus:outline-none p-2 rounded-md shadow-sm`}  placeholder='Password' onChange={LoginhandleChange} required/>
              <div className="flex items-center justify-between gap-5">
              <button className='bg-[#f3030e] p-2 rounded-md text-white px-5 shadow-sm shadow-gray-700 md:w-[100px]'>Login</button>
              <div className="flex flex-col">
              <p className='text-blue-600 text-xs cursor-pointer'>forgot password !</p>
              <p className='text-blue-600 text-xs cursor-pointer'onClick={()=> setSignUp("signup")}>Don't have Account ?</p>
              </div>
              </div>
          </div>
      </form>}

      {
      SignUp === 'signup' &&
      <form action="" onSubmit={SignOnSubmit}>
      <h1 className="text-2xl  my-2 text-center">SignUp</h1>
          <div className="flex flex-col md:w-[400px] gap-3">
              <input name='name' value={handleSignUp.name} type="text" className='border border-black focus:outline-none p-2 rounded-md shadow-sm' placeholder='Name' onChange={handleChange} required/>
              <input name='email' value={handleSignUp.email} type="mail" className='border border-black focus:outline-none p-2 rounded-md shadow-sm' placeholder='E-mail' onChange={handleChange} required/>
              <input name='password' value={handleSignUp.password} type="password" className='border border-black focus:outline-none p-2 rounded-md shadow-sm' placeholder='Password' onChange={handleChange}/>
              <input type="password" value={handleSignUp.password} className='border border-black focus:outline-none p-2 rounded-md shadow-sm' placeholder='Conform Password'/>
              <div className="flex items-center justify-between gap-5">
              <button className='bg-[#f3030e] p-2 rounded-md text-white px-5 shadow-sm shadow-gray-700 md:w-[100px]'>sign up</button>
              <div className="flex flex-col">
              <p className='text-blue-600 text-xs cursor-pointer' onClick={()=> setSignUp("Login")}>Already have Account ?</p>
              </div>
              </div>
          </div>
      </form>
      }
      </div>
    </div>
  )
}

export default Login
