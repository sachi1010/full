import React from 'react'
import Skill from './Skill';


const Box = (props) => {
    const {data}=props
    console.log(data);
  return (
    < >
     {/* <div className="box">
          <img src={data.image} alt="" className={data.status?"green":"red"}/>
          <h2>{data.name}</h2>
          <h3>Age:{data.age}</h3>
          <h3>{data. occupation}</h3>
          <h3 id='skil'>Skils:</h3>
          <ul>
            {
            data.skils.map((item, index) => (<Skill item={item}/>))
            }
          </ul>
      </div>  */}
      <div className="box1">
        <img src={data.url} alt="" />
        <h2>{data.userId}</h2>
        <h3>{data.title}</h3>
        <p>
          {data.body}
        </p>
      </div>
    </>
  )
}

export default Box
