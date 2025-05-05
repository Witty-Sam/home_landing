import React from 'react';

const Footer = () => {
  return (
    
    <div className="min-h-screen w-[full] overflow-x-[hidden] min-w-screen object-contain flex justify-center items-center">
        <div className="flex flex-col bg-[#0F0D35] mt-[-32px] z-0 relative object-contain w-full">
        <div className="flex flex-row gap-[200px] justify-center w-auto h-auto px-[100px] object-contain" >
        <div className="flex flex-col gap-[20px] py-[55px] mb-[50px] justify-left object-contain">
            <img
            src="./images/VidaWhite.svg"
            alt="Vida Logo"
            style={{ maxHeight: "90px", maxWidth: "100px" }}
            />

            <text className="text-[#D4D4D4] text-[18px]"> support@veendhq.com</text>

            <img
            src="./images/SocialMedia.svg"
            alt="Social Media Icons"
            style={{ maxHeight: "150px", maxWidth: "150px" }}
            />

            <img
            src="./images/license.svg"
            alt="License"
            style={{ maxHeight: "70px", maxWidth: "70px" }}
            />

            

            </div>

            <div className="flex flex-row gap-[30px] py-[40px] text-right justify-right w-auto object-contain">

            <div className="flex flex-col text-left">

            <h2 className="text-[#FFFFFF] text-[22px] uppercase">Use Cases</h2>
            <div className="flex flex-col gap-[04px] ">
            <text className="text-[#D4D4D4] text-[17px]">Banks</text>
            <text className="text-[#D4D4D4] text-[17px]">Cooperative Societies</text>
            <text className="text-[#D4D4D4] text-[17px]">Merchants</text>
            <text className="text-[#D4D4D4] text-[17px]">Car Loans</text>
            <text className="text-[#D4D4D4] text-[17px]">Government Grants</text>
            <text className="text-[#D4D4D4] text-[17px]">KYC and KYB Verification</text>
            <text className="text-[#D4D4D4] text-[17px]">Solar Inverter Asset Financing</text>
            <text className="text-[#D4D4D4] text-[17px]">SME Loans</text>
            <text className="text-[#D4D4D4] text-[17px]">Agricultural Loans</text>
            <text className="text-[#D4D4D4] text-[17px]">Pre-Employment Background Checks</text>
            <text className="text-[#D4D4D4] text-[17px]">Visa Applications at Consulates</text>
            </div>

            </div>

            <div className="flex flex-col gap-[4px] text-left">
                <h2 className="text-[#FFFFFF] text-[22px] uppercase">Resources</h2>

                <div className="flex flex-col text-left">
                <text className="text-[#D4D4D4] text-[17px]">APIs</text>
                <text className="text-[#D4D4D4] text-[17px]">Pricing</text>
                </div>


            </div>

            <div className="flex flex-col text-left text-left">
                <h2 className="text-[#FFFFFF] text-[22px] uppercase">Legal</h2>
                <div className="text-left">
                <text className="text-[#D4D4D4] text-[17px]">End user agreement</text>
                </div>
            </div>

            </div>
            
            
        </div>

        <div className="w-auto px-[1370px] justify-center">
        <div className="mt-[100px] text-[#D4D4D4] text-[16px]">
                <text>© 2025 VeendHQ Limited. All rights reserved</text>
            </div>

            <div className="mt-[10px] text-[#D4D4D4] text-[16px]">
            VIda is an AI-powered credit decisioning engine, specially designed to help merchants and institutions<br/> make informed credit decisions.<br/><br/>Note that Vida is not a credit bureau, we basically leverage data from multiple data sources while <br/>infusing AI to enhance the credit assessments of merchants and institutions.
            </div>
        </div>
        {/*Bottom footer image*/}
        <div className="w-full flex justify-center items-center flex-col py-[10px] mt-[80px] overflow-hidden">
    <img
        src="./images/VidaBlue.svg"
        alt="Vida Logo"
        className="max-w-full h-auto object-contain"
    />
    </div>


        </div>

    </div>    
  );
}

export default Footer;
