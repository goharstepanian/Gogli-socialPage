import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactPage.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .min(10, "Message is too short")
    .required("Message is required"),
});

const ConnectPage = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted", values);
    resetForm();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Connect With Us</h1>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.label}>Name</label>
          <Field className={styles.input} name="name" placeholder="Your name" />
          <ErrorMessage name="name" component="div" className={styles.error} />

          <label className={styles.label}>Email</label>
          <Field
            className={styles.input}
            name="email"
            type="email"
            placeholder="Your email"
          />
          <ErrorMessage name="email" component="div" className={styles.error} />

          <label className={styles.label}>Message</label>
          <Field
            className={styles.textarea}
            name="message"
            as="textarea"
            rows="5"
            placeholder="Write your message here..."
          />
          <ErrorMessage
            name="message"
            component="div"
            className={styles.error}
          />

          <button className={styles.button} type="submit">
            Send Message
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ConnectPage;
