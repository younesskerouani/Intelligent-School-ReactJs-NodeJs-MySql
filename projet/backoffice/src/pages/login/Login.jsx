import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import "./Login.css";
import { logIn } from '../../ContextApi/actions/AuthAction';

const Login = ({signup}) => {

    const dispatch = useDispatch()
    const loading = useSelector((state)=>state.authReducer.loading)
    const [isSignUp, setisSignUp] = useState(signup);
    let navigate = useNavigate();
   
    
    const [data, setData] = useState({
        username: "",
        password: ""
      });
  
    const handleChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
      }
  
    const handleSubmit = (e) => {
        e.preventDefault();
    
        dispatch(logIn(data));
        navigate("/");
    
     };


  return (

    <div className="login">
       <span className="loginTitle">{isSignUp ? "Register" : "Admin Login "}</span>
      
      <form className="loginForm" onSubmit={handleSubmit}>
       

          <label>Username</label>
            <input className="loginInput"
              type="text"
              placeholder="Entrer votre username..."
              name="username"
              onChange={handleChange}
              value={data.username}
           
              />

         <label>Password</label>

        <input className="loginInput" 
            type="password"
            placeholder="Enter your password..." 
            name="password"
            onChange={handleChange}
            value={data.password}
          
        />
       
         <span style={{margin: '14px' , fontSize: '12px' , cursor: "pointer"}} 
         onClick = {()=> { setisSignUp((prev)=>!prev); } } >
          {isSignUp ? "Already have an account. Login!" : "Don't have an account? Sign Up"}
          </span>
          

        <button className="loginButton" type="submit" disabled={loading} >{loading? "Loading..." : "LogIn"}</button>
        {/* { error && <span style={{color: "red", marginTop: "10px"}}> Something went wrong !</span> } */}
      </form>
    </div>
  )
}

export default Login
