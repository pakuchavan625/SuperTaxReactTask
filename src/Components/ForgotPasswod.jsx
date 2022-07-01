import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../styles/loginwrapper.css"

const ForgotPasswod = () => {
 
    const naviagte=useNavigate()
    const [email,setEmail]=useState("")
    const[emailValid,setEmailValid]=useState(false)

    const handleInput=(e)=>{
        e.preventDefault();
       setEmail(e.target.value)
      
       if(e.target.type==="email"){
           checkEmailValue(e.target.value)
        
       }
        
    }
    console.log(email)

    const handleSubmit=()=>{
        toast("Password reset link sent succesfully")
        naviagte('/')
    }
    
    const checkEmailValue = value => {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!reg.test(value)) {
          setEmailValid(false);
        } else {
          setEmailValid(true);
        }
      };
  return (
    <div className="login-wrapper">
    <div className="login-form">
      <form className="mb-5">
        <div className="bottom-space">
          <label className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control field-control"
            name="email"
            id="email"

            placeholder="your@email.com"
            onChange={handleInput}
          
          />
        </div>
        <button type="submit" class="btn  btn-primary login-button" disabled={!emailValid} onClick={handleSubmit} >
             Submit
        </button>
     
      </form>
    </div>
  </div>
  )
}

export default ForgotPasswod