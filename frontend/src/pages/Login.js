import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/userContext';
import { loginUser } from '../api';
import { useNavigate } from "react-router-dom";
import styles from "../styles/formInputs.module.css";

const Login = () => {
  const { setLoggedInUser } = useContext(UserContext);
  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  async function login(){
    if(username == '' || password == ''){
      alert('Username or Password can not be empty');
      return;
    }
    const userData = await loginUser(username,password); 
    if(userData.data)
    {
      setLoggedInUser({
        user : userData.data,
        login: true
      });
      localStorage.setItem('uid',userData.data._id);
      navigate("/");
    }
    else if(userData.message)
    {
      alert(userData.message);
    }
  }

  return (
    <div className={styles.form}>
    <p>Login</p>
        <input type='text' value={username} onChange={(e) => setUserName(e.target.value)} placeholder='Email or Username' />
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <input type='button' value="Submit" onClick={login} />
    </div>
  )
}

export default Login