
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: { src: string; alt: string } | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  // Close modal on escape key press
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    // Lock scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center z-[999] animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-[90%] max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image.src} 
          alt={image.alt} 
          className="max-w-full max-h-[85vh] rounded-lg shadow-[0_10px_25px_rgba(56,189,248,0.3)]"
        />
        <button
          className="absolute -top-10 right-0 bg-sky-500/70 hover:bg-sky-500 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:rotate-90 duration-300"
          onClick={onClose}
          aria-label="Close image"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
