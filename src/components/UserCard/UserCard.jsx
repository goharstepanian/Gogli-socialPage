import React from "react";
import styles from "./UserCard.module.css"
import userImg from "../../assets/user.webp";
import { NavLink } from "react-router-dom";
const UserCard = ({ user }) => {
 

  return (
    <div className={styles.user}>
      <NavLink to={`/profile/${user?.id}`}>
        <img src={user?.photos?.large === null ? userImg : user?.photos?.large} className={styles.userImg } />
      </NavLink>
        <h2>{user?.name}</h2>

    </div>
  );
};

export default UserCard;
