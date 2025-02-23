import axios from "axios";
import { useFormik } from "formik";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as YUP from "yup";

export default function Verify() {
  
    const inputRefs = useRef([]);
    const navigate = useNavigate();
 

  async function verifyOTP(values) {
    let otp =
      values.firstNum +
      values.sectNum +
      values.thirdtNum +
      values.forthNum +
      values.fifthNum +
      values.sixthNum;
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
      { resetCode: otp }
    );
    navigate("/resetpassword");
    toast.success("OTP verified successfully");
  }

  let formik = useFormik({
    initialValues: {
      firstNum: "",
      sectNum: "",
      thirdtNum: "",
      forthNum: "",
      fifthNum: "",
      sixthNum: "",
    },
    
    onSubmit: verifyOTP,
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (/^\d?$/.test(value)) {
      formik.setFieldValue(name, value);

      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email</p>
              </div>
            </div>
            <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full">
                    {["firstNum", "sectNum", "thirdtNum", "forthNum", "fifthNum", "sixthNum"].map((name, index) => (
                      <div key={name} className="w-16 h-16">
                        <input
                          ref={(el) => (inputRefs.current[index] = el)}
                          className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                          maxLength="1"
                          name={name}
                          id={name}
                          value={formik.values[name]}
                          onChange={(e) => handleChange(e, index)}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-5">
                    <div>
                      <button
                        type="submit"
                        className="flex flex-row items-center justify-center text-center w-full rounded-xl outline-none py-5 border-none text-white text-sm shadow-sm bg-blue-500"
                      >
                        Verify Account
                      </button>
                    </div>
                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't receive code?</p>
                      <a className="flex flex-row items-center text-blue-500 cursor-pointer">
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
