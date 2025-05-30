import { ArrowUpRight } from 'lucide-react';

export default function Boost() {
  return (
    <section className="bg-[#FFFFFF] flex justify-center py-[12px] w-auto h-[500px] rounded-[40px] mt-[-20px]">
      <div className="  shadow-md p-8 w-auto ">
        <table className="w-auto table-fixed px-[50px]">
          <tbody className="mr-[50px]">
            <tr className="align-top text-left">

              {/* Text + Button Section */}
              <td className="w-1/2 pr-[0px]">
              <h1 className="text-[28px] ">Boost Credit Risk Officers'<br/> Productivity with Vida Co-Pilot</h1>

              <text className="text-[16px] mt-[2px] text-[#6A6A6A] ">Vida Co-Pilot acts as a digital assistant for your <br/>credit risk officers, offering intelligent suggestions based <br/>on comprehensive credit data and predictive<br/> analytics. It streamlines decision-making, minimizes <br/>errors, and enhances operational efficiency, allowing<br/> your team to focus on strategic risk management.</text>
                {/* <img
                  src="./images/BoostProdwords.svg"
                  alt="Boost Credit Risk Officers Productivity"
                  className="w-full h-auto mb-6"
                /> */}
                <button className="mt-[30px] bg-[#0F172A] text-[#FFFFFF] px-[15px] py-[8px] rounded-full flex items-center gap-2 hover:bg-[#1F2937] transition ease-in-out transform hover:scale-105">
                  Get started <ArrowUpRight size={16} />
                </button>
              </td>

              {/* Image Section */}
              <td className="w-1/2 pl-[65px] text-right">
              <div className="rounded-[20px] overflow-hidden  pt-[40px]">
                  <img
                    src="./images/BoostProductivity.svg"
                    alt="Boost Prod"
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
