import React from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import './App.css'
import SinglePage from './pages/SinglePage/SinglePage'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer'
import Blog from './pages/Blog'
import LoginPg from './pages/LoginPg'
import PostContent from './pages/PostContent'
import NotFoundPage from './pages/Pg404'
import NewLay from './pages/NewLay'
import About from './pages/About'
import PopUP from './Components/SubComponents/PopUp'


const App = () => {
  return (

    <BrowserRouter>
     <div className='relative'>
    <div className="sticky top-0 z-40">
    <Navbar />
    </div>
    <div className="">
    <PopUP/>
    <div className="">
    <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
        />
    </div>

     <Routes>
      <Route path='/' element={  <Home/>}/>
      <Route path='/blog' element={ <Blog/>}/>
      <Route path='/login' element={ <LoginPg/>}/>
      <Route path='/pg404' element={ <NotFoundPage/>}/>
      <Route path='/blog/:id' element={<SinglePage/> }/>
      <Route path='/post/:id' element={<PostContent/>}/>
      <Route path='/lay' element={<NewLay/>}/>
      <Route path='/about' element={<About/>}/>

     </Routes>
     
    </div>
      <Footer/>
      
    </div>
    </BrowserRouter>
   
  )
}

export default App
