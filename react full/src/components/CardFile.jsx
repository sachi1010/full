import React from 'react'
import data from './data.json'
import Home from './Home'
const CardFile = () => {
   
//     const info=[
// {
//     name:"Ramkumar",
//     age:25,
//     status:false,
//     occupation:"Software Engineer",
//     image:"./images/img1.jpeg",
//     skils:["java","python","react"]
// },
// {
//     name:"Rajkumar",
//     age:30,
//     status:true,
//     occupation:"Data Scientist",
//     image:"./images/img1.jpeg",
//     skils:["python","js","react"]
// },
// {
//     name:"Rahulkumar",
//     age:35,
//     status:true,
//     occupation:"Product Manager",
//     image:"./images/img1.jpeg",
//     skils:["java","python","react"]
// },
// {
//     name:"Rajesh",
//     age:40,
//     status:true,
//     occupation:"Data Engineer",
//     image:"./images/img1.jpeg",
//     skils:["python","js","react"]
// },
// {
//     name:"Alice",
//     age:45,
//     status:true,
//     occupation:"Data Analyst",
//     image:"./images/img1.jpeg",
//     skils:["java","python","react"]
// }

//     ]

    
  return (
    <>
     <Home info={data}/> 
    </>
  )
}

export default CardFile
