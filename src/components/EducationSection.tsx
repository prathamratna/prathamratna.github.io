
import React from 'react';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="bg-slate-800/50 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 gradient-text text-center section-title fade-in">
          <GraduationCap className="inline-block text-sky-400 mr-2" /> Education
        </h2>
        <div className="glow-card bg-slate-800/50 p-6 md:p-8 rounded-xl mb-8 fade-in timeline-item">
          <div className="timeline-dot"></div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4">
            <div>
              <h3 className="font-bold text-lg md:text-xl text-sky-400 mb-1">Bachelor of Business Administration</h3>
              <p className="text-xs md:text-sm text-slate-400">E-commerce & Digital Marketing</p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="inline-block bg-sky-900/30 text-sky-400 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                2023 - Oct 2025
              </span>
            </div>
          </div>
          <div className="flex items-center mb-3 md:mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="text-slate-400 mr-2 text-sm md:text-base h-4 w-4" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M22 20V8h-4V4H6v4H2v12h4v4h12v-4h4Z" />
              <path d="M18 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              <path d="M10 20v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
              <path d="M14 8V6a2 2 0 0 0-2-2H6v4" />
            </svg>
            <span className="text-slate-300 text-sm md:text-base">Woxsen University, Hyderabad, IN</span>
          </div>
          <div className="flex items-center mb-3 md:mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="text-slate-400 mr-2 text-sm md:text-base h-4 w-4" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-slate-300 text-sm md:text-base">GPA: 3.5/4.0</span>
          </div>
          <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm md:text-base pl-4">
            <li>Pursuing a comprehensive degree focusing on digital marketing strategies and e-commerce operations.</li>
            <li>Engaged in coursework covering business strategy, market analysis, and digital transformation.</li>
            <li>Actively participated in university events, enhancing leadership and organizational skills.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
