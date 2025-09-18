import React from 'react';
import { Card } from '@/components/ui/card';
import { Camera, Bot, AlertTriangle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: Camera,
      title: 'SPOT & SNAP',
      description: 'See high waves? Flood? Surge? Open app → snap photo → auto-geotag.',
      color: 'text-blue-400',
      bgColor: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 2,
      icon: Bot,
      title: 'AI + INCOIS VERIFY',
      description: 'Our AI cross-checks with satellites + social. INCOIS verifies in minutes.',
      color: 'text-secondary',
      bgColor: 'from-secondary/20 to-secondary/30',
      borderColor: 'border-secondary/30'
    },
    {
      id: 3,
      icon: AlertTriangle,
      title: 'ALERT & SAVE',
      description: 'Verified alerts blast to coast guard, media, and your phone. Lives saved.',
      color: 'text-primary',
      bgColor: 'from-primary/20 to-primary/30',
      borderColor: 'border-primary/30'
    }
  ];

  return (
    <section id="how" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-clash font-bold text-4xl md:text-5xl mb-4">
            TURN YOUR PHONE INTO A <span className="text-primary">LIFESAVING SENSOR</span>
          </h2>
          <p className="text-xl text-foreground/80 font-inter max-w-3xl mx-auto">
            Three simple steps to become a coast guardian and protect millions of lives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0"></div>
              )}
              
              <Card className={`glass-card p-8 text-center relative overflow-hidden hover:scale-105 transition-all duration-300 border ${step.borderColor}`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-50`}></div>
                
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-orbitron font-bold text-sm">
                  {step.id}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.bgColor} border-2 ${step.borderColor} flex items-center justify-center`}>
                    <step.icon className={`w-10 h-10 ${step.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-clash font-bold text-xl mb-4">
                    <span className="text-2xl mr-2">📸</span>
                    <span className={step.id === 1 ? 'text-blue-400' : step.id === 2 ? 'text-secondary' : 'text-primary'}>
                      {step.title}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/80 font-inter leading-relaxed">
                    {step.description}
                  </p>

                  {/* Animated Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden mt-6 flex justify-center">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-white/20 to-transparent"></div>
                      <div className="absolute mt-6 text-white/40">↓</div>
                    </div>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 left-2 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-white/10 rounded-full animate-pulse delay-1000"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Statistics Below */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center glass-card p-6">
            <div className="font-orbitron font-bold text-3xl text-blue-400 mb-2">
              30 sec
            </div>
            <div className="text-sm text-foreground/70">
              Average report time
            </div>
          </div>
          
          <div className="text-center glass-card p-6">
            <div className="font-orbitron font-bold text-3xl text-secondary mb-2">
              6 min
            </div>
            <div className="text-sm text-foreground/70">
              INCOIS verification time
            </div>
          </div>
          
          <div className="text-center glass-card p-6">
            <div className="font-orbitron font-bold text-3xl text-primary mb-2">
              95%
            </div>
            <div className="text-sm text-foreground/70">
              Faster than traditional methods
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="font-clash font-semibold text-2xl mb-4">
              Ready to become a <span className="text-secondary">Coast Guardian</span>?
            </h3>
            <p className="text-foreground/80 mb-6">
              Download the app and start protecting India's coastline today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3">
                📱 Download App
              </button>
              <button className="btn-secondary px-8 py-3">
                🌐 Web Version
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;