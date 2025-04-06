import React,{useState}from 'react'
import "./css/Credoperation.css"
export const Credoperation = () => {
    const [userdetail,setuserdetail]=useState(
        {
            name:"",
            email:"",
            phone:"",
            password:"",
        },
    )
    const [userlist,setuserlist]=useState([]);


    const handleInput = (e) => {
        const { name, value } = e.target;
        setuserdetail((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      const save = () => {
        const saved = JSON.parse(localStorage.getItem('userlist')) || [];
        saved.push(userdetail);
        localStorage.setItem('userlist', JSON.stringify(saved));
        setuserlist(saved);
        alert('Saved successfully');
      };

      const retrieve = () => {
        const savedData = JSON.parse(localStorage.getItem('userlist')) || [];
        setuserlist(savedData);
      };
 
     const deleteuser=()=>{
        const deletedata = localStorage.getItem('userlist')||[];
        if(deletedata){
            localStorage.removeItem('userlist')
            setuserlist([])
        }else{
            alert('No user to delete')
        }
     }
         

    const edituser = () => {
        try {
            const editdata = localStorage.getItem('userlist')||[];
            if (editdata) {
                const parsed = JSON.parse(editdata); 
                const updatedList = parsed.filter(user => {user.name && user.email && user.phone && user.password}); 
                localStorage.setItem('userlist', JSON.stringify(updatedList)); 
                setuserlist(updatedList); 
                alert("Userlist updated successfully");

                console.log(updatedList)
            } else {
                alert('No user data found to edit');
            }
        } catch (error) {
            console.error(error); 
            alert("error");
        }
        // console.log(updatedList)
    };
  return (

    <>
<form action="">
    <label htmlFor="name">Enter your name:</label>
    <input type="text" placeholder='enter your name' name='name' onChange={handleInput} value={userdetail.name} />
    <br />
    <label htmlFor="email">Enter your email:</label>
    <input type="text" placeholder='enter your email' name='email' onChange={handleInput} value={userdetail.email}/>
    <br />
    <label htmlFor="password">Enter your password:</label>
    <input type="password" placeholder='enter your password' name='password' onChange={handleInput} value={userdetail.password} />
    <br />
    <label htmlFor="phone">Enter your phone number:</label>
    <input type="text" placeholder='enter your phone number' name='phone' onChange={handleInput} value={userdetail.phone} />
</form>

<div className="container">
<button onClick={save}>save</button>
<button onClick={retrieve}>retrieve</button>
<button onClick={edituser}>update</button>
<button onClick={deleteuser}>delete</button>
</div>
<div className="details">
        <h1>User Details</h1>
        <table id="employeeTable">
            <thead>
                <tr>
                    <th>user Name</th>
                    <th>user mail</th>
                    <th>user Phone Number</th>
                    <th>user password</th>
                </tr>
            </thead>
            <tbody >
            {userlist.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.password}</td>
              </tr>
            ))}
            </tbody>
            


        </table>
    </div>

    </>
  )
}
