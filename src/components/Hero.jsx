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
    <div className="flex flex-col items-center text-center min-h-auto bg-cover bg-center mt-[70px] mb-[-6px]"
    style={{ backgroundImage: "url('./images/Background.svg')"}}
    >
      <div className="flex flex-row ">
      <img 
      src= "./images/Left.svg"
      style={{ maxHeight: "30px", maxWidth: "30px", }}
      />

      <p className="text-center text-[14px] text-[#A0A0AA] mt-[3px]">#1 AI-powered credit decisioning solution for Africa</p>

      <img 
      src= "./images/Right.svg"
      style={{ maxHeight: "30px", maxWidth: "30px" }}
      />
      </div>
      <h1 className="text-[60px] font-bold mb-[5px] px-[20px] mt-[-5px] leading-[1.3]">
        Faster, Safer Credit Decisions<br/> with AI-Powered Accuracy
      </h1>
      <p className="text-[20px] font-medium mt-2 mb-6 max-w-md leading-[1.5]">
        Get instant credit approvals, reliable identity verification, and secure <br/>repayment collections. Power your lending and Buy Now, Pay Later <br/>offerings with AI-driven decisions trusted by banks, lenders, and merchants.
      </p>
      <button className="px-[27px] py-[12px] text-[16px] flex items-center justify-center text-[#FFFFFF] font-sm border-none rounded-full shadow-none bg-[#0F0D35] hover:shadow-md mt-[20px] mb-[10px] transition ease-in-out transform hover:scale-105">
        Get Started<ArrowUpRight size={21} />
      </button>

      
      <div className="items-center justify-center mt-[50px] mb-[0px]">
        <img
          src="./images/bottomHeroPic.svg"
          alt="Bottom Hero"
          className="mt-10"
          style={{
            maxHeight: isMobile ? "200px" : "650px",
            maxWidth: isMobile ? "300px" : "900px",
            width: isMobile ? "100%" : "auto",
            height: "auto"
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
