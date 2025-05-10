
import React from 'react';

interface ProjectsSectionProps {
  setActiveImage: (image: { src: string; alt: string } | null) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ setActiveImage }) => {
  const handleImageClick = (src: string, alt: string) => {
    setActiveImage({ src, alt });
  };

  return (
    <section id="projects" className="bg-slate-800/50 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 gradient-text text-center section-title fade-in">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="inline-block text-sky-400 mr-2 h-6 w-6" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="22" y1="12" x2="2" y2="12" />
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
            <line x1="6" y1="16" x2="6.01" y2="16" />
            <line x1="10" y1="16" x2="10.01" y2="16" />
          </svg> Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Project 1 */}
          <div className="glow-card bg-slate-800/50 p-6 md:p-8 rounded-xl fade-in h-full flex flex-col">
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
                  <path d="M3 11h18" />
                  <path d="M5 6h14" />
                  <path d="M7 16h10" />
                  <path d="M7 21h10" />
                  <path d="M9 3h1" />
                  <path d="M14 3h1" />
                  <path d="M9 16v5" />
                  <path d="M14 16v5" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg text-sky-400">Marketing Head, Kurtiverse</h3>
                <p className="text-xs md:text-sm text-slate-400">Feb 2025 - Apr 2025 | Hyderabad, IN</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-slate-400 space-y-2 mb-3 md:mb-4 flex-grow text-sm md:text-base pl-4">
              <li>Developed a Meta ads campaign with a 7.63% CTR, reaching 1,068 students at $0.0097 CPC.</li>
              <li>Implemented automated email workflows, sending 84 emails with a 61.5% open rate.</li>
              <li>Created content generating 30,000 profile views, averaging 2,200 daily views.</li>
              <li>Built a Shopify website with discounts and email capture popups, driving INR 60,000+ revenue in 2 days.</li>
            </ul>
            
            {/* Proof of Work Gallery */}
            <div className="mt-4">
              <div className="proof-gallery">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div 
                    key={index} 
                    className="proof-thumbnail"
                    onClick={() => handleImageClick(`/kurtiverse-proof-${index+2}.jpg`, `Kurtiverse Proof ${index+2}`)}
                  >
                    <img 
                      src={`/kurtiverse-proof-${index+2}.jpg`} 
                      alt={`Kurtiverse Proof ${index+2}`} 
                    />
                  </div>
                ))}
                <div 
                  className="proof-thumbnail"
                  onClick={() => handleImageClick('/kurtiverse-screenshot.jpg', 'Kurtiverse Screenshot')}
                >
                  <img 
                    src="/kurtiverse-screenshot.jpg" 
                    alt="Kurtiverse Screenshot" 
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-4">
              <span className="inline-block bg-sky-900/20 text-sky-400 px-2 py-1 rounded-full text-xs font-medium mr-1 md:mr-2 mb-1 md:mb-2">
                Digital Marketing
              </span>
              <span className="inline-block bg-sky-900/20 text-sky-400 px-2 py-1 rounded-full text-xs font-medium mr-1 md:mr-2 mb-1 md:mb-2">
                Shopify
              </span>
              <span className="inline-block bg-sky-900/20 text-sky-400 px-2 py-1 rounded-full text-xs font-medium mr-1 md:mr-2 mb-1 md:mb-2">
                Email Automation
              </span>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="glow-card bg-slate-800/50 p-6 md:p-8 rounded-xl fade-in h-full flex flex-col">
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
                  <path d="M18 22a3 3 0 0 0 3-3V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a3 3 0 0 0 3 3Z" />
                  <path d="M4 4v16c0 1.1.9 2 2 2h12" />
                  <path d="M6 12h5" />
                  <path d="M6 16h7" />
                  <path d="M9 8h3" />
                  <path d="M15 12h2" />
                  <path d="M15 16h2" />
                  <path d="M15 8h0" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg text-sky-400">Branding Head, Scintilla</h3>
                <p className="text-xs md:text-sm text-slate-400">Oct 2024 - Dec 2024 | Hyderabad, IN</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-slate-400 space-y-2 mb-3 md:mb-4 flex-grow text-sm md:text-base pl-4">
              <li>Developed a comprehensive brand identity, achieving 100% recognition across Woxsen University.</li>
              <li>Led workshops with design teams, earning a 75% positive feedback rate on visual consistency.</li>
              <li>Designed a vibrant color palette, logo, and typography from inception.</li>
            </ul>
            
            {/* Proof of Work Gallery */}
            <div className="mt-4">
              <div className="proof-gallery">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div 
                    key={index} 
                    className="proof-thumbnail"
                    onClick={() => handleImageClick(`/${index+1}.jpg`, `Scintilla Proof ${index+1}`)}
                  >
                    <img 
                      src={`/${index+1}.jpg`} 
                      alt={`Scintilla Proof ${index+1}`} 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-auto pt-4">
              <span className="inline-block bg-sky-900/20 text-sky-400 px-2 py-1 rounded-full text-xs font-medium mr-1 md:mr-2 mb-1 md:mb-2">
                Branding
              </span>
              <span className="inline-block bg-sky-900/20 text-sky-400 px-2 py-1 rounded-full text-xs font-medium mr-1 md:mr-2 mb-1 md:mb-2">
                Visual Identity
              </span>
              <span className="inline-block bg-sky-900/20 text-sky-400 px-2 py-1 rounded-full text-xs font-medium mr-1 md:mr-2 mb-1 md:mb-2">
                Design Systems
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
