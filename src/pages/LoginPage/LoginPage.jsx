import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { setLoginThunk } from "../../store/reducers/authReducer";
import validation from "../validation";
import { NavLink } from "react-router-dom";
import styles from "./LoginPage.module.css"

const LoginPage = () => {
  const dispatch = useDispatch();

  const login = ({ email, password }) => {
    dispatch(setLoginThunk(email, password));
  };
  
 

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => login(value)}
        validationSchema={validation}
      >
        <Form>
          <Field
            name="email"
            placeholder="email"
            type="email"
            className={styles.formField}
          />
          <ErrorMessage name="email" component="div" className={styles.error} />
          <Field
            type="password"
            name="password"
            placeholder="password"
            className={styles.formField}
          />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />
          <button className={styles.button}>Login</button>
          <NavLink to="/users">
            <button className={styles.button}>Log in without an account</button>
          </NavLink>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
