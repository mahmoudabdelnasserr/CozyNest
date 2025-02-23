import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ForgetPassword() {
  const navigate = useNavigate();
  async function forgetPassword(values) {
    try{

      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
        {
          email: values.email,
        }
      );
      toast.success('OTP sent to your email');
      navigate("/verify");
    } catch(error){
      toast.error(error.message);
    }
    }
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: forgetPassword,
  });
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h2>Enter your email</h2>

        <form onSubmit={formik.handleSubmit} className="w-1/2 mx-auto">
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
                <p className="text-red-500 font-normal">
                  {formik.errors.email}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full mx-auto mt-5 text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Confirm Email
          </button>
        </form>
      </div>
    </>
  );
}
