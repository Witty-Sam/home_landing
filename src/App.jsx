import React from 'react';
import NavBar from './components/navBar.jsx';
import Hero from './components/Hero.jsx';
import Body1 from './components/Body1.jsx';
import TestimonialStack from './components/Testimonials.jsx';
import Body2 from './components/Body2.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';
import Integration from './components/Integration.jsx';
import Experience from './components/Experience.jsx';
import ImageSlider from './components/ImageScroller.jsx';


const App = () => {
  return (
    <>
    <NavBar/>
    <div className="min-h-screen w-full flex justify-center items-center">
    <div className="pt-[50px] mb-[-5px] px-[70px] md:px-[60px] lg:px-[50px] ">
    <Hero/>
    
    <Body1/>
    <Body2/>
    <TestimonialStack/>
    <Features/>
    <Experience/>
    <ImageSlider/>
    <Integration/>
    <Footer/>
    </div>
    </div>
    </>
  );
}

export default App;
