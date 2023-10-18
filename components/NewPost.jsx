import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function NewPost({token}){
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[price, setPrice]=useState("");
    const[deliver, setDeliver]=useState("");
    const navigate = useNavigate();
 const handleSubmit = (event) => {
      event.preventDefault();
     
     fetch('https://strangers-things.herokuapp.com/api/2305-FTB-PT-WEB-PT/posts', 
          { 
            method: 'POST', 
            headers: { 
              "Content-Type": "application/json" ,
              'Authorization': `Bearer ${token}`
            }, 
            body: JSON.stringify({
               post:{ 
                title: title,
                description: description,
                price:price,
                willDeliver: deliver,}
            }
            )
          })
          .then((resp)=>resp.json())
          .then((question)=>console.log(question))
          navigate('/Posts')
      }
    return (
        <>
        <div className="NewPostForm">
        <h2> New Post Form</h2>
        <form onSubmit={handleSubmit}>
        <label>
                Title:{" "}
                <input 
                value={title} onChange={e=>setTitle(e.target.value)}
                />
            </label><br/>
            
            <label>
                Description:{" "}
                <input 
                value={description} onChange={e=>setDescription(e.target.value)}
                />
            </label><br/>
            <label>
                Price:{" "}
                <input 
                value={price} onChange={e=>setPrice(e.target.value)}
                />
            </label><br/>
         
            <label>
               WillDeliver:{" "}
                <input 
                value={deliver} onChange={e=>setDeliver(e.target.value)}
                />
            </label><br/>
            <button className="button" >Submit</button>
        </form>
        </div>
        </>)
    
    }