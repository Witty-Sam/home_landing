import React from 'react';

const Experience = () => {
  return (
    <section className="flex flex-col text-center justify-center items-center mb-[60px]">
  <div
    className="bg-[#4E0CC9] py-[50px] text-center rounded-[20px] mt-[90px] w-[920px] max-w-6xl px-[20px]"
    style={{ backgroundImage: "url('./images/purpleBG.svg')" }}
  >
    <h1 className="text-[#FFFFFF] text-[24px] font-bold mb-4 leading-snug">
      Experience the <br /> power of Vida today!
    </h1>

    <p className="text-[#C2C1D2] text-[15px] mb-8 leading-relaxed">
      Sign up and revolutionize your operations with <br /> cutting-edge technology.
    </p>

    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-[10px] w-[600px] mb-[30px]">
        <div className="flex flex-row items-center gap-2 text-center">
          <img src="./images/one.svg" alt="1" style={{ maxWidth: "30px", maxHeight: "30px" }} />
          <p className="text-[#FFFFFF] text-[14px] font-medium">
            Higher loan & BNPL approval rates
          </p>
        </div>

        <div className="flex flex-row items-center gap-2 text-center">
          <img src="./images/two.svg" alt="2" style={{ maxWidth: "30px", maxHeight: "30px" }} />
          <p className="text-[#FFFFFF] text-[14px] font-medium">
            Reduced default risks & fraud exposure
          </p>
        </div>

        <div className="flex flex-row items-center gap-2 text-center">
          <img src="./images/three.svg" alt="3" style={{ maxWidth: "30px", maxHeight: "30px" }} />
          <p className="text-[#FFFFFF] text-[14px] font-medium">
            Faster, data-driven lending decisions
          </p>
        </div>

        <div className="flex flex-row items-center gap-2 text-center">
          <img src="./images/four.svg" alt="4" style={{ maxWidth: "30px", maxHeight: "30px" }} />
          <p className="text-[#FFFFFF] text-[14px] font-medium">
            Increased revenue and business growth
          </p>
        </div>
      </div>
    </div>

    <div className="flex justify-center">
      <button className="px-[25px] py-[10px] text-[13px] flex items-center justify-center text-[rgba(194, 193, 210, 1)] bg-[rgba(255, 255, 255, 0.8)] font-sm border-none rounded-full opacity-[50%] shadow-none hover:shadow-md transition ease-in-out transform hover:scale-105 ">
        Get Started today
      </button>
    </div>
  </div>
</section>



  );
}

export default Experience;
