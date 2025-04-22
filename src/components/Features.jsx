import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Features = () => {
  return (
<div className="flex items-center justify-center min-h-screen">
  
    <div className="text-center">
    <div className="flex flex-col gap-[5px] py-[50px] justify-center">
      <>
      <h2 className="text-[15px] justify-center font-[400] mb-[2px] uppercase">Features</h2>
      </>
  <h1 className="text-[28px] font-bold leading-[1.2]">
  Powerful Features to Supercharge Your <br/>Lending and BNPL Operations
  </h1>
  
  <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 px-[80px] w-[800px] lg:grid-cols-4 gap-[0px] p-[40px]">
      
      <div className="p-[15px] border-t border-b border-[#C2C1D2] text-left" > 
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/load.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">Customer Referrals through CreditProfile.me</h2>

        <text className="text-[14px] text-[#6A6A6A]">Leverage Vida’s strategic listing on <br/>CreditProfile.me to receive high-quality<br/> customer referrals. Our active marketing <br/>efforts drive traffic and create visibility for<br/> your financial products, helping you<br/> acquire more customers effortlessly.</text>

      </div>                                         {/*1*/} 

      <div className="p-[15px] border border-[#C2C1D2] text-left">
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/purpleShield.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">Advanced Identity Verification <br/>& Fraud Prevention</h2>

        <text className="text-[14px] text-[#6A6A6A]">Protect your business with our state-of-<br/>the-art identity verification system. Vida <br/>cross-checks customer details across<br/> multiple data sources to ensure<br/> authenticity and prevent fraud, giving you<br/> the confidence to lend securely</text>

      </div>                                          {/*2*/}

      <div className="p-[15px] border-t border-b border-[#C2C1D2] text-left">
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/openWallet.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">Reliable Repayment Collection <br/>Channels</h2>

        <text className="text-[14px] text-[#6A6A6A]">Experience seamless repayment<br/> collections through payroll deductions and<br/> direct debit mandates. Vida ensures timely <br/>payments, reducing your risk of defaults <br/>and improving cash flow stability.</text>

      </div>                                            {/*3*/}
      
      <div className="p-[15px] border-t border-b border-[#C2C1D2] text-left">
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/institute.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">Comprehensive Bank Account Visibility</h2>

        <text className="text-[14px] text-[#6A6A6A]">Get a 360-degree view of all bank <br/>accounts associated with a customer,<br/> helping you make better-informed lending<br/> decisions.</text>

      </div>                                        {/*4*/}                           
      
      <div className="p-[15px] border border-[#C2C1D2] text-left">
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/link.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">Custom Credit Profile<br/> Validation Links</h2>

        <text className="text-[14px] text-[#6A6A6A]">Generate personalized credit profile<br/> validation links for walk-in customers,<br/> enabling a smooth and efficient<br/> onboarding process.</text>

      </div>                                                  {/*5*/}
      
      <div className="p-[15px] border-t border-b border-[#C2C1D2] text-left">
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/file.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">Request Additional Customer <br/>Information</h2>

        <text className="text-[14px] text-[#6A6A6A]">Need more details for credit appraisal?<br/> Vida allows you to request additional<br/> information directly from customers to<br/> enhance decision accuracy</text>

      </div>                                                    {/*6*/}
      
      <div className="p-[15px] border-t border-b border-[#C2C1D2] text-left">
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/cards.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">Flexible Payment Method <br/>Requests</h2>

        <text className="text-[14px] text-[#6A6A6A]">Expand your repayment options by<br/> requesting additional payment methods <br/>from customers, making it easier for them <br/>to pay back loans.</text>

      </div>                                                    {/*7*/}
      
      <div className="p-[15px] border border-[#C2C1D2] text-left">
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/fileDownload.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">Easy Bank Statement and<br/> Credit Profile Downloads</h2>

        <text className="text-[14px] text-[#6A6A6A]">Download and print customer’s account<br/> statements and detailed credit profiles to <br/>simplify your documentation and credit<br/> review process.</text>

      </div>                                                  {/*8*/}
      
      <div className="p-[15px] border-t border-b border-[#C2C1D2] text-left">
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/star.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">AI-Powered CRO Co-Pilot for<br/> Informed Decisions</h2>

        <text className="text-[14px] text-[#6A6A6A]">Boost your credit risk assessment with Vida’s<br/> AI CRO Co-Pilot. Get intelligent suggestions and <br/>insights for credit decisioning, reducing human<br/> error and bias.</text>

      </div>                                                {/*9*/}
      
      <div className="p-[15px] border-t border-b border-[#C2C1D2] text-left">
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/checkList.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">Comprehensive Audit<br/> Logs</h2>

        <text className="text-[14px] text-[#6A6A6A]">Maintain a clear record of all activities with<br/> detailed audit logs, ensuring compliance <br/>and accountability across your lending<br/> operations.</text>

      </div>                                                    {/*10*/}
      
      <div className="p-[15px] border border-[#C2C1D2] text-left">
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/diodes.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">Instant Credit Decisions with<br/> Alternative Data</h2>

        <text className="text-[14px] text-[#6A6A6A]">Speed up loan approvals using Vida’s AI-<br/>powered credit decision engine that<br/> leverages alternative data and bank <br/>statement analysis for precise credit<br/> scoring.</text>

      </div>                                                {/*11*/}
      
      <div className="p-[15px] border-t border-b border-[#C2C1D2] text-left">
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/IDE.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">Seamless API Access</h2>

        <text className="text-[14px] text-[#6A6A6A]">Integrate Vida effortlessly into your existing<br/> systems using our powerful APIs, giving you<br/> the flexibility to scale and innovate rapidly.</text>

      </div>                                                      {/*12*/}
      
      <div className="p-[15px] border-t border-b border-[#C2C1D2] text-left">
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/toolBox.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">Managed Loan Servicing</h2>

        <text className="text-[14px] text-[#6A6A6A]">Let Vida handle your loan servicing needs,<br/> from disbursement to repayment<br/> collections, so you can focus on growing<br/> your portfolio.</text>

      </div>                                                    {/*13*/}
      
      <div className="p-[15px] border border-[#C2C1D2] text-left">
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/EQ.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">Customizable Credit <br/>Decision Frameworks</h2>

        <text className="text-[14px] text-[#6A6A6A]">For enterprise customers, Vida offers<br/> tailored AI-powered credit decision<br/> frameworks to fit your unique risk<br/> management strategies.</text>

      </div>                                                      {/*14*/}
      
      <div className="p-[15px] border-t border-b border-[#C2C1D2] text-left">
        <img
        style={{ maxWidth: "30px", maxHeight: "30px"}}
        src="./images/group.svg"
        />

        <h2 className="text-[22px] text-[#0F0D35] leading-[1.2]">Team Collaboration with Field<br/> Agent and Member Access</h2>

        <text className="text-[14px] text-[#6A6A6A]">Empower your team by adding field agents and<br/> team members to your Vida dashboard,<br/> streamlining the credit validation and loan<br/> disbursement processes.</text>

      </div>                                                          {/*15*/}
      
    </div>

    <div className="flex flex-col items-center justify-center">

    <div className="flex flex-row justify-center gap-[45px] mt-[-40px]">
      <img
      src="./images/Arrow1.svg"
      alt="Arrow"
      style={{ maxHeight: "110px", maxWidth: "110px"}}
      />
      <img
      src="./images/Arrow2.svg"
      alt="Arrow"
      style={{ maxHeight: "110px", maxWidth: "110px"}}
      />
    </div>
        <button className="px-[50px] py-[15px] text-[13px] flex items-center justify-center text-[10px] text-[#FFFFFF] font-sm border-none rounded-full shadow-none bg-[#4E0CC9] hover:shadow-md mb-[10px] transition ease-in-out transform hover:scale-105">
                Get Started<ArrowUpRight size={15} />
        </button>  


        
            
    </div>

    

  </div>  




</div>

</div>

  );
}

export default Features;
