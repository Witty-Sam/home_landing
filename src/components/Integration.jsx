import React from 'react';

const Integration = () => {
  return (

<div className="bg-white rounded-b-[40px] overflow-hidden relative z-10">
    <section className="flex flex-col items-center justify-center text-center mt-[0px] mb-[0px] rounded-b-[40px] mb-[-1000px] bg-[#F9F9F9] p-[50px] shadow-lg relative z-15">
        <h2 className="text-[15px] font-medium tracking-widest mb-2 uppercase font-[400]">API Integration</h2>
  <h1 className="text-[28px] md:text-3xl font-bold mb-10">
    Powerful APIs for<br/> Seamless Integration
  </h1>
    <table>
        <tbody>
            <tr className="align-top text-left flex flex-row gap-[80px]">
                <td className="w-1/2 pr-[0px]">
                    <img
                    src="./images/Integration.svg"
                    alt="code"
                    stytle={{ maxHeight: "60px", maxWidth: "60px"}}
                    className="w-[300px] h-[400px]  rounded-[5px]"
                    />
                </td>

                <td className="text-left justify-right">
                    <h2 className="text-[22px]">Integrate with Ease</h2>
                    <text className="text-[15px] text-[#565568]">Vida’s robust API suite is designed for seamless <br/>integration, allowing you to embed our powerful<br/> credit decision engine into your existing systems<br/> effortlessly. Whether you’re a bank, lender, or<br/> merchant, our APIs adapt to your workflows,<br/> minimizing disruption and maximizing efficiency.</text>

                    <div>
                        <h2 className="text-[22px]">Build Custom Solutions</h2>
                    <text className="text-[15px] text-[#565568]">Create bespoke financial products with Vida’s<br/> flexible APIs. From KYC and KYB verification to credit<br/> eligibility checks and repayment collections, our <br/>APIs give you the freedom to innovate while <br/>leveraging our secure and reliable infrastructure.



                    </text>
                    </div>
                
                </td>

            </tr>

        </tbody>

    </table>


    </section>

    </div>
  );
}

export default Integration;
