import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Comparison from '../components/Comparison';
import Process from '../components/Process';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Comparison />
      <Process />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;