import React from 'react';

const Body1 = () => {
  return (
    <div className="flex flex-col items-center py-[80px] text-center min-h-auto bg-[#0F0D35] bg-center"
    style={{ backgroundImage: "url('./images/WhyBG.svg')"}}>
      <h2 className="text-center text-[13px] text-[#FFFFFF] uppercase font-[400]">Why vida</h2>
      <h1 className="text-[22px] md:text-3xl text-[18px] text-[#FFFFFF] font-bold mt-[-5px]">
      Why Vida - Boost your sales and<br/> minimize risk with Vida
  </h1>

      <div className="flex flex-col md:flex-col gap-[60px] mt-[30px]">

        <div className="flex flex-col text-left gap-[7px]">
          <img
          src="./images/speedometer.svg"
          alt="Speedometer"
          style={{ maxHeight: "26px", maxWidth: "26px" }}
          />
          <h2 className="text-[18px] text-[#CAAEFF]">Accelerate Growth with<br/> Instant Credit Approvals</h2>

          <text className="text-[#FFFFFF] mt-[-10px] text-[15px]">Vida’s AI-powered decision engine<br/> speeds up credit approvals, reducing <br/>turnaround time and driving more sales.<br/> Say goodbye to long wait times and hello<br/> to increased customer satisfaction and<br/> higher conversion rates.</text>
        
        </div>

        <div className="flex flex-col text-left gap-[7px]">
          <img
          src="./images/refresh.svg"
          alt="refresh"
          style={{ maxHeight: "26px", maxWidth: "26px" }}
          />
          <h2 className="text-[18px] text-[#CAAEFF]">Reduce Defaults with Reliable<br/> Repayment Collections</h2>

          <text className="text-[#FFFFFF] mt-[-10px] text-[15px]">Avoid revenue loss from missed<br/> payments and defaults. Vida’s seamless<br/> repayment collection integrates directly<br/> with customer bank accounts, ensuring <br/>consistent cash flow and reducing the<br/> risk of non-performing loans.</text>
        
        </div>

        <div className="flex flex-col text-left gap-[7px]">
          <img
          src="./images/shield.svg"
          alt="shield"
          style={{ maxHeight: "26px", maxWidth: "26px" }}
          />
          <h2 className="text-[18px] text-[#CAAEFF]">Protect Your Business with<br/> Advanced Identity Verification</h2>

          <text className="text-[#FFFFFF] mt-[-10px] text-[15px]">Stop fraud before it starts. Vida’s robust<br/> identity verification and fraud prevention<br/> tools safeguard your business against<br/> identity theft and fraudulent transactions,<br/> giving you peace of mind and building<br/> customer trust.</text>
        
        </div>

      </div>
      
    </div>
  );
}

export default Body1;
