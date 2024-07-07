import Login from "../Components/Login";
import logbg from '../assets/image/two-factor-authentication-concept-illustration.png'

const LoginPg = () => {
  return (
    <div className="md:mx-20">
      
  

<div className="BgSvg  items-center justify-center w-full p-5">
              <div className="flex flex-col justify-center items-center">
              <h1 className=" text-2xl md:text-4xl">
                  Create a Account with
                </h1>
                <h1 className="font-bold text-[#f3030e] text-4xl logo my-2">
                  WE<span className="text-[#080808] ">Dot</span>
                </h1>
              </div>

            <div className="flex flex-col md:flex-row w-full ">
              <div className="w-full md:w-1/2 flex items-center md:items-start justify-center flex-col">
                <img src={logbg} alt="" className="h-[400px]"/>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                
                <Login /> 
              </div>
            </div>
          </div>
          </div>
  )
}

export default LoginPg