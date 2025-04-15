import { ArrowUpRight } from 'lucide-react';

export default function Empower() {
  return (
    <section className="bg-[#FFFFFF] flex justify-center py-[12px] w-auto h-[470px] rounded-[40px] ">
      <div className="  shadow-md p-[8px] w-auto ">
        <table className="w-auto table-fixed px-[30px]">
          <tbody className="mr-[50px]">
            <tr className="align-top px-[5px] text-left ">

              {/* Text + Button Section */}
              <td className="w-1/2 pr-[0px]">
              <h1 className="text-[28px]">Empower Your Sales Agents<br/> with Data-Driven Insights</h1>

              <text className="text-[16px] mt-[2px] text-[#6A6A6A]">Give your field agents the competitive <br/>edge they need by equipping them with instant <br/>insights into customer eligibility. Vida analyzes<br/> credit profiles in real-time, enabling your <br/>agents to target the right customers, close ,<br/>deals faster and maximize sales opportunities.</text>
                {/* <img
                  src="./images/DDIwords.svg"
                  alt="Data-Driven Insights"
                  className="w-full h-auto mb-6"
                /> */}
                <button className="mt-[30px] bg-[#0F172A] text-[#FFFFFF] px-[15px] py-[8px] rounded-full flex items-center gap-2 hover:bg-[#1F2937] transition ease-in-out transform hover:scale-105">
                  Get started <ArrowUpRight size={16} />
                </button>
              </td>

              {/* Image Section */}
              <td className="w-1/2 pl-[100px] text-right ">
                <div className="rounded-[20px] overflow-hidden  pt-[40px]">
                  <img
                    src="./images/DDI.svg"
                    alt="Sales Agent Empowerment"
                    className="w-[300px] h-[320px] object-cover rounded-[5px]"
                  />
                </div>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </section>
    
  );
}
