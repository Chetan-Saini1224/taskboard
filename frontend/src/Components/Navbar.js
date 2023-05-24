import React, { useState ,useContext, useEffect} from 'react'
import { Link,Outlet } from 'react-router-dom';
import styles from "../styles/navbar.module.css";
import { UserContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../api';

const Navbar = () => {

  const { loggedInUser} = useContext(UserContext);
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");
   const {setLoggedInUser} = useContext(UserContext);
  function logout(){
    localStorage.removeItem('uid');
    navigate("/login");
  }

  useEffect(() => {
    async function getUser(){
    const user = await getUserData();
        setLoggedInUser({
        user : user.data,
        login: true
      });
    }
  if(uid) getUser();  
  },[]);

  return ( <>
    <div className={styles.navbar}>
       {(uid)? <p>Welcome {loggedInUser.user.username}</p> : <p>Task Board</p>}
        <div className={styles.right}>
       {((uid) ? <input type='button' onClick={logout} value="Logout" className={styles.btn} /> : 
        <>
        <Link to="/login" className={styles.btn}>Login</Link>
        <Link to="/signup" className={styles.btn}>Sign Up</Link>
        </>
       )}  
       </div>
    </div>
    <Outlet />
    </>
  )
}

export default Navbar;