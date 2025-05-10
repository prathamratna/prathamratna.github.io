
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#skills', text: 'Skills' },
    { href: '#education', text: 'Education' },
    { href: '#work', text: 'Work' },
    { href: '#projects', text: 'Projects' },
    { href: '#leadership', text: 'Leadership' },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="bg-slate-900/80 py-4 sticky top-0 z-50 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">
            Prathamratna Meshram
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="nav-link text-slate-300 hover:text-sky-400 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`flex md:hidden flex-col justify-between w-[30px] h-[21px] bg-transparent border-0 cursor-pointer p-0 z-50 ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-full h-[3px] bg-sky-400 rounded-md transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
            <span className={`block w-full h-[3px] bg-sky-400 rounded-md transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-[3px] bg-sky-400 rounded-md transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full bg-slate-900/95 backdrop-blur-md z-40 flex flex-col justify-center items-center transition-all duration-300 overflow-hidden md:hidden ${
          mobileMenuOpen ? 'w-4/5' : 'w-0'
        }`}
      >
        <div 
          className={`absolute top-8 right-8 text-slate-200 text-2xl cursor-pointer transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
          }`}
          onClick={toggleMobileMenu}
        >
          <X className="h-6 w-6" />
        </div>
        
        {navLinks.map((link, index) => (
          <a 
            key={index}
            href={link.href} 
            className={`text-slate-300 hover:text-sky-400 text-xl py-2 my-4 transition-all duration-300 ${
              mobileMenuOpen 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-5'
            }`}
            style={{ transitionDelay: mobileMenuOpen ? `${index * 0.1}s` : '0s' }}
            onClick={toggleMobileMenu}
          >
            {link.text}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
