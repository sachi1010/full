import React,{useState}from 'react'
import  './css/LoginPage.css'

export const LoginPage = () => {
  const [username,setusername]=useState('');
  const [password,setpassword]=useState('');

  const handlelogin=()=>{
    console.log(username,password); 
  }
  return (
    <>
    <div className="login-page">
    <h1>Login page</h1>
    <input type="text" value={username} placeholder='Enter username' onChange={(e)=>setusername(e.target.value)} required />
    <br />
    <input type="password" value={password} placeholder='Enter password' onChange={(e)=>setpassword(e.target.value)} required />
    <br />
    <div className="check">
    <input type="checkbox"  />
    <label>Remember me</label>
    </div>
    
    <button onClick={handlelogin}>Login</button>
<a href="">Forgot password?</a>
    </div>
     
     
    </>
  )
}
