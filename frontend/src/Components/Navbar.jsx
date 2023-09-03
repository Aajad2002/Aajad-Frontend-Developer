import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { FaUser } from "react-icons/fa";
import LoginModal from "./LoginModal";
import { useSelector } from "react-redux";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const {user,status}=useSelector((store)=>store.UserReducer)
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen((prev) => !prev);
    setIsLoginModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsLoginDropdownOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="sticky top-0 z-[5]">
      <nav
        className="flex md:justify-around md:p-0 px-2 justify-between items-center w-full mx-auto h-[60px] font-[poppin]
        bg-transparent absolute bg-black bg-opacity-10 backdrop-blur-lg"
      >
        <div className="overflow-hidden">
          <img
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer w-[180px] h-[70px] mt-[-22px]  "
            src={logo}
            alt=""
          />
        </div>
        <div
          className={`nav-links transition-all  duration-1000 md:static md:bg-transparent bg-[#333] absolute text-white z-[5]  md:min-h-fit min-h-[100vh] top-[99%] left-0 ${
            isMenuOpen ? "left-[0]" : "-left-[1700%]"
          } md:w-auto w-[100%] flex items-center px-5 text-center bg-black bg-opacity-20 backdrop-blur-lg p-8 font-black text-[20px]  md:text-[16px] `}
        >
          <ul className="w-[100%] -mt-[90px] flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-10 md:m-auto">
            <li>
              <a href="/flacon">FLACON9</a>
            </li>

            <li>
              <a  href="/dragon">
                DRAGON
              </a>
            </li>
            <li>
              <a href="/startship">STARSHIP</a>
            </li>
            <li>
              <a href="/rideshare">RIDESHARE</a>
            </li>
            <li>
              <a href="/flacon">STARSHIELD</a>
            </li>
            <li>
              <a href="/startship">STARLINK</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center  gap-6">
        <div className="relative mt-2">
            <button
              onClick={toggleLoginDropdown}
              className="text-2xl text-white cursor-pointer"
            >
              <FaUser />
            </button>
            {isLoginDropdownOpen && (
              <div className="absolute top-[2.5rem] right-0 bg-white shadow-md rounded-md p-3 w-30">
                {
                  status ? <div>{user}</div>:<div onClick={openLoginModal}>Login/SignIn</div>
                }
                
              </div>
            )}
          </div>
          <button
            onClick={toggleMenu}
            className="text-3xl mr-4 cursor-pointer md:hidden text-[#fff]"
          >
            {isMenuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </button>
         
        </div>
      </nav>
      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onRequestClose={closeLoginModal}
        />
      )}
    </div>
  );
}

export default NavBar;
