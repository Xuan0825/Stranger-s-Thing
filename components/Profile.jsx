import { useState } from "react";
import { useEffect } from "react";



export default function Profile({token}){
    const[userInfo, setUserInfo]=useState()
    const[message,setMessage] = useState()
    function renderUserInfo(){
               
        return userInfo && userInfo.map((user)=>{
            return (
                <div className='allUserInfo' key={user._id}>
                <h4>Title:{user.title}</h4>
                <h4>Description:{user.description}</h4>
                <h4>Price:{user.price}</h4>
                <h4>Location:{user.location}</h4>
                <button className='detail'>Delete</button>
                <button className='detail'>Edit</button>
              </div >
            )
        })
         
    }
       
      function renderMessage(){
       
        return message && message.map((user)=>{
            return (
                <div className='allMessageInfo' key={user._id}>
                  <h4>From Post:{user.post.title}</h4>
                  <h4 className="Msg">Message send by me:{user.content}</h4>
              </div >
            )
        })
         
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
            setUserInfo(result.posts)
            setMessage(result.messages)
            console.log("2",result)
    }
    userHandle()

},[])





    return (
     <>
     <div >
      <h1 className="profilehead">Posts by Me :</h1>
     </div>
     <div>
        {renderUserInfo()}
     </div>
     <div >
      <h1 className="profilehead"> Message by Me :</h1>
     </div>
     <div>
       {renderMessage()}
     </div>
   
     </>
    )
 }