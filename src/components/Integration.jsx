import React from 'react';

const Integration = () => {
  return (

<div className="bg-white rounded-b-[40px] overflow-hidden w-auto relative z-10">
  <div className="p-[50px]"> {/* padding makes the curve visible */}
    <section className="flex flex-col items-center justify-center text-center bg-[#F9F9F9] p-[55px] shadow-lg relative z-15 max-w-auto">
      <h2 className="text-[15px] font-medium mb-2 uppercase font-[400]">API Integration</h2>
      <h1 className="text-[28px] md:text-3xl font-bold mb-10">
        Powerful APIs for<br /> Seamless Integration
      </h1>

      <div className="flex justify-center w-auto mr-[10px]">
        <table className="table-fixed gap-[20px] w-[auto] object-contain">
          <tbody className="ml-[100px]">
            <tr className="align-top text-left flex flex-row gap-[40px]">
              <td className="w-1/2 pr-[20px] pl-[10px]">
                <img
                  src="./images/Integration.svg"
                  alt="code"
                  style={{ maxHeight: "600px", maxWidth: "600px" }}
                  className="w-[500px] h-[500px] rounded-[5px]"
                />
              </td>

              <td className="text-left justify-right max-h-[500px] gap-[20px] overflow-y-auto rounded-b-[12px]">
                <h2 className="text-[22px]">Integrate with Ease</h2>
                <p className="text-[18px] text-[#565568]">
                  Vida’s robust API suite is designed for seamless <br />
                  integration, allowing you to embed our powerful <br />
                  credit decision engine into your existing systems <br />
                  effortlessly. Whether you’re a bank, lender, or <br />
                  merchant, our APIs adapt to your workflows, <br />
                  minimizing disruption and maximizing efficiency.
                </p>

                <div>
                  <h2 className="text-[22px]">Build Custom Solutions</h2>
                  <p className="text-[18px] text-[#565568]">
                    Create bespoke financial products with Vida’s <br />
                    flexible APIs. From KYC and KYB verification to credit <br />
                    eligibility checks and repayment collections, our <br />
                    APIs give you the freedom to innovate while <br />
                    leveraging our secure and reliable infrastructure.
                  </p>
                </div>

                <div>
                  <h2 className="text-[22px]">Fast, Secure, and Scalable</h2>
                  <p className="text-[18px] text-[#565568]">
                    Develop at scale with Vida’s APIs, built with industry-<br />
                    leading security protocols to ensure data protection<br />
                    and compliance. Our cloud-based architecture<br />
                    guarantees high availability and rapid processing,<br />
                    enabling your business to grow without limits.
                  </p>
                </div>
                <div>
                  <h2 className="text-[22px]">Comprehensive<br />Documentation and Support</h2>
                  <p className="text-[18px] text-[#565568]">
                    Get started quickly with our detailed API<br />
                    documentation and developer support. Whether<br />
                    you need technical guidance or custom integration<br />
                    assistance, our team is here to help you every step<br />
                    of the way.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</div>





  );
}

export default Integration;
