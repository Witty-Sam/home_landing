import { ArrowUpRight } from 'lucide-react';

export default function BNPL() {
  return (
    <section className="bg-[#FFFFFF] flex justify-center py-[12px] w-auto h-[600px]">
      <div className="bg-white rounded-[15px] shadow-md p-8 w-[60%] overflow-hidden">
        <div className="w-full table-fixed">
          <div className="flex flex-row items-start gap-6">

            {/* Text + Button Section */}
            <div className="w-1/2">
              <img
                src="./images/BNPLwords.svg"
                alt="Buy Now Pay Later"
                className="w-full h-auto mb-6"
              />
              <button className="bg-[#0F172A] text-[#FFFFFF] px-[15px] py-[8px] rounded-full flex items-center gap-2 hover:bg-[#1F2937] transition ease-in-out transform hover:scale-105">
                Get started <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Image Section */}
            <div className="w-1/2">
              <div className="rounded-[20px] overflow-hidden bg-[#FEECDC] p-2">
                <img
                  src="./images/BNPL.svg"
                  alt="BNPL"
                  className="w-full h-auto object-cover rounded-[16px]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
