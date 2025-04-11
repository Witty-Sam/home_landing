import React from 'react';

const Body2 = () => {
  return (
    <section className="bg-[#FFFFFF] flex justify-center py-[12px] w-auto h-[auto] ">
      <div className=" rounded-[15px] flex text-center shadow-md p-8 w-[1200px] overflow-hidden">
      <table className="w-full table-fixed">
          <tbody>
    <div className="pt-[0px] px-[100px] justify-center">
      <div className="bg-[#FFFFFF] py-[50px] px-6 md:px-16 lg:px-32 text-center text-[#0F0D35] ">
  <h2 className="text-[15px] font-thin tracking-widest mb-2 uppercase">Use cases</h2>
  <h1 className="text-[28px] md:text-3xl font-bold mb-10">
  Unlock Endless <br/>Possibilities with Vida
  </h1>
  <tr className="align-top ">

            {/* Text + Button Section */}
            <td className="w-1/2 text-left">
            <h1 className="text-[30px] ">Banks</h1>

            <text className="text-[18px] mt-[2px] text-[#6A6A6A] ">Banks face challenges with high default rates,<br/> identity fraud, and lengthy loan approval processes.<br/> Vida streamlines the lending process, enabling<br/> banks to make faster, safer, and more profitable <br/>credit decisions with AI-powered insights.</text>
             

             <h1 className="text-[30px] mt-[50px]">Cooperative Societies</h1>

             <text className="text-[18px] mt-[2px] text-[#6A6A6A]">Cooperative societies face high default rates due to<br/> the lack of reliable credit history for new members.<br/> With Vida, cooperative societies can now assess the<br/> creditworthiness of potential members before<br/> granting them access to loans.</text>
             
             
             </td>


             <td className="w-1/2 pl-6 text-right px-[50px]">
            <div className="rounded-[20px] overflow-hidden  pt-[40px]">
                <img
                  src="./images/Bank.png"
                  alt="BNPL"
                 className="w-[380px] h-[400px] object-cover rounded-[5px]"
                />
              </div>
            </td>
             </tr>
  </div>
     </div>
    </tbody>
    </table>
    </div>
    </section>
  );
}

export default Body2;
