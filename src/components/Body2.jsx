import React from 'react';

const Body2 = () => {
  return (
    <section className="bg-[#FFFFFF] flex justify-center py-[12px] w-auto h-full">
  <div className="rounded-[15px] flex text-center min-y-auto shadow-md p-8 w-[1100px]">
    <div className="pt-[0px] px-[100px] justify-center w-full">
      <div className="bg-[#FFFFFF] py-[50px] px-[6px] md:px-[16px] lg:px-32 text-center text-[#0F0D35]">
        <h2 className="text-[13px] font-thin tracking-widest uppercase">Use cases</h2>
        <h1 className="text-[22px] md:text-3xl font-bold mb-10">
          Unlock Endless <br />Possibilities with Vida
        </h1>

        {/* Scrollable table container */}
        <div className="h-[450px] overflow-y-auto hide-scrollbar">
          <table className="w-full table-fixed">
            <tbody>

              <tr className="align-top">
                <td className="w-1/2 text-left">
                  <h1 className="text-[22px]">Banks</h1>
                  <p className="text-[15px] mt-[2px] text-[#6A6A6A]">
                    Banks face challenges with high default rates,<br />
                    identity fraud, and lengthy loan approval processes.<br />
                    Vida streamlines the lending process, enabling<br />
                    banks to make faster, safer, and more profitable<br />
                    credit decisions with AI-powered insights.
                  </p>
                </td>
                <td className="w-1/2 pl-6 text-right px-[50px]">
                  <div className="rounded-[20px] overflow-hidden pt-[40px]">
                    <img
                      src="./images/Bank.png"
                      alt="BNPL"
                      className="w-[380px] h-[400px] object-cover rounded-[5px]"
                    />
                  </div>
                </td>
              </tr>

              <tr className="align-top">
                <td className="w-1/2 text-left">
                  <h1 className="text-[22px] mt-[50px]">Cooperative Societies</h1>
                  <p className="text-[15px] mt-[2px] text-[#6A6A6A]">
                    Cooperative societies face high default rates due to<br />
                    the lack of reliable credit history for new members.<br />
                    With Vida, cooperative societies can now assess the<br />
                    creditworthiness of potential members before<br />
                    granting them access to loans.
                  </p>
                </td>
                <td className="w-1/2 pl-6 text-right px-[50px]">
                  <div className="rounded-[20px] overflow-hidden pt-[40px]">
                    <img
                      src="./images/CooperativeSociety.png"
                      alt="Co-op"
                      className="w-[380px] h-[400px] object-cover rounded-[5px]"
                    />
                  </div>
                </td>
              </tr>

              <tr className="align-top">
                <td className="w-1/2 text-left">
                  <h1 className="text-[22px] mt-[50px]">Merchants</h1>
                  <p className="text-[15px] mt-[2px] text-[#6A6A6A]">
                  Merchants face the challenge of cart abandonment<br/>
                  and missed sales opportunities due to customers’<br/>
                  inability to pay upfront. Vida empowers merchants<br/>
                  to offer Buy Now, Pay Later (BNPL) options<br/>
                  confidently, ensuring reliable credit decisions and<br/>
                  seamless repayment collections.
                  </p>
                </td>
                <td className="w-1/2 pl-6 text-right px-[50px]">
                  <div className="rounded-[20px] overflow-hidden pt-[40px]">
                    <img
                      src="./images/Merchants.png"
                      alt="Merchants"
                      className="w-[380px] h-[400px] object-cover rounded-[5px]"
                    />
                  </div>
                </td>
              </tr>

              <tr className="align-top">
                <td className="w-1/2 text-left">
                  <h1 className="text-[22px] mt-[50px]">Car Loans</h1>
                  <p className="text-[15px] mt-[2px] text-[#6A6A6A]">
                  Car dealerships and auto financing companies often<br/>
                  face challenges with high default rates, identity<br/>
                  fraud, and lengthy approval processes. Vida<br/>
                  streamlines car loan applications with AI-powered<br/>
                  credit decisions, ensuring reliable creditworthiness<br/>
                  checks and secure repayment collections.
                  </p>
                </td>
                <td className="w-1/2 pl-6 text-right px-[50px]">
                  <div className="rounded-[20px] overflow-hidden pt-[40px]">
                    <img
                      src="./images/CarLoans.png"
                      alt="Car Loans"
                      className="w-[380px] h-[400px] object-cover rounded-[5px]"
                    />
                  </div>
                </td>
              </tr>

              <tr className="align-top">
                <td className="w-1/2 text-left">
                  <h1 className="text-[22px] mt-[50px]">Government Grants</h1>
                  <p className="text-[15px] mt-[2px] text-[#6A6A6A]">
                  Government agencies and non-profits often face<br/>
                  challenges in verifying applicant eligibility, ensuring<br/>
                  transparency, and reducing fraud in grant<br/>
                  disbursement. Vida simplifies this process with AI-<br/>
                  owered credit profiles, offering reliable identity<br/>
                  verification, transparent eligibility checks, and<br/>
                  secure fund disbursement.
                  </p>
                </td>
                <td className="w-1/2 pl-6 text-right px-[50px]">
                  <div className="rounded-[20px] overflow-hidden pt-[40px]">
                    <img
                      src="./images/GovernmentGrants.png"
                      alt="Government Grants"
                      className="w-[380px] h-[400px] object-cover rounded-[5px]"
                    />
                  </div>
                </td>
              </tr>

              <tr className="align-top">
                <td className="w-1/2 text-left">
                  <h1 className="text-[22px] mt-[50px]">KYC and KYB Verification</h1>
                  <p className="text-[15px] mt-[2px] text-[#6A6A6A]">
                  In today’s digital economy, financial institutions,<br/>
                  lenders, and businesses need reliable Know Your<br/>
                  Customer (KYC) and Know Your Business (KYB)<br/>
                  verification processes to prevent fraud, comply with<br/>
                  regulatory requirements, and ensure secure<br/>
                  transactions. Vida offers a seamless, AI-powered<br/>
                  solution for accurate and efficient KYC and KYB<br/>
                  verifications.
                  </p>
                </td>
                <td className="w-1/2 pl-6 text-right px-[50px]">
                  <div className="rounded-[20px] overflow-hidden pt-[40px]">
                    <img
                      src="./images/KycAndKybVerification.png"
                      alt="KYC and KYB"
                      className="w-[380px] h-[400px] object-cover rounded-[5px]"
                    />
                  </div>
                </td>
              </tr>

              <tr className="align-top">
                <td className="w-1/2 text-left">
                  <h1 className="text-[22px] mt-[50px]">Solar Inverter Asset Financing</h1>
                  <p className="text-[15px] mt-[2px] text-[#6A6A6A]">
                  In emerging markets, the demand for solar<br/>
                  inverters and renewable energy solutions is on the<br/>
                  rise as individuals and businesses seek reliable<br/>
                  power alternatives. However, the high upfront cost<br/>
                  often makes these solutions inaccessible. Vida<br/>
                  solves this problem by enabling lenders and solar<br/>
                  companies to offer flexible asset financing with<br/>
                  reliable credit decisions and secure repayment<br/>
                  collections.
                  </p>
                </td>
                <td className="w-1/2 pl-6 text-right px-[50px]">
                  <div className="rounded-[20px] overflow-hidden pt-[40px]">
                    <img
                      src="./images/SolarInverterAssetFinancing.png"
                      alt="Solar Inverter"
                      className="w-[380px] h-[400px] object-cover rounded-[5px]"
                    />
                  </div>
                </td>
              </tr>

              <tr className="align-top">
                <td className="w-1/2 text-left">
                  <h1 className="text-[22px] mt-[50px]">SME Loans</h1>
                  <p className="text-[15px] mt-[2px] text-[#6A6A6A]">
                  Small and Medium Enterprises (SMEs) are the<br/>
                  backbone of many economies, driving growth and<br/>
                  innovation. However, many SMEs face challenges in<br/>
                  accessing financing due to inadequate credit history<br/>
                  or unreliable financial records. Vida addresses this<br/>
                  gap by enabling lenders to assess the<br/>
                  creditworthiness of SMEs with accurate data<br/>
                  insights and streamlined loan approvals.
                  </p>
                </td>
                <td className="w-1/2 pl-6 text-right px-[50px]">
                  <div className="rounded-[20px] overflow-hidden pt-[40px]">
                    <img
                      src="./images/SMELoans.png"
                      alt="SME loans"
                      className="w-[380px] h-[400px] object-cover rounded-[5px]"
                    />
                  </div>
                </td>
              </tr>

              <tr className="align-top">
                <td className="w-1/2 text-left">
                  <h1 className="text-[22px] mt-[50px]">Agricultural Loans</h1>
                  <p className="text-[15px] mt-[2px] text-[#6A6A6A]">
                  Agriculture is a vital sector driving economic<br/>
                  growth and food security. However, farmers and<br/>
                  agribusinesses often face challenges accessing<br/>
                  credit due to inconsistent income cycles and limited<br/>
                  credit history. Vida bridges this gap by providing<br/>
                  lenders with comprehensive credit profiles and<br/>
                  reliable repayment solutions tailored for agricultural<br/>
                  financing.
                  </p>
                </td>
                <td className="w-1/2 pl-6 text-right px-[50px]">
                  <div className="rounded-[20px] overflow-hidden pt-[40px]">
                    <img
                      src="./images/AgriculturalLoans.png"
                      alt="Agriculture"
                      className="w-[380px] h-[400px] object-cover rounded-[5px]"
                    />
                  </div>
                </td>
              </tr>

              <tr className="align-top">
                <td className="w-1/2 text-left">
                  <h1 className="text-[22px] mt-[50px]">Pre-Employment Background Checks</h1>
                  <p className="text-[15px] mt-[2px] text-[#6A6A6A]">
                  Vida simplifies pre-employment background checks<br/>
                  by offering instant credit profile verification.<br/>
                  Employers can use Vida to verify a candidate’s BVN,<br/>
                  check credit reports, and assess financial behavior.<br/>
                  This provides a comprehensive financial<br/>
                  background, ensuring the candidate's integrity and<br/>
                  reducing the risk of fraud.
                  </p>
                </td>
                <td className="w-1/2 pl-6 text-right px-[50px]">
                  <div className="rounded-[20px] overflow-hidden pt-[40px]">
                    <img
                      src="./images/Pre-EmploymentBackgroundChecks.png"
                      alt="Background Checks"
                      className="w-[380px] h-[400px] object-cover rounded-[5px]"
                    />
                  </div>
                </td>
              </tr>

              <tr className="align-top">
                <td className="w-1/2 text-left">
                  <h1 className="text-[22px] mt-[50px]">Visa Application at Consulates</h1>
                  <p className="text-[15px] mt-[2px] text-[#6A6A6A]">
                  Vida simplifies the visa application process by<br/>
                  providing consulates with verified and<br/>
                  comprehensive credit profiles. With advanced<br/>
                  identity verification and detailed financial reports,<br/>
                  consulates can quickly validate an applicant's<br/>
                  financial standing, reducing fraud and speeding up<br/>
                  decision-making.
                  </p>
                </td>
                <td className="w-1/2 pl-6 text-right px-[50px]">
                  <div className="rounded-[20px] overflow-hidden pt-[40px]">
                    <img
                      src="./images/VisaApplicationsatConsulates.png"
                      alt="Visa App"
                      className="w-[380px] h-[400px] object-cover rounded-[5px]"
                    />
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
</section>

  );
}

export default Body2;
