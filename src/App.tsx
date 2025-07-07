import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExpertGuidance from './components/ExpertGuidance';
import SchoolSupport from './components/SchoolSupport';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ExpertGuidance />
      <SchoolSupport />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;