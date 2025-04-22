import { useEffect, useState } from "react";
import Empower from "./Empower"; 
import Boost from "./Boost";
import BNPL from "./BNPL";

const testimonials = [
  { image: "./images/ConsumerMFB.svg" },
  { image: "./images/CityGate.svg" },
  { image: "./images/SharpCredit.svg" },
  { image: "./images/SupremeHelp.svg" },
  { image: "./images/MKobo.svg" }
];

export default function TestimonialStack() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FFFDEB] py-[50px] px-6 md:px-16 lg:px-32 text-center text-[#0F0D35]">
  <h2 className="text-[15px] font-medium tracking-widest mb-2 uppercase font-[400]">Testimonials</h2>
  <h1 className="text-[28px] md:text-3xl font-bold mb-10 leading-[1.2]">
    What others have to <br/> say about us
  </h1>

  {/* Testimonial Card Stack */}
<div className="relative h-[300px] w-[200px] mx-auto mt-16">
  {testimonials.map((t, i) => {
    const offset = (i - index + testimonials.length) % testimonials.length;
    return (
      <div
        key={i}
        className="absolute w-full h-full flex items-center justify-center bg-[#FFFFF0] rounded-xl shadow-md transition-all duration-700 ease-in-out"
        style={{
          transform: `translateY(${offset * 8}px) scale(${1 - offset * 0.05})`,
          opacity: offset === 0 ? 1 : 0.05,
          zIndex: testimonials.length - offset,
        }}
      >
        <img
          src={t.image}
          alt="testimonial logo"
          className="w-[600px] h-[600px] object-contain"
        />
      </div>
    );
  })}
</div>


  <div>
  <h2 className="text-[15px] font-medium tracking-widest mb-2 font-[400] uppercase">About Vida</h2>
  <h1 className="text-[28px] md:text-3xl font-bold mb-10 leading-[1.2]">
    Vida is the Assistant Your Team <br/>Needs to Improve Their <br/> Performance
  </h1>
<div className="flex flex-col overflow-y-auto md:flex-row justify-center items-center gap-4 mt-10">
  <Empower/>
  <Boost/>
  <BNPL/>
  </div>
  </div>
</div>

  );
}

