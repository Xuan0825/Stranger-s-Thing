import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Message({token}){
     const[message,setMessage]=useState("");
     const{id}=useParams()
     const handleSubmit = (event) => {
          event.preventDefault();
         
         fetch(`https://strangers-things.herokuapp.com/api/2305-FTB-PT-WEB-PT/posts/${id}/messages`, 
              { 
                method: 'POST', 
                headers: { 
                  "Content-Type": "application/json" ,
                  'Authorization': `Bearer ${token}`
                }, 
                body: JSON.stringify({
                   message:{ 
                    content:message}
                }
                )
              })
              
              .then((resp)=>resp.json())
              .then((question)=>console.log(question))
          }
        return (
            <>
            <div className="MessageForm">
            <h2> Send Message</h2>
            <form onSubmit={handleSubmit}>
            <label>
                    Message:{" "}
                    <input 
                    value={message} onChange={e=>setMessage(e.target.value)}
                    />
                </label><br/>
                <button className="button" >Submit</button>
            </form>
            </div>
            </>)
        
        }
