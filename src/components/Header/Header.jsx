import React from 'react'
import styles from "./Header.module.css"
import photo from "../../assets/icon.png"
import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';

export const Header = () => {
  
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={photo} alt="icon" className={styles.iconImg} />
        <p className={styles.text}>Gogli</p>
      </div>
      <Nav/>
      <div className={styles.btns}>
        <NavLink to={"/contactUs"}>
          <button className={styles.contactBtn}>Contact Us</button>
        </NavLink>
      </div>
    </header>
  );
}
