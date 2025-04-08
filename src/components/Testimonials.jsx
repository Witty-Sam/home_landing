import { useEffect, useState } from "react";

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
    <div className="bg-[#FFFDEB] py-20 px-6 md:px-16 lg:px-32 text-center text-[#0F0D35]">
      <h4 className="text-xs font-medium tracking-widest mb-2 uppercase">Testimonials</h4>
      <h2 className="text-2xl md:text-3xl font-bold mb-[10]">
        What others have to <br className="hidden md:block" /> say about us
      </h2>

      <div className="relative h-40 w-full max-w-[160px] mx-auto mt-[16]">
  {testimonials.map((t, i) => {
    const offset = (i - index + testimonials.length) % testimonials.length;
    return (
      <div
        key={i}
        className="absolute w-full h-full flex items-center justify-center bg-[#FFFFF0] rounded-xl shadow-md transition-all duration-700 ease-in-out mt-[130px]"
        style={{
          transform: `translateY(${offset * 8}px) scale(${1 - offset * 0.05})`,
          opacity: offset === 0 ? 1 : 0.25,
          zIndex: testimonials.length - offset,
        }}
      >
        <img
          src={t.image}
          alt="testimonial logo"
          className="w-20 h-auto object-contain"
        />
      </div>
    );
  })}
</div>

    </div>
  );
}

