import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import SelectedWorks from './components/SelectedWorks';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SEO from './components/SEO';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <SEO />
        <CustomCursor />
        <div className="aura-bg"></div>

        <Header />

        <main>
          <Hero />
          <TechStack />
          <SelectedWorks />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
