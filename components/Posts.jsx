import { useEffect, useState } from "react"
import { fetchAllPosts } from "../api/helper"
import { Link, useNavigate } from "react-router-dom"



export default function Posts({token,un}){
        const[query,setQuery]=useState("")
        const navigate = useNavigate()
        const[searchPosts,setSearchPosts]=useState([])
        useEffect(()=>{
            async function allPostsHandler(){
                const result = await fetchAllPosts()
                setSearchPosts(result)
             
    
            }
            allPostsHandler()
        },[]
        )
            
       return(
        <>
        <div className='search'>
        <h2>Search Posts</h2>
        <input className="bar" type= "text" placeholder='Search for Title...' onChange={e=>setQuery(e.target.value)}></input>
        <h2>{token?<Link className="addpost" to="/NewPost">Add New Posts</Link>:null}</h2>
        <ul>
        {searchPosts.filter((post)=>post.title.toLowerCase().includes(query))
        .map((post)=>(
            <li key={post._id} className="listItem">
                 <h4>From:{post.author.username}</h4>
                <h4>Title:{post.title}</h4>
                <h4>Description:{post.description}</h4>
                <h4>Price:{post.price}</h4>
                <h4>Location:{post.location}</h4>
                <button className='detail' onClick ={()=> navigate("/posts/"+post._id)}>See Details</button>
               {token && post.author.username != un ?<button className='message'onClick={()=>navigate("/posts/"+post._id+"/message")}>Send Message</button>:null}
            </li>
        ))}
    
        </ul>
      </div>
       
    </>
        ) 
    }