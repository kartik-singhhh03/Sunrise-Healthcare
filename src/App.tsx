import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <FAQ />
      <GetInvolved />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;