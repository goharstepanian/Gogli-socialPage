import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePageAC, getUsersThunk } from "../../store/reducers/usersReducer";
import UserCard from "../../components/UserCard/UserCard";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./UsersPage.module.css";

const UsersPage = () => {
  const [portionNumber, setPortionNumber] = useState(1);
  const { users, page, totalUsersPageCount, totalUsersCount } = useSelector(
    (state) => state.usersPage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk(page));
  }, [page]);

  const changePage = (page) => {
    dispatch(changePageAC(page));
  };

  return (
    <div className={styles.wrapper}>
      <Pagination
        totalCount={totalUsersCount}
        countPerPage={totalUsersPageCount}
        currentPage={page}
        onChangePage={changePage}
        portionNumber={portionNumber}
        setPortionNumber={setPortionNumber}
      />
      <div className={styles.users}>
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
