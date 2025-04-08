import React from 'react';

const Body1 = () => {
  return (
    <div className="bg-[#0F0D35] text-[white] px-[6px] md:px-[20px] md:py-[100px] lg:px-[32px] py-[40px] mt-[0px]">
    <p className="text-sm tracking-wider text-center text-[#D3D3D3] mt-[0px]">WHY VIDA</p>
    <h2 className="text-[20px] px-[380px] md:text-[20px] md:px-[0px] font-semibold text-center mt-[12px] px-[20px]">
      Why Vida-Boost your sales and minimize risk with Vida
    </h2>
    <div className="flex flex-row sm:flex-col  justify-center items-center gap-4 px-6 md:px-10 lg:px-16 text-center w-full">


  {/* Card 1 */}
  <div>
    <img
      src="./images/AccelerateGrowth.svg"
      alt="Accelerate Growth"
      className="mx-auto"
      style={{ maxHeight: "220px", maxWidth: "220px" }}
    />
  </div>
  {/* Card 2 */}
  <div>
    <img
      src="./images/ReduceDefault.svg"
      alt="Reduce Default"
      className="mx-auto"
      style={{ maxHeight: "220px", maxWidth: "220px" }}
    />
  </div>
  {/* Card 3 */}
  <div>
    <img
      src="./images/ProtectYourBusiness.svg"
      alt="Business Protection"
      className="mx-auto"
      style={{ maxHeight: "220px", maxWidth: "220px" }}
    />
  </div>
</div>

  </div>
  );
}

export default Body1;
