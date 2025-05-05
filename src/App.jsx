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
    <div style={{ overflow: 'hidden', margin: 0, padding: 0 }}>
    <NavBar/>
    <div className="font-ClashGrotesk min-h-screen w-screen flex justify-center object-contain items-center">
    <div className="">
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
    </div>
  );
}

export default App;
