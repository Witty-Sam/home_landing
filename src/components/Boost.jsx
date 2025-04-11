import { ArrowUpRight } from 'lucide-react';

export default function Boost() {
  return (
    <section className="bg-[#FFFFFF] flex justify-center py-[12px] w-[auto] h-[600px] mt-[-200px]">
      <div className=" rounded-[400px] shadow-md p-8 w-[60%] ">
        <table className="w-full table-fixed">
          <tbody>
            <tr className="align-top text-left">

              {/* Text + Button Section */}
              <td className="w-1/2 pr-6">
              <h1 className="text-[34px] ">Boost Credit Risk Officers'<br/> Productivity with Vida Co-Pilot</h1>

              <text className="text-[18px] mt-[2px] text-[#6A6A6A] ">Vida Co-Pilot acts as a digital assistant for your <br/>credit risk officers, offering intelligent suggestions based <br/>on comprehensive credit data and predictive<br/> analytics. It streamlines decision-making, minimizes <br/>errors, and enhances operational efficiency, allowing<br/> your team to focus on strategic risk management.</text>
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
              <td className="w-1/2 pl-6 text-right">
              <div className="rounded-[20px] overflow-hidden  pt-[40px]">
                  <img
                    src="./images/BoostProductivity.svg"
                    alt="Boost Prod"
                    className="w-[400px] h-[380px] object-cover rounded-[5px]"
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
