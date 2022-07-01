import React, { useEffect, useState } from 'react'
import "../styles/loginwrapper.css";
import {Link,useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';
import axios from "axios"

const SignUp = () => {
    const navigate = useNavigate();
    const [ emailValid, setEmailValid ] = useState(false);
    const [signUpState,setSignUpState]=useState({
  
        email:"",
        password:"",

    })
  

    const handleSignUpForm=(e)=>{
        let value;
        value = e.target.value
        setSignUpState({
            ...signUpState,
            [e.target.name]:value
        })
        if(e.target.type === "email"){
            checkEmailValue(value)
        }

    
    }

    const handleSignUp=(e)=>{
        e.preventDefault()

        axios({
          method: 'post',
          url: "https://reqres.in/api/register",
          data: {
            
            email:signUpState.email,
            password:signUpState.password
          }
        }).then((res)=>{
          
          toast("user signedUp successfully")
          navigate('/')

        }).catch((err)=>{
          console.log("please check with credetials",err)
        })
        
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
          <div className="bottom-space ">
            <label  className="form-label">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-control field-control"
              placeholder=" Your first name"
              value={signUpState.firstName}
              onChange={handleSignUpForm}
            />
          </div>
          <div className="bottom-space">
            <label  className="form-label mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-control field-control"
              placeholder=" Your last name"
              value={signUpState.lastName}
              onChange={handleSignUpForm}
            />
          </div>
          <div className="bottom-space">
            <label  className="form-label">
              Phone 
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              maxLength="10"
              className="form-control field-control"
              placeholder=" Your phone number"
              value={signUpState.phone}
              onChange={handleSignUpForm}
              required
            />
          </div>
          <div className="bottom-space">
            <label  className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control field-control"
              placeholder="your@email.com"
              value={signUpState.email}
              onChange={handleSignUpForm}
              />
          </div>
          <div className="bottom-space">
            <label  className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control field-control"
              placeholder="Your Password"
              value={signUpState.password}
              onChange={handleSignUpForm}
            />
          </div>
          
          <button type="submit" class="btn btn-primary login-button"  onClick={handleSignUp}
          disabled={ !signUpState.password || !emailValid}>
               Sign Up
          </button>
          <div className='text-center' style={{marginTop:"10px"}}>or</div>
          <div className='sign-in-button'>
               <h5>
                  <Link to="/">Sign In</Link>
                </h5>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default SignUp