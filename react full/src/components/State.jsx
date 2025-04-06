import React,{useState} from 'react'

export const State = () => {
  const [num,setNum]=useState(0)
  const [name,setName]=useState('')
    const decrease=()=>{
        setNum(num-1)
    }
  return (
    <>
    <button onClick={()=>setNum(num+1)}>+</button>
    <p>{num}</p>
    <button onClick={decrease}>-</button>

    <br />

    {name}
    <input type="text" value={name} onChange={(e)=>setName(e.target.value) }/>
    </>
  )
}
