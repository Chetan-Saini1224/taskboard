import React from 'react'
import { useContext,useRef ,useState} from 'react';
import { UserContext } from '../contexts/userContext';
import { signupUser } from '../api';
import { useNavigate } from "react-router-dom";
import styles from "../styles/formInputs.module.css";

const SignUp = () => {
  const { setLoggedInUser } = useContext(UserContext);

  const confirmPassword = useRef();
  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');
    const navigate = useNavigate();

  async function signup(){

    if(username == '' || password == ''){
      alert('Username or Password can not be empty');
      return;
    }
    if(confirmPassword.current.value != password){
        alert('Password does not match');
        return;  
    }
    const userData = await signupUser(username,password);
    if(userData.data)
    {
      setLoggedInUser(userData.data);
      alert('User Created succesfully')
      navigate("/");
    }
    else if(userData.message)
    {
      alert(userData.message);
    } 
  }
   
  return (
    <div className={styles.form} >
    <p>Create Account</p>
        <input type='text' value={username} onChange={(e) => setUserName(e.target.value)} placeholder='Email or Username' />
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <input type='password' ref={confirmPassword}  placeholder='Confirm Password' />  
        <input type='button' value="Submit" onClick={signup} />
    </div>
  )
}

export default SignUp