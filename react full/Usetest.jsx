import React from 'react'
import { useState,useEffect } from 'react'
import "./css/Usetest.css"

export const Usetest = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response=> response.json())
      .then(data=>setData(data))
    },[])
        
    
  return (
    <>
      {
        data.map((item,index)=>{
            return(
                <div key={index} className='box'>
                    <h1>{item.userId}</h1>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            )
        })
      } 
    </>
  )
}
