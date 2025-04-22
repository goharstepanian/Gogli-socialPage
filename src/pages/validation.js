import * as YUP from "yup";

const validation = YUP.object().shape({
  email: YUP.string().email().required("Email is Required!"),

  password: YUP.string()
    .min(4, "The minimum number of characters must be 4.")
    .max(12, "The maximum number of characters must be 12")
    .required("Password is Required!"),
});

export default validation;
