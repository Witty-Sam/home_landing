import React from 'react';


const NavBar = () => {
  return (
    <div className="fixed top-[0px] left-0 w-full h-[50px] bg-[#FFFFFF] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex flex-row items-center justify-center px-[-15px] py-[4px]">
  {/* Logo */}
  <div className="flex items-center justify-left mr-[15px] px-[15px]">
    <img
      src="./images/VidaBlack.png"
      alt="Vida Logo"
      style={{ maxHeight: "40px", maxWidth: "40px" }}
    />
  </div>

  {/* Navigation Buttons */}
  <div className="flex flex-row gap-10 items-center justify-center ml-32">
  <button className="px-[10px] py-[4px] text-[12px] flex items-center justify-center text-[#0F0D35] font-medium border-none rounded-full mr-[12px] shadow-md bg-lightgray hover:shadow-md transition duration-300 ease-in-out transform hover:scale-90 ">
    Home
  </button>
  <button className="px-[10px] py-[4px] text-[12px] flex items-center justify-center text-[#0F0D35] font-medium border-none rounded-full mr-[12px] shadow-md bg-lightgray hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    Use Cases
  </button>
  <button className="px-[10px] py-[4px] text-[12px] flex items-center justify-center text-[#0F0D35] font-medium border-none rounded-full mr-[12px] shadow-md bg-lightgray hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    APIs
  </button>
  <button className="px-[10px] py-[4px] text-[12px] flex items-center justify-center text-[#0F0D35] font-medium border-none rounded-full mr-[12px] shadow-md bg-lightgray hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    Pricing
  </button>
  <button className="px-[10px] py-[4px] text-[12px] flex items-center justify-center text-[#0F0D35] font-medium border-none rounded-full mr-[12px] shadow-md bg-lightgray hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    Login
  </button>
  </div>
</div>


  );
}

export default NavBar;
