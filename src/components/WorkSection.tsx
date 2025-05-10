
import React from 'react';
import { Building } from 'lucide-react';

const WorkSection = () => {
  return (
    <section id="work" className="py-12 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 gradient-text text-center section-title fade-in">
          <Building className="inline-block text-sky-400 mr-2" /> Work Experience
        </h2>
        
        <div className="space-y-6 md:space-y-8">
          {/* Timeline Item 1 */}
          <div className="glow-card bg-slate-800/50 p-6 md:p-8 rounded-xl fade-in timeline-item">
            <div className="timeline-dot"></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4">
              <h3 className="font-bold text-lg md:text-xl text-sky-400">Business Strategy Intern</h3>
              <span className="text-xs md:text-sm text-slate-400 mt-1 md:mt-0">May 2024 - Jul 2024</span>
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
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-slate-300 text-sm md:text-base">Fond Vet Tech, Bangalore, IN</span>
            </div>
            <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm md:text-base pl-4">
              <li>Developed go-to-market strategies for 7 distinct target markets, projecting a $2M revenue increase in the first year.</li>
              <li>Expanded addressable market by 3 new service segments: wearable health-monitoring, pet-friendly travel, and subscription-based grooming.</li>
              <li>Conducted market research and competitor analysis to enhance competitive positioning.</li>
            </ul>
          </div>
          
          {/* Timeline Item 2 */}
          <div className="glow-card bg-slate-800/50 p-6 md:p-8 rounded-xl fade-in timeline-item">
            <div className="timeline-dot"></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4">
              <h3 className="font-bold text-lg md:text-xl text-sky-400">Social Intern</h3>
              <span className="text-xs md:text-sm text-slate-400 mt-1 md:mt-0">Jun 2023 - Jul 2024</span>
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
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-slate-300 text-sm md:text-base">Robin Hood Army, Akola, IN</span>
            </div>
            <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm md:text-base pl-4">
              <li>Directed citywide food-distribution operations across 5 high-need locations, delivering over 2,000 meals weekly to 1,500 families.</li>
              <li>Managed logistics with 3 partnered restaurants and coordinated a team of 20+ volunteers.</li>
              <li>Collaborated with the social media team to create 30+ posts, increasing awareness.</li>
            </ul>
          </div>
          
          {/* Timeline Item 3 */}
          <div className="glow-card bg-slate-800/50 p-6 md:p-8 rounded-xl fade-in timeline-item">
            <div className="timeline-dot"></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4">
              <h3 className="font-bold text-lg md:text-xl text-sky-400">Marketing & Sales Intern</h3>
              <span className="text-xs md:text-sm text-slate-400 mt-1 md:mt-0">Mar 2023 - Apr 2023</span>
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
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-slate-300 text-sm md:text-base">Unschool, Remote</span>
            </div>
            <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm md:text-base pl-4">
              <li>Led an 8-member team to execute a lead-generation strategy, reaching 5 universities and 1,700+ students in 2 days.</li>
              <li>Generated 1,000 qualified leads and closed 10 sales with an AOV of INR 15,000.</li>
              <li>Engaged with 100+ prospects to drive conversions.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
