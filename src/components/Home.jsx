import React from 'react'
import Header from './Header'
import '../css/Home.css'
import { useState,useEffect } from 'react'
const Home = () => {
    const [cab,setcab]=useState();



    // useEffect()={
    //      fetch(""),
    //      .then(response => response.json()),
    //      .then(data => console.log(data)),
    // }
  return (
    <>
        <Header/>
        <section className="hero">
            {/* <img src="./img1.jpg" alt="" /> */}
            <div className="hero-content">
                <h1 className="title">"Your trusted travel partner on every trip"</h1>
                <button>Book Now</button>
            </div>
        </section>

        {/*  */}
        <section>
            
        </section>

    </>
 )
}

export default Home
