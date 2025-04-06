import React from 'react'
import Box from './Box';
import './css/Home.css'
const Home = (props) => {
    const {info}=props
    console.log(info);
  return (
    <>
    <div className="home">
    {
        info.map((item,index)=>(<Box data={item}/>))
      } 
    </div>
     
    </>
  )
}

export default Home
