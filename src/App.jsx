import Home from "../components/Home"
import Profile from "../components/Profile"
import Login from "../components/login"
import NewPost from "../components/NewPost"
import SinglePost from "../components/SinglePost"
import {Routes,Route,Link} from "react-router-dom"
import Register from "../components/register"
import "./index.css"
import { useState } from "react"
import Logout from "../components/Logout"
import EditPost from "../components/EditPost"
import Message from "../components/message"
import Posts from "../components/Posts"

function App() {
const [token,setToken] = useState()
const [un,setUn] = useState()
  return (<>
     <div className="App">
    <div className="Header">
      <h1>Stranger's Things</h1>
      <Link to="/">Home</Link>
      <Link to="/Posts">Posts</Link>
      {token?<Link to="/Profile">Profile</Link>:null}
      {token?<Link to="/Logout">LogOut</Link>:<Link to="/Login">Login</Link>}
    </div>
    <div>
    <Routes>
        <Route path="/" element={<Home token= {token}  setToken={setToken} un={un} setUn={setUn}/>} />
        <Route path="/Profile" element={<Profile token ={token} setToken={setToken}/>} />
        <Route path="/Posts" element={<Posts token ={token} setToken={setToken} un={un} setUn={setUn}/>} />
        <Route path="/Register" element={<Register token={token} setToken={setToken}/>} />
        <Route path="/Login" element={<Login token={token} setToken={setToken} un={un} setUn={setUn}/>} />
        <Route path="/NewPost" element={<NewPost token={token} setToken={setToken}/>} />
        <Route path="/Logout" element={<Logout token={token} setToken={setToken} />} />
        <Route path="/posts/:id" element={<SinglePost token={token} setToken={setToken} />} />
        <Route path="/posts/:id/edit" element={<EditPost token={token} setToken={setToken} />} />
        <Route path="/posts/:id/message" element={<Message token={token} setToken={setToken} />} />

    </Routes>
    </div>
    </div>
    </>
  )
}

export default App
