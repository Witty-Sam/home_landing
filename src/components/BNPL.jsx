import { ArrowUpRight } from 'lucide-react';

export default function BNPL() {
  return (
    <section className="bg-[#FFFFFF] flex justify-center py-[12px] w-auto h-[600px] mt-[-200px]">
      <div className=" rounded-[15px] shadow-md p-8 w-[60%] overflow-hidden">
      <table className="w-full table-fixed">
          <tbody>
            <tr className="align-top text-left">

            {/* Text + Button Section */}
            <td className="w-1/2 text-left">
            <h1 className="text-[34px] ">Seamless In-Store and Online BNPL Solutions</h1>

            <text className="text-[18px] mt-[2px] text-[#6A6A6A] ">Enable your customers to shop now and pay<br/> later, effortlessly. Vida offers user-friendly tools<br/> for store managers to process Buy Now, Pay <br/>Later (BNPL) transactions and provides <br/>seamless API integrations for e-commerce<br/> platforms. This flexibility drives more sales both<br/> in-store and online, enhancing the customer<br/> experience.</text>
              {/* <img
                src="./images/BNPLwords.svg"
                alt="Buy Now Pay Later"
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
                  src="./images/BNPL.svg"
                  alt="BNPL"
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
