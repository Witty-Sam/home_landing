import React from 'react';


const NavBar = () => {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 h-[50px] bg-[#FFFFFF] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex flex-row items-center justify-center px-[20px] py-[4px] rounded-full max-w-[90%]">

  {/* Logo */}
  <div className="flex items-center justify-left mr-[15px] px-[15px]">
    <img
      src="./images/VidaBlack.png"
      alt="Vida Logo"
      style={{ maxHeight: "50px", maxWidth: "50px" }}
    />
  </div>

  {/* Navigation Buttons */}
  <div className="flex flex-row gap-10 items-center justify-center ml-32">
  <button className="px-[15px] py-[6px] text-[12px] flex items-center justify-center text-[#0F0D35] font-medium border-none rounded-full mr-[12px] shadow-md bg-lightgray hover:shadow-md transition duration-300 ease-in-out transform hover:scale-90 ">
    Home
  </button>
  <button className="px-[15px] py-[6px] text-[12px] flex items-center justify-center text-[#0F0D35] font-medium border-none rounded-full mr-[12px] shadow-md bg-lightgray hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    Use Cases
  </button>
  <button className="px-[15px] py-[6px] text-[12px] flex items-center justify-center text-[#0F0D35] font-medium border-none rounded-full mr-[12px] shadow-md bg-lightgray hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    APIs
  </button>
  <button className="px-[15px] py-[6px] text-[12px] flex items-center justify-center text-[#0F0D35] font-medium border-none rounded-full mr-[12px] shadow-md bg-lightgray hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    Pricing
  </button>
  <button className="px-[15px] py-[6px] text-[12px] flex items-center justify-center text-[#0F0D35] font-medium border-none rounded-full mr-[12px] shadow-md bg-lightgray hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    Login
  </button>
  </div>
</div>


  );
}

export default NavBar;
