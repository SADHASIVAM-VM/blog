import React, { useContext, useEffect, useState } from 'react'
import SingleItemDisplay from './SingleItemDisplay'
import { useParams } from 'react-router-dom';
import {CR_Context} from '../../Controllers/GlobalContext'

const SinglePage = () => {
  const {postView,setPostView} = useContext(CR_Context)
  const {id} = useParams()
console.log(postView)
const itemsView = ()=>{
try{
  fetch(import.meta.env.VITE_API_URL+`/post/view/${id}`)
  .then((res)=> res.json())
  .then((res)=> setPostView(res.detail))
}
catch(err){
  console.log("EVR - ", err)
}
}
useEffect(()=>{
  itemsView()
},[])
  return (
    <div className="">
      <SingleItemDisplay content={postView.content} Ps_Date={postView.posted_Date} username={postView.username} title={postView.postTitle} category={postView.category} img={postView.imageUrl}/>
    
    </div> 
  )
}

export default SinglePage
