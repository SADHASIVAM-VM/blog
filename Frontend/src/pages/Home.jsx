import React, { useEffect, useState } from "react";

import Whatblog from '../assets/image/Whatblog.png'
import blog from '../assets/image/Gold and Beige Lined States of Matter Chemistry Infographic .png'
import bg1 from '../assets/image/bg1.png'
import PopUP from "../Components/SubComponents/PopUp";

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

      <div className=" my-5">
        <div className="">
          <div className="p-5 flex flex-col md:flex-row">
            <div className="md:w-1/2">
            <h1 className="text-4xl  md:text-start text-center mb-2 text-[#fc3030]">
              What is Blog ?
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              sed nobis pariatur laborum, esse sunt repellat libero rem hic,
              magni in, facere voluptas neque quidem excepturi necessitatibus
              deleniti possimus dolorum est nam? Dolores possimus ad vitae
              doloribus totam amet deserunt itaque eius rem? Tenetur,
              repellendus nemo! Obcaecati voluptates exercitationem vitae
              ratione. Natus in a aperiam molestiae aliquam illum quia, ad
              explicabo maxime doloremque maiores nemo culpa animi, minima,
              pariatur et dolor dignissimos consectetur? Voluptatem iusto
              consequatur eligendi enim amet maiores, repudiandae ratione
              asperiores molestiae excepturi eum, saepe dolores veritatis
              voluptatum obcaecati ullam fugit velit eos odit vel. Sequi quam
              accusantium laudantium, at voluptas dignissimos exercitationem
              temporibus harum commodi ducimus? Impedit cum ullam aperiam qui
              numquam quis illum voluptate aliquam quibusdam officiis fuga
              mollitia, optio asperiores pariatur. Suscipit adipisci deserunt
              laboriosam. Laboriosam porro amet eveniet fuga explicabo quaerat,
              laudantium soluta. Qui vero nemo, dolor molestias amet earum
              minus, dolore praesentium pariatur itaque voluptatem laudantium
              provident maiores dicta odio modi aut adipisci voluptates iste
              culpa nostrum id. Veniam rem a ex provident similique magni
              obcaecati tenetur dolore cumque sequi, quia at, perspiciatis nihil
              vero harum esse soluta? Temporibus asperiores labore ipsum hic
              facilis quis non, perspiciatis, ad doloribus praesentium a et
              pariatur?
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
            <div className="img md:w-1/2 justify-center flex">
                <img src={blog} className=" w-[250px] sticky top-0"/>
              </div>
              <div className="cont md:w-1/2 w-full">
                <p className="bg-purple-200 rounded-md p-2 text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                  nisi velit molestias quos magnam tenetur, dolores,
                  repellendus, quo tempora aspernatur corrupti debitis
                  consequatur esse mollitia a fuga rem sint sapiente minima
                  doloribus. Illo modi officia rem cumque non animi fugiat hic
                  et voluptate vero, aspernatur rerum nesciunt dolor deleniti
                  voluptatibus quos quasi quae nostrum adipisci nemo saepe
                  obcaecati esse. Aut fuga perferendis voluptatem ut,
                  dignissimos, neque ea dolores, distinctio quas recusandae odio
                  ipsa numquam debitis et deleniti quasi amet provident corrupti
                  est praesentium sapiente consequatur earum dolorem.
                  Blanditiis, autem, deleniti corporis, earum modi reiciendis
                  fugit harum magni atque aut assumenda.
                </p>
                <p className="text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                  nisi velit molestias quos magnam tenetur, dolores,
                  repellendus, quo tempora aspernatur corrupti debitis
                  consequatur esse mollitia a fuga rem sint sapiente minima
                  doloribus. Illo modi officia rem cumque non animi fugiat hic
                  et voluptate vero, aspernatur rerum nesciunt dolor deleniti
                  voluptatibus quos quasi quae nostrum adipisci nemo saepe
                  obcaecati esse. Aut fuga perferendis voluptatem ut,
                  dignissimos, neque ea dolores, distinctio quas recusandae odio
                  ipsa numquam debitis et deleniti quasi amet provident corrupti
                  est praesentium sapiente consequatur earum dolorem.
                  Blanditiis, autem, deleniti corporis, earum modi reiciendis
                  fugit harum magni atque aut assumenda.
                </p>
              </div>
              
            </div>
          </div>       
        </div>
      </div>
    </div>
  );
};

export default Home;

