import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userRegistration } from "../Redux/UserSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LoginModal({ isOpen, onRequestClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch()
  const { message,user,status } = useSelector((store) => store.UserReducer)
  const [isSignIn, setIsSignIn] = useState(true);

  const handleInputChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleToggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignIn) {
      if (formData.email && formData.password) {    
        dispatch(userLogin(formData))   
        onRequestClose();
        if(status){
          toast.success(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }else{
          toast.error(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } else {
        alert("Please enter your email and password.");
      }
    } else {
      if (formData.name && formData.email && formData.password) {
        dispatch(userRegistration(formData))
        
        toast.success(message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error("fill all the fields", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? "block" : "hidden"
        }`}
    >
      <div className="absolute">
        <ToastContainer />
      </div>
      <div className="fixed inset-0" onClick={onRequestClose}></div>
      <div className="bg-black bg-opacity-40 backdrop-blur-lg w-96 p-4 rounded-lg shadow-lg z-50 text-white relative">
        <button
          className="absolute top-2 right-2 text-gray-300 hover:text-white"
          onClick={onRequestClose}
        >
          <IoCloseSharp className="text-3x" />
        </button>
        <div className="text-center mb-4">
          <FaRocket className="text-4xl mb-2 text-blue-500" />
          <h2 className="text-2xl font-semibold">
            {isSignIn ? "Login" : "Sign Up"}
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          {!isSignIn && (
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border-none focus:border-none focus:bg-back focus:bg-opacity-40 focus:backdrop-blur-lg rounded-md bg-black bg-opacity-40 backdrop-blur-lg"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border-none focus:border-none rounded-md bg-black bg-opacity-40 backdrop-blur-lg"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border-none rounded-md bg-black bg-opacity-40 backdrop-blur-lg"
              placeholder="Your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md w-full"
            >
              {isSignIn ? "Login" : "Sign Up"}
            </button>
          </div>
          <div className="mt-4 text-center">
            {isSignIn ? (
              <p>
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-blue-500 hover:underline"
                  onClick={handleToggleSignIn}
                >
                  Sign Up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-blue-500 hover:underline"
                  onClick={handleToggleSignIn}
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
