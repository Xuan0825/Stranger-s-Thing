import { useState } from "react";
import React from "react";
import {useNavigate } from "react-router-dom";

export default function Register(){
    const[username,setUsername]=useState("");
    const[password, setPassword]=useState("");
    const[email, setEmail]= useState("")
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        
        try {
            const repsonse = await fetch('https://strangers-things.herokuapp.com/api/2305-FTB-PT-WEB-PT/users/register', 
            { 
              method: "POST", 
              headers: { 
                "Content-Type": "application/json" 
              }, 
              body: JSON.stringify({
              user:{
                username: username, 
                password: password,
                email: email,
              }
              }) 
            })
        
            const result = await repsonse.json();
            console.log(result);
    
        } catch (error) {
          console.log(error)
        }
    }

    return (
    <>
    <div className="form">
    <h2>Sign Up</h2>
    <form className="registerform" onSubmit={handleSubmit}>
        <label>
            Email{" "}
            <input 
            value={email} placeholder= "youremail@email.com" onChange={e=>setEmail(e.target.value)}
            />
        </label><br/>
        <label>
            Username{" "}
            <input 
            value={username} placeholder= "username" onChange={e=>setUsername(e.target.value)}
            />
        </label><br/>
        <label>
            Password{" "}
            <input 
            value={password} placeholder= "********" onChange={e=>setPassword(e.target.value)}
            />
        </label><br/>
        <button type="submit">Sign up</button>
    </form>
    <button className="linkbtn" onClick={()=>navigate(`/Login`)}>Already have an account? Log in here!</button>
    </div>
    </>)
 }
 