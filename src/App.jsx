import React from 'react';
import NavBar from './components/navBar.jsx';
import Hero from './components/Hero.jsx';
import Body1 from './components/Body1.jsx';
import TestimonialStack from './components/Testimonials.jsx';

const App = () => {
  return (
    <>
    <NavBar/>
    <div className="pt-[50px] px-[300px] md:px-50 lg:px-50 text-[#0F0D35]">
    <Hero/>
    </div>
    <Body1/>
    <TestimonialStack/>
    </>
  );
}

export default App;
