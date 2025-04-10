import { ArrowUpRight } from 'lucide-react';

export default function Boost() {
  return (
    <section className="bg-[#FFFFFF] flex justify-center py-[12px] w-[auto] h-[600px]">
      <div className=" rounded-[400px] shadow-md p-8 w-[60%] ">
        <table className="w-full table-fixed">
          <tbody>
            <tr className="align-top">

              {/* Text + Button Section */}
              <td className="w-1/2 pr-6">
                <img
                  src="./images/BoostProdwords.svg"
                  alt="Boost Credit Risk Officers Productivity"
                  className="w-full h-auto mb-6"
                />
                <button className="bg-[#0F172A] text-[#FFFFFF] px-[15px] py-[8px] rounded-full flex items-center gap-2 hover:bg-[#1F2937] transition ease-in-out transform hover:scale-105">
                  Get started <ArrowUpRight size={16} />
                </button>
              </td>

              {/* Image Section */}
              <td className="w-1/2 pl-6">
                <div className="rounded-[20px] overflow-hidden bg-[#FEECDC] p-2">
                  <img
                    src="./images/BoostProductivity.svg"
                    alt="Boost Prod"
                    className="w-full h-auto object-cover rounded-[16px]"
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
