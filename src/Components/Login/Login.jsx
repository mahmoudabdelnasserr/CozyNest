import React, { useContext } from "react";
import style from "./Login.module.css";
import { Formik, useFormik } from "formik";
import axios from "axios";
import * as YUP from "yup";
import { Link, useNavigate } from "react-router-dom";
import {UsersContext} from "../../stores/UsersContext";

export default function Login() {
  let { setUserToken } = useContext(UsersContext);
  const navigate = useNavigate();
  let validationSchema = YUP.object().shape({
    email: YUP.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: YUP.string()
      .required("Password is required")
      .min(8, "Password should be at least 8 characters")
      .matches(/[A-Z]/, "Password should contain at least one uppercase letter")
      .matches(/[a-z]/, "Password should contain at least one lowercase letter")
      .matches(/[0-9]/, "Password should contain at least one number"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: login,
  });

  async function login(values) {
    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      let token = data.token;
      localStorage.setItem("token", token);
      setUserToken(data.token);
      navigate("/home");
    } catch (err) {
      console.log("error");
    }
  }

  return (
    <>
    <section className="">
    <h2 className="text-center my-8">Login</h2>

      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
        <div className="grid md:grid-cols-1 md:gap-4">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none  focus:border-blue-600 peer focus:ring-0"
              placeholder=" "
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 font-normal">{formik.errors.email}</p>
            )}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
             
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 font-normal">
                {formik.errors.password}
              </p>
            )}
          </div>
        </div>
        <Link to={'/forgetpassword'}><div className="underline">Forget Password?</div></Link>
        <button
          type="submit"
          className="w-full mx-auto mt-5 text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
      
        </button>
      </form>
    </section>
    </>
  );
}
