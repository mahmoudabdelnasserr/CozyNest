import React, { useContext, useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/CozyNest.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UsersContext } from "../../stores/UsersContext";
import { CartContext } from "../../stores/CartContext";
import Dropdown from "../Dropdown";

export default function Navbar() {
  const navigate = useNavigate();
  let { userToken, setUserToken } = useContext(UsersContext);
  let {cart} = useContext(CartContext);

  function logout(){
    localStorage.removeItem('token');
    setUserToken(null);
    navigate('/login');

  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-200 fixed inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between px-6 py-5 lg:px-8 bg-white"
          aria-label="Global"
        >
          <Link to={"home"} className="lg:pe-4">
            <span className="sr-only"></span>
            <img className="" src={logo} width={120} alt="" />
          </Link>
          <div onClick={() => setIsOpen(true)} className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-transparent hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {userToken && (
            <div className="hidden lg:flex lg:gap-x-2 capitalize">

              <NavLink to={"home"} className="font-medium text-gray-500">
                home
              </NavLink>
            
              <NavLink to={"brands"} className=" font-medium text-gray-500">
                brands
              </NavLink>
              
              <NavLink to={"categories"} className=" font-medium text-gray-500">
                categories
              </NavLink>
              <NavLink to={"products"} className=" font-medium text-gray-500">
                products
              </NavLink> <NavLink to={"allorders"} className=" font-medium text-gray-500">
                Orders
              </NavLink>
            </div>
          )}
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-3 items-center gap-2"> 
          <NavLink to={"cart"} className=" font-medium text-gray-900">
                
               <i className="fas fa-shopping-cart"></i>  <span>{userToken ? cart?.numOfCartItems : 0}</span>
              </NavLink>  
              <NavLink to={"wishlist"} className=" font-medium text-gray-900 flex gap-2 items-center">
                
              <i className="fa-solid fa-heart text-black"></i><span className="text-gray-900">Wishlist</span>
              </NavLink>  
            {userToken ?<Dropdown /> : 
            <>

            
             <NavLink to={"/"} className=" font-medium text-gray-900">
                  Register
                </NavLink>
                <NavLink to={"login"} className=" font-medium text-gray-900">
                  Login <span aria-hidden="true"></span>
                </NavLink>
            </>
            }
              
            
        
               
           
            
          </div>
        </nav>
        {/* Mobile menu, show/hide based on menu open state. */}
        <div
          className={isOpen ? "lg:hidden" : "hidden"}
          role="dialog"
          aria-modal="true"
        >
          {/* Background backdrop, show/hide based on slide-over state. */}
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink to={"home"} className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="" src={logo} width={120} alt="" />
              </NavLink>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="-m-2.5  bg-transparent hover:bg-gray-100 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <NavLink
                    to={"home"}
                    className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                  >
                    home
                  </NavLink>
                  <NavLink
                    to={"cart"}
                    className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                  >
                    cart
                  </NavLink>
                  <NavLink
                    to={"brands"}
                    className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                  >
                    brands
                  </NavLink>
                  <NavLink
                    to={"categories"}
                    className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                  >
                    categories
                  </NavLink>
                  <NavLink
                    to={"products"}
                    className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                  >
                    products
                  </NavLink> 
                  
               
                </div>
                <div className="py-6">
                  <NavLink
                    to={"/"}
                    className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to={"login"}
                    className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                  >
                    Log in <span aria-hidden="true">→</span>
                  </NavLink>
                  <span className="block rounded-lg  text-base/7 font-medium text-gray-900 hover:bg-gray-50">
                    Log Out
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
