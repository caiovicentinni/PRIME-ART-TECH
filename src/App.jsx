import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import MachineShowcase from './components/MachineShowcase';
import Features from './components/Features';
import VideoShowcase from './components/VideoShowcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <VideoShowcase />
      <MachineShowcase />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
