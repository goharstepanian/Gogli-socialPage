import React, { memo } from "react";
import styles from "./UserCard.module.css";
import userImg from "../../assets/user.webp";
import { NavLink } from "react-router-dom";

const UserCard = memo(
  ({ user }) => {
    return (
      <div className={styles.user}>
        <NavLink to={`/profile/${user?.id}`}>
          <img
            src={user?.photos?.large === null ? userImg : user?.photos?.large}
            className={styles.userImg}
            alt="User"
          />
        </NavLink>
        <h2>{user?.name}</h2>
      </div>
    );
  },
  (prevProps, nextProps) =>
    JSON.stringify(prevProps) === JSON.stringify(nextProps)
);

export default UserCard;
