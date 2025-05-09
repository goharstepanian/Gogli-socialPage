import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusThunk } from "../../store/reducers/profileReducer";
import styles from "./Status.module.css";

const Status =memo(
  function UserStatus({ id }) {
    const dispatch = useDispatch();
    const { userStatus } = useSelector((state) => state.profilePage);

    const [edit, setEdit] = useState(false);
    const [myStatus, setMyStatus] = useState(userStatus || "");

    useEffect(() => {
      setMyStatus(userStatus || "");
    }, [userStatus]);

    const changeStatus = () => {
      setEdit(false);
      dispatch(changeStatusThunk(myStatus, id));
    };

    const isOwner = localStorage.getItem("userId") === String(id);

    return (
      <div className={styles.container}>
        <span className={styles.statusText}>Status:</span>
        {isOwner ? (
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
  },
  (prevProps, nextProps) => {
        JSON.stringify(prevProps) === JSON.stringify(nextProps)
  }
); 

export default Status;
