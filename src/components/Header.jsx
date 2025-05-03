import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            Portfolio 
          </motion.h1>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Anilkumar-2003" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-600 hover:text-purple-600 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/vagicharla-anilkumar-aaa947321/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-gray-600 hover:text-purple-600 transition-colors" />
              </a>
              <a href="mailto:anilkumarvagicharla32@gmail.com">
                <Mail className="w-5 h-5 text-gray-600 hover:text-purple-600 transition-colors" />
              </a>
            </div>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/Anilkumar-2003" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-gray-600 hover:text-purple-600 transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/vagicharla-anilkumar-aaa947321/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-gray-600 hover:text-purple-600 transition-colors" />
                </a>
                <a href="mailto:anilkumarvagicharla32@example.com">
                  <Mail className="w-5 h-5 text-gray-600 hover:text-purple-600 transition-colors" />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}

export default Header;
