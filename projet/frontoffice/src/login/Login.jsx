import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import "./Login.css";
import { logIn } from '../ApiRedux/actions/AuthAction';

const Login = () => {

    const dispatch = useDispatch()
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
       <span className="loginTitle">Please Login </span>
      
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
       
          

        <button className="loginButton" type="submit"  >LogIn</button>

      </form>
    </div>
  )
}

export default Login
