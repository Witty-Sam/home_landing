import React from 'react';

const Footer = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
        <div className="bg-[#0F0D35] mt-[-32px] z-0 relative object-contain w-full">
        <div className="flex flex-row gap-[300px]  w-auto h-auto px-[100px] object-contain" >
        <div className="flex flex-col gap-[20px] py-[55px] mb-[50px] justify-left object-contain">
            <img
            src="./images/VidaWhite.svg"
            alt="Vida Logo"
            style={{ maxHeight: "100px", maxWidth: "110px" }}
            />

            <text className="text-[#D4D4D4] text-[16px]"> support@veendhq.com</text>

            <img
            src="./images/SocialMedia.svg"
            alt="Social Media Icons"
            style={{ maxHeight: "100px", maxWidth: "100px" }}
            />

            <img
            src="./images/license.svg"
            alt="License"
            style={{ maxHeight: "90px", maxWidth: "90px" }}
            />

            

            </div>

            <div className="flex flex-row gap-[30px] py-[40px] text-right justify-right w-auto object-contain">

            <div className="flex flex-col text-left">

            <h2 className="text-[#FFFFFF] text-[18px] uppercase">Use Cases</h2>
            <div className="flex flex-col gap-[04px] ">
            <text className="text-[#D4D4D4] text-[13px]">Banks</text>
            <text className="text-[#D4D4D4] text-[13px]">Cooperative Societies</text>
            <text className="text-[#D4D4D4] text-[13px]">Merchants</text>
            <text className="text-[#D4D4D4] text-[13px]">Car Loans</text>
            <text className="text-[#D4D4D4] text-[13px]">Government Grants</text>
            <text className="text-[#D4D4D4] text-[13px]">KYC and KYB Verification</text>
            <text className="text-[#D4D4D4] text-[13px]">Solar Inverter Asset Financing</text>
            <text className="text-[#D4D4D4] text-[13px]">SME Loans</text>
            <text className="text-[#D4D4D4] text-[13px]">Agricultural Loans</text>
            <text className="text-[#D4D4D4] text-[13px]">Pre-Employment Background Checks</text>
            <text className="text-[#D4D4D4] text-[13px]">Visa Applications at Consulates</text>
            </div>

            </div>

            <div className="flex flex-col gap-[4px] text-left">
                <h2 className="text-[#FFFFFF] text-[18px] uppercase">Resources</h2>

                <div className="flex flex-col text-left">
                <text className="text-[#D4D4D4] text-[13px]">APIs</text>
                <text className="text-[#D4D4D4] text-[13px]">Pricing</text>
                </div>


            </div>

            <div className="flex flex-col text-left text-left">
                <h2 className="text-[#FFFFFF] text-[18px] uppercase">Legal</h2>
                <div className="text-left">
                <text className="text-[#D4D4D4] text-[13px]">End user agreement</text>
                </div>
            </div>

            </div>
            
            
        </div>

        <div className="w-auto px-[200px]">
        <div className="mt-[100px] text-[#D4D4D4] text-[10px]">
                <text>© 2025 VeendHQ Limited. All rights reserved</text>
            </div>

            <div className="mt-[10px] text-[#D4D4D4] text-[10px]">
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
