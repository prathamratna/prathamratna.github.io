
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SkillsSection from '../components/SkillsSection';
import EducationSection from '../components/EducationSection';
import WorkSection from '../components/WorkSection';
import ProjectsSection from '../components/ProjectsSection';
import LeadershipSection from '../components/LeadershipSection';
import Footer from '../components/Footer';
import ImageModal from '../components/ImageModal';

const Index = () => {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    // Animation for elements with fade-in class
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Blob Background Elements */}
      <div className="blob top-0 -right-64 opacity-70"></div>
      <div className="blob bottom-0 -left-64 opacity-70"></div>
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl" id="home">
        <Header />
        <SkillsSection />
      </div>
      
      <EducationSection />
      
      <WorkSection />
      
      <ProjectsSection setActiveImage={setActiveImage} />
      
      <LeadershipSection />
      
      <Footer />
      
      <ImageModal 
        isOpen={!!activeImage} 
        onClose={() => setActiveImage(null)}
        image={activeImage}
      />
    </div>
  );
};

export default Index;
