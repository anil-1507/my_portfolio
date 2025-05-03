import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FloatingDownloadButton from './components/FloatingDownloadButton';
import Chatbot from './components/Chatbot'; // ✅ Import Chatbot

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <FloatingDownloadButton />
      <Chatbot /> {/* ✅ Chatbot is always visible */}
    </div>
  );
}

export default App;
