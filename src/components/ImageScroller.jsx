import Marquee from "react-fast-marquee";

function ImageScroller() {
  return (

<div className="flex flex-row relative w-full overflow-hidden gap-[20px] h-[100px] bg-gray-100 items-center px-[170px]">
  <b className="text-[18px] font-normal whitespace-nowrap ml-[1220px]">
    We are <br /> backed by
  </b>
  
  <Marquee speed={50} pauseOnHover={true} gradient={false}>
    {[
      "techStars.svg",
      "resilience.svg",
      "voltron.svg",
      "magicFund.svg",
      "firstCircle.svg",
      "oak.svg",
      "sunflower.svg",
    ].map((img, idx) => (
      <div key={idx} className="mx-[30px] inline-block">
        <img src={`./images/${img}`} alt={img.split(".")[0]} />
      </div>
    ))}
  </Marquee>
</div>


  );
}

export default ImageScroller;
