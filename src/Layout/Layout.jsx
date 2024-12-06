import React from "react";
import { Outlet } from "react-router-dom";
import OverSlider from "../Components/OverSlider";
import { IoPaperPlaneOutline, IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import PaymentGateways from "../Components/PaymentGateways";
// import { AccountUserPerson } from "react-basicons";

const Layout = () => {
  return (
    <div>
      <div>
        <OverSlider />
        <div className="flex items-center justify-between md:justify-between p-4 relative border-b">
          <div className="md:hidden">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7H19M5 12H19M5 17H19"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="font-bold text-2xl">
            Sky<span className="text-blue-500">World.</span>
          </div>
          <div className="flex items-center justify-center gap-1 md:w-[40%] absolute top-[110%] w-[90%]  md:static">
            <input
              type="text"
              className="border p-2 rounded w-full outline-blue-500 border-gray-300"
              placeholder="Search for Products..."
            />
            <div className="p-3 rounded bg-blue-500 text-lg cursor-pointer hover:bg-black text-white transition-all duration-300">
              <IoSearch />
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 21V17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="hidden md:block">
                <p>Hello,sign in</p>
                <p className=" font-bold">Account & List</p>
              </div>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
              <div className="relative">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 3H5.5L7.85836 13.4425C8.0643 14.3543 8.87398 15 9.8088 15H18.3957C19.3331 15 20.1447 14.3489 20.348 13.4339L22 6H6.5M11 20C11 20.5523 10.5523 21 10 21C9.44772 21 9 20.5523 9 20C9 19.4477 9.44772 19 10 19C10.5523 19 11 19.4477 11 20ZM19 20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="absolute -top-1 -right-1 bg-blue-500  rounded-full text-white h-5  w-5 flex items-center justify-center text-sm">
                  0
                </span>
              </div>
              <div className="hidden md:block">
                <p>Cart</p>
                <p className=" font-bold">Rs. 0.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 border-b  shadow-sm md:flex items-center justify-between hidden ">
          <div className="flex items-center hover:text-blue-500 cursor-pointer">
            <div className="">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7H19M5 12H19M5 17H19"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            All Categories
          </div>
          <ul className="flex items-center justify-center gap-3 lg:gap-10 font-bold">
            <li className="hover:text-blue-500 cursor-pointer">Shop</li>
            <li className="hover:text-blue-500 cursor-pointer">Accessories</li>
            <li className="hover:text-blue-500 cursor-pointer">Electronics</li>
            <li className="hover:text-blue-500 cursor-pointer">FAQs</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
          </ul>
          <div className="flex items-center justify-center gap-1 hover:text-blue-500 cursor-pointer">
            Track Your Order
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="lucide lucide-send"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 md:mt-0">
        <Outlet />
      </div>
      <footer
        className={` bg-slate-900 rounded-sm text-white py-10 px-4 md:px-12  `}
      >
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>Call us 24/7</p>
            <p className="mb-2">+91 8564903343</p>
            <p>Semra, Sahjanwa, Gorakhpur,</p>
            <p>Uttar Pradesh 273209</p>
            <p className="mt-2">Email: sunilgupta1577.skg@gmail.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>Terms Of Use</li>
              <li>Refund Policy</li>
              <li>FAQs</li>
              <li>About Us</li>
              <li>Career</li>
              <li>Our Blog</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>Consumer Electronics</li>
              <li>Clothing & Apparel</li>
              <li>Home & Kitchen</li>
              <li>Health & Beauty</li>
              <li>Computer & Tech</li>
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="text"
              className="p-2  border rounded text-black"
              placeholder="Enter your mail..."
            />
            <div className="p-3 rounded bg-blue-500 text-lg cursor-pointer hover:bg-black text-white transition-all duration-300">
              <IoPaperPlaneOutline />
            </div>
          </div>
        </div>

        <hr className="my-6" />
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className=" text-center">
            &copy; 2021-2024 Sky World. All Rights Reserved.
          </div>
          <div>
            <PaymentGateways />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
