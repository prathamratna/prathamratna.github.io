
import React from 'react';

const Header = () => {
  return (
    <header className="mb-16 text-center fade-in">
      <h1 className="text-3xl md:text-6xl font-bold mb-4 gradient-text">Prathamratna Meshram</h1>
      <h2 className="text-lg md:text-2xl font-medium text-slate-300 mb-6">Digital Marketing Specialist | Business Strategist</h2>
      <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
        Passionate about driving innovation and growth through strategic business solutions and digital marketing expertise. 
        Transforming ideas into impactful digital experiences.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="mailto:work.prathamratnameshram@gmail.com"
          className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 rounded-full font-medium transition-all flex items-center shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
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
          Email
        </a>
        <a 
          href="https://www.linkedin.com/in/prathamratna/" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 md:px-6 md:py-3 border border-sky-500 text-sky-400 hover:bg-sky-900/30 rounded-full font-medium transition-all flex items-center hover:scale-105 text-sm md:text-base"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
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
          LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Header;
