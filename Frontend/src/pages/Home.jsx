import React from "react";

import Whatblog from '../assets/image/Whatblog.png'
import bg1 from '../assets/image/bg1.png'
import blog_post from '/public/blog_Steps.png'
import { icons } from "../assets/commonData.js";

const Home = () => {

  return (
    <div className="">
    
      <div className="flex flex-col md:flex-row gap-10 h-[600px] w-[100%] items-center justify-center ">
        <div className="md:w-1/2 w-full h-full flex items-center justify-center">
          <div className=" text-center md:text-start">
            <h1 className="text-4xl my-2 font-bold">Welcome To Our Blog</h1>
            <h1 className="font-bold text-[#f3030e] text-6xl md:text-8xl logo my-2">
              We<span className="text-[#020202] ">Dot</span>
            </h1>
            <h1 className="text-[#ff000d] font-bold text-sm">
              share your thoughts threw Blog
            </h1>
          </div>
        </div>

        <div className="md:w-1/2  w-full">
          <div className=" w-90 md:w-full  flex items-center justify-center text-white ">
            <img src={bg1} alt=""  className="h-[400px]"/>
          </div>
        </div>
      </div>

      <div className=" my-5 ">
        <div className="">
        <h1 className="text-4xl p-5   md:text-start text-center mb-2 text-[#fc3030]">
              What is Blog ?
            </h1>
          <div className="p-5 flex flex-col md:flex-row">
            <div className="md:w-1/2 md:order-1">
            
            <p className="text-justify md:text-xl">
Blogs have become a ubiquitous part of the digital landscape, offering a platform for anyone to share their thoughts, ideas, and passions with the world. But what exactly is a blog, and why are they so popular?

At its core, a blog is an online journal, a constantly updated website where authors (bloggers) publish content in reverse chronological order. From personal experiences to industry expertise, blogs cover a vast array of topics. Whether you're a travel enthusiast sharing stunning photographs from your adventures or a tech whiz demystifying the latest gadgets, blogging empowers you to connect with a global audience.

Beyond self-expression, blogs offer a plethora of benefits. They can be used to build an online presence, establish yourself as an authority in your field, or even generate income through advertising or affiliate marketing. Blogs also foster community, creating spaces for conversation and fostering connections with like-minded individuals.

So, are you ready to join the vibrant blogosphere? With a little creativity and dedication, you can create a space that not only ignites your voice but also resonates with a dedicated audience. Start exploring, discover your niche, and unleash the power of your blog! 
            </p>
            </div>
            <div className="md:w-1/2">
              <img src={Whatblog} alt="" />
            </div>
          </div>

          {/*how post a blog */}

          <div className="p-5 ">
            <h1 className="text-4xl  md:text-start text-center mb-2 text-[#fc3030]">
              How to post a Blog ?
            </h1>
            <div className="flex flex-col md:flex-row gap-4 items-center  relative">
            <div className="justify-center flex p-5 flex-col gap-10">
            
          

          
          <img src={blog_post} alt="" />
                {/* <p className="bg-purple-200 rounded-md p-2 text-justify">
                Ever dreamt of sharing your expertise with the world? WeDot is here to empower your inner writer! Whether you're a seasoned professional or a passionate hobbyist, our platform offers the perfect space to build your blog and connect with a dedicated audience. But where do you even begin?
                </p>

<div className="flex justify-center">
  <img src={icons.leftArrow} alt="" className="-rotate-90 w-20"/>
</div>
                <div>
                  <h1>Find Your Niche</h1>
                  <p>What are you most enthusiastic about? Cooking? Coding? Cat videos? Identify your area of expertise or interest, your "niche," to attract a dedicated audience.</p>
                </div>
                <div className="flex justify-center">
                <img src={icons.ar1} alt="" className="w-44 rotate-90"/>
                </div>
                <div className="">
                  <h1>
                  Explore WeDot's Power
                  </h1>
                  <p>
                  From our intuitive interface to stunning, customizable themes, WeDot provides everything you need to create a blog that reflects your unique personality. Dive into the features and discover how WeDot can simplify your blogging journey.
                  </p>
                </div>
                <div className="flex justify-center">
                <img src={icons.ar1} alt="" className="w-44 rotate-90"/>
                </div>
                <div className="">
                  <h1>
                  Craft a Compelling Domain Name
                  </h1>
                  <p>
                  This is your blog's web address, the first impression visitors encounter. Choose a catchy name that's relevant to your niche and easy to remember. WeDot makes domain registration a breeze!
                  </p>
                </div>
                <div className="flex justify-center">
                <img src={icons.ar1} alt="" className="w-44 rotate-90"/>
                </div>
                <div className="">
                  <h1>
                  Design Your Space
                  </h1>
                  <p>
                  WeDot offers a plethora of customizable themes to choose from. Find one that resonates with your style and allows for effortless navigation. Remember, your blog's design should enhance your content and user experience.
                  </p>
                </div>
                <div className="flex justify-center">
                <img src={icons.ar1} alt="" className="w-44 rotate-90"/>
                </div>
                <div className="">
                  <h1>
                  Unleash Your Inner Writer
                  </h1>
                  <p>
                  The heart of your blog lies in your content. Create engaging, informative, and well-structured posts that capture your audience's attention. WeDot makes content creation easy with intuitive editing tools and multimedia support.
                  </p>
                </div>
                <div className="flex justify-center">
                <img src={icons.ar1} alt="" className="w-44 rotate-90"/>
                </div>
                <div className="">
                  <h1>
                  Spread the Word
                  </h1>
                  <p>
                  Share your creations across social media platforms! Connect with other bloggers and explore guest posting opportunities. The more you share, the more your audience grows.
                  </p>
                </div>
                <div className="flex justify-center">
                <img src={icons.ar1} alt="" className="w-44 rotate-90"/>
                </div>
                <div className="">
                  <h1>
                  Analyze and Adapt
                  </h1>
                  <p>
                  WeDot provides valuable analytics tools to understand your blog's performance. Utilize these insights to fine-tune your content strategy and cater to your audience's preferences.
                  </p>
                </div>
                <div className="flex justify-center">
               
             */}
             <div className="flex justify-center">
             <img src={icons.ar2} alt=""  className="rotate-90 w-40"/>
              
             </div>
            <div className="bonus bg-gray-200 p-3 rounded-md">

              <p> <b>Bonus Tip:</b> Consistency is king! Regularly publishing fresh content keeps your audience engaged and coming back for more. Don't be afraid to experiment and find your unique voice – WeDot empowers you to create a blog that truly stands out!

            With WeDot by your side, starting a successful blog and sharing your voice with the world has never been easier. So dive in, explore the platform, and embark on your blogging adventure today!</p>
            </div> 
             
              </div>
              
            </div>
          </div>       
        </div>
      </div>
    </div>
  );
};

export default Home;

