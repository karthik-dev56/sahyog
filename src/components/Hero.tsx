import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-ocean-waves.jpg';

const Hero: React.FC = () => {
  const scrollToMap = () => {
    document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-clash font-bold text-5xl md:text-7xl leading-tight mb-6">
            <span className="text-primary">SAVE COASTS.</span>
            <br />
            <span className="text-secondary">REPORT HAZARDS.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-inter leading-relaxed">
            Real-time crowdsourced ocean intelligence — trusted by{' '}
            <span className="text-secondary font-semibold">INCOIS</span>.
          </p>

          <Button 
            onClick={scrollToMap}
            className="btn-primary text-lg px-8 py-4 wave-ripple mb-12"
          >
            EXPLORE LIVE DASHBOARD →
          </Button>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="flex flex-col items-center space-y-2 text-foreground/70">
            <span className="text-sm font-inter">Scroll to see real-time threats</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Official Partner Badge */}
      <div className="absolute bottom-8 right-8 glass-card px-4 py-3 max-w-xs">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-secondary" />
          <div className="text-sm">
            <div className="font-semibold text-secondary">Official Partner</div>
            <div className="text-foreground/80">INCOIS, Ministry of Earth Sciences</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-primary rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;