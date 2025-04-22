import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileThunk,
  getStatusThunk,
} from "../../store/reducers/profileReducer";
import { SocialAPI } from "../../api/api";
import Status from "../../components/Status/Status";
import "./ProfilePage.module.css";
import photo from '../../assets/user.webp'
import styles from './ProfilePage.module.css'

const ProfilePage = () => {
  const { profile } = useSelector((state) => state.profilePage);
  const { id } = useParams();
  
  const dispatch = useDispatch();

  const changeProfilePhoto = (e) => {
    const file = e.target.files[0];
    console.log(file);
    SocialAPI.changePhoto(file).then((res) => console.log(res));
  };

//  const handleLogOut = () => {
//    if (localStorage.getItem("userId")) {
//      localStorage.removeItem("userId");
//      <Navigate to={'/login'}/>
//     }
//  };

  useEffect(() => {
    dispatch(getProfileThunk(id));
    dispatch(getStatusThunk(id));
  }, [id]);
  return (
  <div className={styles.container}>
    <img src={profile?.photos?.large || photo} className={styles.img} />
    <h2>{profile?.fullName}</h2>
      <Status id={id} />
      {/* <button className={styles.logOutBtn} onClick={handleLogOut}>Log Out</button> */}
    <input type="file" onChange={changeProfilePhoto} className={styles.fileInput} />
  </div>

  );
};

export default ProfilePage;
