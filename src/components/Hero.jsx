import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center mt-[45px]">
  <img
    src="./images/wheat.svg"
    alt="Hero"
    className="w-2 h-2 mb-1"
    style={{ maxHeight: "50px", maxWidth: "200px" }}
  />
  <h1 className="text-[45px] font-bold mb-5 px-[20px]">
    Faster, Safer Credit Decisions with AI-Powered Accuracy
  </h1>
  <p className="text-[18px] font-medium mt-2 mb-6 max-w-md">
    Get instant credit approvals, reliable identity verification, and secure repayment collections. Power your lending and Buy Now, Pay Later offerings with AI-driven decisions trusted by banks, lenders, and merchants.
  </p>
  <button className="px-[15px] py-[8px] text-[10px] flex items-center justify-center text-[#FFFFFF] font-sm border-none rounded-full shadow-none bg-[#0F0D35] hover:shadow-md mt-[20px] mb-[10px] transition ease-in-out transform hover:scale-105">
    Get Started<ArrowUpRight size={10}/>
  </button>
  <div className="items-center justify-center mt-[30px] mb-[0px]">
    <img
      src="./images/bottomHeroPic.svg"
      alt="Bottom Hero"
      className="w-2 h-2 mt-10"
      style={{ maxHeight: "500px", maxWidth: "800px" }}
    />
  </div>
</div>

  );
}

export default Hero;
