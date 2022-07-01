
import {Outlet,Navigate}from "react-router-dom"

const ProtectedRoute=()=>{
  const userLoggedIn=localStorage.getItem("login")
  return(
      userLoggedIn ? <Outlet/> : <Navigate to="/"/>
  )
}


export default ProtectedRoute