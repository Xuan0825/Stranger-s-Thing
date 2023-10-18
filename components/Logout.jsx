
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function Logout({setToken}){
   const navigate = useNavigate()
    
 useEffect(()=>{
    async function out (){
       setToken(null)
       navigate('/')
    }
    out()
 },[])
    return 
     
}