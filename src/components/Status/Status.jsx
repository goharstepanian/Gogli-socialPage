import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusThunk } from "../../store/reducers/profileReducer";
import styles from "./Status.module.css";


export default function UserStatus({ id }) {
  const { userStatus } = useSelector((state) => state.profilePage);
  const [edit, setEdit] = useState(false);
  const [myStatus, setMyStatus] = useState(userStatus);
  const dispatch = useDispatch();

  const changeStatus = () => {
    setEdit(false);
    dispatch(changeStatusThunk(myStatus,id));
  };

  useEffect(() => {
    setMyStatus(userStatus || "");
  }, [userStatus]);

return (
  <div className={styles.container}>
    <span className={styles.statusText}>Status:</span>
    {localStorage.getItem("userId") === String(id) ? (
      edit ? (
        <>
          <input
            className={styles.input}
            value={myStatus}
            placeholder="Write new status"
            onChange={(e) => setMyStatus(e.target.value)}
          />
          <button className={styles.button} onClick={changeStatus}>
            Save
          </button>
        </>
      ) : (
        <>
          <span className={styles.statusText}>
            {userStatus || "This user has not posted a status."}
          </span>
          <button className={styles.button} onClick={() => setEdit(true)}>
            Edit
          </button>
        </>
      )
    ) : (
      <span className={styles.statusText}>
        {userStatus || "This user has not posted a status."}
      </span>
    )}
  </div>
);

}
