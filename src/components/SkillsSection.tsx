
import React from 'react';
import { Briefcase, Heart } from 'lucide-react';

const SkillsSection = () => {
  return (
    <section id="skills" className="mb-16 fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 gradient-text text-center section-title">
        <Briefcase className="inline-block text-sky-400 mr-2" /> Skills & Interests
      </h2>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="glow-card bg-slate-800/50 p-6 md:p-8 rounded-xl">
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-sky-400 flex items-center">
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
              <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
              <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              <path d="M12 2v2" />
              <path d="M12 22v-2" />
              <path d="m17 20.66-1-1.73" />
              <path d="M11 10.27 7 3.34" />
              <path d="m20.66 17-1.73-1" />
              <path d="m3.34 7 1.73 1" />
              <path d="M14 12h8" />
              <path d="M2 12h2" />
              <path d="m20.66 7-1.73 1" />
              <path d="m3.34 17 1.73-1" />
              <path d="m17 3.34-1 1.73" />
              <path d="m11 13.73-4 6.93" />
            </svg> Professional Skills
          </h3>
          <div className="space-y-3">
            <div className="skill-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="skill-icon" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m12 2 8 3v3.5L12 12l-8-3.5V5l8-3Z" />
                <path d="m20 5-8 3.5V22" />
                <path d="m4 5 8 3.5V22" />
              </svg>
              <span className="text-slate-300">Business Strategy Development</span>
            </div>
            <div className="skill-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="skill-icon" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M3 11h18" />
                <path d="M5 6h14" />
                <path d="M7 16h10" />
                <path d="M7 21h10" />
                <path d="M9 3h1" />
                <path d="M14 3h1" />
                <path d="M9 16v5" />
                <path d="M14 16v5" />
              </svg>
              <span className="text-slate-300">Digital Marketing Campaigns</span>
            </div>
            <div className="skill-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="skill-icon" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                <path d="M2 7h20" />
                <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
              </svg>
              <span className="text-slate-300">Shopify Store Management</span>
            </div>
            <div className="skill-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="skill-icon" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 22a3 3 0 0 0 3-3V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a3 3 0 0 0 3 3Z" />
                <path d="M4 4v16c0 1.1.9 2 2 2h12" />
                <path d="M6 12h5" />
                <path d="M6 16h7" />
                <path d="M9 8h3" />
                <path d="M15 12h2" />
                <path d="M15 16h2" />
                <path d="M15 8h0" />
              </svg>
              <span className="text-slate-300">Brand Identity Design</span>
            </div>
            <div className="skill-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="skill-icon" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                <path d="m13 13 6 6" />
              </svg>
              <span className="text-slate-300">Market Research & Analysis</span>
            </div>
            <div className="skill-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="skill-icon" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="text-slate-300">Team Leadership</span>
            </div>
            <div className="skill-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="skill-icon" 
                width="24" 
                height="24" 
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
              <span className="text-slate-300">Email Marketing Automation</span>
            </div>
            <div className="skill-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="skill-icon" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span className="text-slate-300">SEO/SEM Strategies</span>
            </div>
          </div>
        </div>
        <div className="glow-card bg-slate-800/50 p-6 md:p-8 rounded-xl">
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-sky-400 flex items-center">
            <Heart className="mr-2" /> Interests & Passions
          </h3>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="bg-slate-700/50 p-3 md:p-4 rounded-lg flex items-center hover:bg-slate-700 transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="text-sky-400 mr-2 md:mr-3 text-lg md:text-xl h-5 w-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
              <span className="text-slate-300 text-sm md:text-base">Storytelling</span>
            </div>
            <div className="bg-slate-700/50 p-3 md:p-4 rounded-lg flex items-center hover:bg-slate-700 transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="text-sky-400 mr-2 md:mr-3 text-lg md:text-xl h-5 w-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="13.5" cy="6.5" r="2.5" />
                <path d="M21.5 11.5c0-.8.5-1.6 1.8-2.2-1.3-.6-1.8-1.4-1.8-2.2s.5-1.6 1.8-2.2c-1.3-.6-1.8-1.4-1.8-2.2v-.4C19.9 3.1 18 4 16 5.4" />
                <path d="M10.1 11.6c-.7.5-1 1.2-1 1.9 0 2 3.9 2 3.9 0 0-1-.8-1.9-1.9-1.9m.1 4c-.7.5-1 1.2-1 1.9 0 2 3.9 2 3.9 0 0-.7-.3-1.4-1-1.9m.6 3.8c-.7 0-1.3.1-1.8.4-.6.3-.8.7-.8 1.1C7.2 22 8.8 22 10.9 22c3.2 0 5.5-.3 5.5-1.1 0-1-1.4-1.5-2.9-1.5s-2.7.5-2.7 1.5" />
                <path d="M12.5 8.5c0 .9-.3 1.7-.8 2.2M10 5.5A3.5 3.5 0 0 1 13.5 2 3.5 3.5 0 0 1 17 5.5m-7 1.5c-.9 0-1.9.2-2.7.8-.7.5-1 1.2-1 1.9 0 1.9 3.9 1.9 3.9 0A3.5 3.5 0 0 0 16 9V7a3.5 3.5 0 1 1-3.3-5" />
              </svg>
              <span className="text-slate-300 text-sm md:text-base">Branding</span>
            </div>
            <div className="bg-slate-700/50 p-3 md:p-4 rounded-lg flex items-center hover:bg-slate-700 transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="text-sky-400 mr-2 md:mr-3 text-lg md:text-xl h-5 w-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
              <span className="text-slate-300 text-sm md:text-base">Music Production</span>
            </div>
            <div className="bg-slate-700/50 p-3 md:p-4 rounded-lg flex items-center hover:bg-slate-700 transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="text-sky-400 mr-2 md:mr-3 text-lg md:text-xl h-5 w-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 9.05A8 8 0 0 0 21.44 4a2 2 0 0 0-1.35-1 7.92 7.92 0 0 0-5.61.62l-1 .54a8 8 0 0 0-7.82-2.41 2 2 0 0 0-1.27 1.2 8 8 0 0 0 .08 5.19 9.14 9.14 0 0 0 4.14 5.17 8.38 8.38 0 0 0 7.82.71l1.26-.56A8 8 0 0 0 22 9.05Z" />
                <path d="m13.73 14.4.8-.37a6 6 0 0 0 2.83-2 6 6 0 0 0 1-3"/>
              </svg>
              <span className="text-slate-300 text-sm md:text-base">Psychology</span>
            </div>
            <div className="bg-slate-700/50 p-3 md:p-4 rounded-lg flex items-center hover:bg-slate-700 transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="text-sky-400 mr-2 md:mr-3 text-lg md:text-xl h-5 w-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m22 8-6 4 6 4V8Z" />
                <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
              </svg>
              <span className="text-slate-300 text-sm md:text-base">Content Creation</span>
            </div>
            <div className="bg-slate-700/50 p-3 md:p-4 rounded-lg flex items-center hover:bg-slate-700 transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="text-sky-400 mr-2 md:mr-3 text-lg md:text-xl h-5 w-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span className="text-slate-300 text-sm md:text-base">Digital Trends</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
