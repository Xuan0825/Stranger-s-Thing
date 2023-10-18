import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
export default function Home({token,un},){
    const navigate = useNavigate ()

    return(
        <>
        <div className="home">
         {token?<h4>Welcome!{un}</h4> :<h1 className="home">Welcome !</h1>}
        </div>
        {token?<button onClick={()=>navigate('/Profile')}>Back to my Profile</button> : null}
        </>
    )
}