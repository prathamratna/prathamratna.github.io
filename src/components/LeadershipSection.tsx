
import React from 'react';
import { Users } from 'lucide-react';

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-12 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 gradient-text text-center section-title fade-in">
          <Users className="inline-block text-sky-400 mr-2" /> Leadership Experience
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Leadership 1 */}
          <div className="glow-card bg-slate-800/50 p-6 md:p-8 rounded-xl fade-in">
            <div className="flex items-center mb-3 md:mb-4">
              <div className="bg-sky-900/20 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="text-sky-400 text-lg md:text-xl h-5 w-5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <rect x="7" y="8" width="3" height="3" />
                  <rect x="7" y="13" width="3" height="3" />
                  <path d="M14 8h3" />
                  <path d="M14 13h3" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg text-sky-400">Operations Head, APPRISE 2023</h3>
                <p className="text-xs md:text-sm text-slate-400">Apr 2023 | Woxsen University, IN</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm md:text-base pl-4">
              <li>Directed logistics for 300+ participants, increasing engagement by 40%.</li>
              <li>Led a team of 12 volunteers, achieving a 100% satisfaction rate.</li>
              <li>Secured a 30% increase in sponsorship through strategic outreach.</li>
            </ul>
            <div className="mt-4 md:mt-6">
              <div className="flex items-center text-slate-400 text-xs md:text-sm">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="mr-2 h-4 w-4" 
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
                <span>Team Size: 12 volunteers</span>
              </div>
              <div className="flex items-center text-slate-400 text-xs md:text-sm mt-1 md:mt-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="mr-2 h-4 w-4" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Participant Satisfaction: 100%</span>
              </div>
            </div>
          </div>
          
          {/* Leadership 2 */}
          <div className="glow-card bg-slate-800/50 p-6 md:p-8 rounded-xl fade-in">
            <div className="flex items-center mb-3 md:mb-4">
              <div className="bg-sky-900/20 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="text-sky-400 text-lg md:text-xl h-5 w-5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M17 5H7V2h10v3Z" />
                  <path d="M17 22H7v-3h10v3Z" />
                  <path d="M20 5a21 21 0 0 0-1.5 5c-.8 4-1.667 6.167-2.5 6.5-.834.334-2 .5-3.5.5s-2.666-.166-3.5-.5c-.833-.333-1.7-2.5-2.5-6.5A21 21 0 0 0 4 5" />
                  <path d="M20 19a21 21 0 0 1-1.5-5c-.8-4-1.667-6.167-2.5-6.5-.834-.334-2-.5-3.5-.5s-2.666.166-3.5.5c-.833.333-1.7 2.5-2.5 6.5A21 21 0 0 1 4 19" />
                  <path d="M12 6.5V17" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg text-sky-400">Outreach Head, PRME Hyderabad Chapter Meet-Up</h3>
                <p className="text-xs md:text-sm text-slate-400">Apr 2024 | Woxsen University, IN</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm md:text-base pl-4">
              <li>Led a 12-member team to manage logistics and outreach, ensuring seamless execution.</li>
              <li>Secured INR 2,50,000 in sponsorships through strategic partnerships with corporate and educational institutions.</li>
              <li>Enhanced event visibility and stakeholder coordination.</li>
            </ul>
            <div className="mt-4 md:mt-6">
              <div className="flex items-center text-slate-400 text-xs md:text-sm">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="mr-2 h-4 w-4" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
                </svg>
                <span>Sponsorships Secured: INR 2,50,000</span>
              </div>
              <div className="flex items-center text-slate-400 text-xs md:text-sm mt-1 md:mt-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="mr-2 h-4 w-4" 
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
                <span>Team Size: 12 members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
