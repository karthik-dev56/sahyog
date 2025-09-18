import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, AlertTriangle } from 'lucide-react';
import ReportModal from './ReportModal';

interface NavbarProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Live Map', href: '#map' },
    { name: 'How It Works', href: '#how' },
    { name: 'Stats', href: '#stats' },
    { name: 'Team', href: '#testimonials' },
    { name: 'Contact', href: '#partners' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-card border-b border-white/10 backdrop-blur-xl py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌊</span>
              <span className="font-clash font-bold text-xl text-secondary">
                SAHYOG
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-foreground hover:text-secondary transition-colors duration-200 font-medium"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Right Side - Language & Report Button */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="glass-card px-3 py-2 text-sm font-medium flex items-center space-x-1 hover:bg-white/[0.08] transition-all duration-200"
                >
                  <span>{currentLang?.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute top-full right-0 mt-2 glass-card border border-white/10 rounded-xl py-2 min-w-32 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setIsLanguageOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-white/[0.05] transition-colors ${
                          currentLanguage === lang.code ? 'text-secondary font-medium' : 'text-foreground'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Report Now Button */}
              <Button 
                onClick={() => setIsReportModalOpen(true)}
                className="btn-primary pulse-glow wave-ripple font-semibold"
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                Report Now
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden glass-card p-2"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 glass-card border border-white/10 rounded-xl p-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-foreground hover:text-secondary transition-colors duration-200 font-medium py-2 text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Report Modal */}
      <ReportModal 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;