
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 py-8 mt-16 border-t border-slate-800 backdrop-blur-md">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4 md:mb-6">
          <a 
            href="https://www.linkedin.com/in/prathamratna/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-sky-400 transition-all text-xl md:text-2xl hover:scale-125"
            aria-label="LinkedIn"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 md:h-7 md:w-7" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a 
            href="mailto:work.prathamratnameshram@gmail.com"
            className="text-slate-300 hover:text-sky-400 transition-all text-xl md:text-2xl hover:scale-125"
            aria-label="Email"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 md:h-7 md:w-7" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
        <p className="text-slate-500 text-xs md:text-sm mb-3 md:mb-4">
          Let's connect and create something amazing together!
        </p>
        <p className="text-slate-500 text-xs md:text-sm">
          © 2025 Prathamratna Meshram. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
