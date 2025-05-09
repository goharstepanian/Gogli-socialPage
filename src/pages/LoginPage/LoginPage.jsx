import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { setLoginThunk } from "../../store/reducers/authReducer";
import validation from "../validation";
import { NavLink } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = memo(() => {
  const dispatch = useDispatch();

  const login = useCallback(
    ({ email, password }) => {
      dispatch(setLoginThunk(email, password));
    },
    [dispatch] 
  );

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={login}
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

          <button type="submit" className={styles.button}>
            Login
          </button>

          <NavLink to="/users">
            <button type="button" className={styles.button}>
              Log in without an account
            </button>
          </NavLink>
        </Form>
      </Formik>
    </div>
  );
});

export default LoginPage;
