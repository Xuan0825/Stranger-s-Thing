import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login({setToken,setUn}){
    const[password, setPassword]=useState("");
    const[username,setUsername]= useState('')
    const navigate = useNavigate();
 async function handleSubmit(event) {
        event.preventDefault();
        
        try {
            const repsonse = await fetch('https://strangers-things.herokuapp.com/api/2305-FTB-PT-WEB-PT/users/login', 
            { 
              method: "POST", 
              headers: { 
                "Content-Type": "application/json" 
              }, 
              body: JSON.stringify({
              user:{
                username: username, 
                password: password,
              }
              }) 
            })
        
            const result = await repsonse.json();
            console.log(result,"i2");
            setToken(result.data.token);
            setUn(username);
            navigate('/');
            
            return result;

    
        } catch (error) {
          console.log(error)
        }
    }
    return (<>
    <div className="form">
    <h2>Login</h2>
    <form className="loginform" onSubmit={handleSubmit}>
        <label>
            Username{" "}
            <input 
            value={username} placeholder= "username" onChange={e=>setUsername(e.target.value)}
            />
        </label>
        <br/>
        <label>
            Password{" "}
            <input 
            value={password} placeholder= "********" onChange={e=>setPassword(e.target.value)}
            />
        </label><br/>
        <button type="submit">Log in</button>
    </form>
    <button className="linkbtn" onClick={()=>navigate(`/Register`)}>Don't have a account? Register now!</button>
    </div>
    </>)
 }