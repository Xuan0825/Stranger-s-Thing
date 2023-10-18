import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchSinglePost } from "../api/helper";
import { deletePost } from "../api/helper";


export default function SinglePost({token}){
    const[post,setPost]=useState('')
    const[postId,setPostId] = useState('')
    const{id} = useParams()
    const navigate = useNavigate()
    const[message,setMessage] = useState([])
    const Messageinfo = message.filter(msg => { 
        return msg.post.author._id === postId
    })
    console.log(message,"message")
    console.log(Messageinfo,">>")
    console.log(postId,"psot")
        
    function renderSinglePost(){
        return (
              <div className='SinglePost' key={post._id}>
                <h4>Title:{post.title}</h4>
                <h4>Description:{post.description}</h4>
                <h4>Price:{post.price}</h4>
                <h4>Location:{post.location}</h4>
                <button className='delete' onClick={()=>deletePost({token},post._id)&& navigate('/Posts')}>Delete</button>
               {post.author?<button className='edit' onClick={()=>navigate('/posts/'+post._id+'/edit')}>Edit Post</button>:null}
                 <h4 className="messagehead">Messsage regarding this post</h4>
                 
                {Messageinfo.map((user)=>{
                    return(
                    <div className="Message">
                    <h4 >Message from Me:</h4>
                    <h4>{user.content}</h4>
                    </div>
                    )
                })}
        
                 </div >
                
        )
        }
        async function fetchAllUser(){
            try {
                const response = await fetch(`https://strangers-things.herokuapp.com/api/2305-FTB-PT-WEB-PT/users/me`, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                  
                },
              });
              const result = await response.json();
              console.log(result);
              return result.data;
            } catch (err) {
              console.error(err);
            }
          }
          useEffect(()=>{
            async function userHandle() {
                const result = await fetchAllUser()
                    setMessage(result.messages)
                    console.log("2",result)
            }
            userHandle()
        
        },[])

    useEffect(()=>{
        async function SinglePostHandler(){
            const result = await fetchSinglePost({token},id)
            setPost(result)
            setPostId (result.author._id)
            console.log(result,"title")
        }
      SinglePostHandler()

    },[]
    )
    
    return (
       <div>
        {renderSinglePost()}
       </div> 
   )
    
    }