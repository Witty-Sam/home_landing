import React from 'react';
import NavBar from './components/navBar.jsx';
import Hero from './components/Hero.jsx';
import Body1 from './components/Body1.jsx';
import TestimonialStack from './components/Testimonials.jsx';
import Body2 from './components/Body2.jsx';
import Features from './components/Features.jsx'

const App = () => {
  return (
    <>
    <NavBar/>
    <div className="pt-[50px] mb-[-5px] px-[150px] md:px-[60px] lg:px-[50px] text-[#0F0D35]">
    <Hero/>
    </div>
    <Body1/>
    <Body2/>
    <TestimonialStack/>
    <Features/>
    
    </>
  );
}

export default App;
