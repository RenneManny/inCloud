import React from "react";
import textLogo from "../assets/images/text_logo.png";
import signupValidationSchema from "../validations/signupVal.jsx";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
function Signup() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("http://localhost:3000/user/signup", {
          email: values.email,
          password: values.password,
        });
        console.log("Signup Success ✅", response.data);
        toast.success("User created successfully !");
        resetForm();
        alert("Account created successfully!");
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Something went wrong, try again!"
        );
      }
    },
  });

  return (
    <div className="flex flex-col justify-center sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-4">
          <a href="#">
            <img src={textLogo} alt="logo" className="w-28 inline-block" />
          </a>
        </div>

        <Toaster position="top-center" />
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Email Id
              </label>
              <input
                name="email"
                type="text"
                placeholder="Enter email"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="text-red-600">
                {formik.touched.email && formik.errors.email}
              </p>
            </div>

            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Password
              </label>
              <input
                name="password"
                type="password"
                autoComplete="off"
                placeholder="Enter password"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="text-red-600">
                {formik.touched.password && formik.errors.password}
              </p>
            </div>

            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Confirm Password
              </label>
              <input
                name="cpassword"
                type="password"
                autoComplete="off"
                placeholder="Enter confirm password"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                value={formik.values.cpassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="text-red-600">
                {formik.touched.cpassword && formik.errors.cpassword}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
            >
              Create an account
            </button>
          </div>

          <p className="text-slate-600 text-sm mt-6 text-center">
            Already have an account?{" "}
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline ml-1"
            >
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
