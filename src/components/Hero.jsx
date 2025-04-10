import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="flex flex-col items-center text-center mt-[70px]">
      <img
        src="./images/wheat.svg"
        alt="Hero"
        className="w-2 h-2 mb-1"
        style={{ maxHeight: "200px", maxWidth: "350px" }}
      />
      <h1 className="text-[60px] font-bold mb-5 px-[20px]">
        Faster, Safer Credit Decisions<br/> with AI-Powered Accuracy
      </h1>
      <p className="text-[22px] font-medium mt-2 mb-6 max-w-md">
        Get instant credit approvals, reliable identity verification, and secure <br/>repayment collections. Power your lending and Buy Now, Pay Later <br/>offerings with AI-driven decisions trusted by banks, lenders, and merchants.
      </p>
      <button className="px-[27px] py-[12px] text-[16px] flex items-center justify-center text-[#FFFFFF] font-sm border-none rounded-full shadow-none bg-[#0F0D35] hover:shadow-md mt-[20px] mb-[10px] transition ease-in-out transform hover:scale-105">
        Get Started<ArrowUpRight size={21} />
      </button>

      
      <div className="items-center justify-center mt-[30px] mb-[0px]">
        <img
          src="./images/bottomHeroPic.svg"
          alt="Bottom Hero"
          className="mt-10"
          style={{
            maxHeight: isMobile ? "200px" : "800px",
            maxWidth: isMobile ? "300px" : "1500px",
            width: isMobile ? "100%" : "auto",
            height: "auto"
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
