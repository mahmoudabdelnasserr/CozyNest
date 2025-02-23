import React from "react";
import style from "./Footer.module.css";
import logo from "../../assets/CozyNest.svg";
import { Link, useNavigate } from "react-router-dom";


export default function Footer() {
  const navigate = useNavigate()
  return (
    <>
      <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4 bottom-0">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-8" alt="Flowbite Logo" />
             
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to= {'/products'} className="hover:underline me-4 md:me-6">
                  Products
                </Link>
              </li>
              <li>
                <Link to= {'/categories'}  className="hover:underline me-4 md:me-6">
                  Categories
                </Link>
              </li>
              <li>
                <Link to= {'/brands'}  className="hover:underline me-4 md:me-6">
                  Brands
                </Link>
              </li>
              <li>
                <Link to= {'/products'}  className="hover:underline">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              CozyNest
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
