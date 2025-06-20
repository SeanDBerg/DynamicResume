import { useState, useEffect } from 'react';
import type { NavigationSection } from '@/App';

interface NavigationProps {
  activeSection: NavigationSection;
  onNavigate: (section: NavigationSection) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the main content scroll position, not including navigation height
      const mainContent = document.querySelector('main');
      if (mainContent) {
        const rect = mainContent.getBoundingClientRect();
        setIsScrolled(rect.top < 0);
      } else {
        // Fallback to window scroll with larger threshold to prevent jitter
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getButtonClass = (section: NavigationSection) => {
    const isActive = activeSection === section;
    return `font-medium transition-colors cursor-pointer ${isScrolled ? 'text-sm' : 'text-base'} ${
      isActive ? 'text-hover-blue' : 'text-navy hover:text-hover-blue'
    }`;
  };

  return (
    <nav className={`bg-white/95 backdrop-blur-sm border-b border-subtle shadow-sm no-print transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300 ${isScrolled ? 'scale-98' : 'scale-100'}`}>
        <div className="flex flex-row items-center justify-center gap-4 w-full">
          <nav className="flex gap-6">
            <button 
              onClick={() => onNavigate('summary')}
              className={getButtonClass('summary')}
            >
              Summary
            </button>
            <button 
              onClick={() => onNavigate('resume')}
              className={getButtonClass('resume')}
            >
              Resume
            </button>
            <button 
              onClick={() => onNavigate('projects')}
              className={getButtonClass('projects')}
            >
              Projects
            </button>
          </nav>
        </div>
      </div>
    </nav>
  );
}
