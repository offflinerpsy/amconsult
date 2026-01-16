
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
