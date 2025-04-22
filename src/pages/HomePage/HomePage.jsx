import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginPage from "../LoginPage/LoginPage";
import { Navigate } from "react-router-dom";
import styles from  './HomePage.module.css'

const HomePage = () => {
  const { userId } = useSelector((state) => state.auth);
  
  console.log(userId);
  
  useEffect(() => {
    if (userId) {
      localStorage.setItem("userId", userId);
    }
  }, [userId]);
  
  if (localStorage.getItem("userId")) {
    return <Navigate to={`/profile/${localStorage.getItem("userId")}`} />;
  }

  return (
    <div>
      <h2 className={styles.title}>Welcome to Gogli!</h2>
      <h3 className={styles.h3}>A soulful space for artists to connect,create & share from the heart</h3>
    <LoginPage/>
    </div>
  );
};

export default HomePage;
