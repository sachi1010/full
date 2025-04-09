import React,{useState} from 'react'
import './Qrcode.css'
const Qrcode = () => {
    const [image,setimage]=useState();
    const [loading,setloading]=useState();
    const [data,setdata]=useState();
    const [size,setsize]=useState()

    const handlegenerate =async()=>{
        setloading(true);
        try{
          const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`
          setimage(url)
        }catch(error){
             console.log(error)
        }
        finally{
           setloading(false)
        }
    }

    const handledownload =()=>
    {
        fetch(image).then((r)=>r.blob()).then((blob)={

        })
       
    }
  return (
    <>
      <div id='container'>
        {loading && <p>loading....</p>}
        {image && <img src={image}></img>}

        <div id='form'>
            <label htmlFor="">Enter data</label>
            <input type="text" value={data} placeholder='enter Your data' onChange={(e)=>setdata(e.target.value)} />
            <label htmlFor="">Enter Size</label>
            <input type="text" placeholder='Enter image size' value={size} onChange={(e)=>setsize(e.target.value)}/>

            <button onClick={handlegenerate}>Generate</button>
            <button onClick={handledownload }>Download</button>
        </div>
      </div>
    </>
  )
}

export default Qrcode
