import * as yup from "yup";
const signupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .min(10, "invalid email")
    .max(50, "invalid email")
    .required("invalid email")
  ,
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password cannot be empty!")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@]/, "Password must contain @ symbol")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    ),
  cpassword: yup
    .string()
   .oneOf([yup.ref("password"), null], "password not matched")
   .required("please confirm your password"),

});
export default signupValidationSchema