import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Live Map', href: '#map' },
    { name: 'How It Works', href: '#how' },
    { name: 'Report Hazard', href: '#report' },
    { name: 'Team', href: '#team' },
    { name: 'API Docs', href: '#api' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Data Protection', href: '#data' },
    { name: 'Cookie Policy', href: '#cookies' }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-500' }
  ];

  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🌊</span>
              <div>
                <div className="font-clash font-bold text-2xl text-secondary">
                  SAHYOG
                </div>
                <div className="text-sm text-foreground/70">
                  Real-Time Coastal Intelligence
                </div>
              </div>
            </div>
            
            <p className="text-foreground/80 font-inter leading-relaxed mb-6 max-w-md">
              India's first citizen-powered coastal hazard intelligence platform. 
              Protecting lives through real-time crowdsourced ocean monitoring 
              and AI-verified threat detection.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-foreground/70">
                <Mail className="w-4 h-4" />
                <span>contact@oceanwatch.in</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground/70">
                <Phone className="w-4 h-4" />
                <span>+91 1800-OCEAN-HELP</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>INCOIS Campus, Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-clash font-semibold text-lg mb-4 text-secondary">
              Quick Links
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-foreground/70 hover:text-secondary transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="font-clash font-semibold text-lg mb-4 text-secondary">
              Resources
            </h3>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-foreground/70 hover:text-secondary transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 glass-card p-4 border border-primary/30">
              <div className="text-primary font-semibold text-sm mb-1">
                🚨 Emergency Hotline
              </div>
              <div className="font-orbitron font-bold text-lg text-primary">
                108
              </div>
              <div className="text-xs text-foreground/60">
                24/7 Disaster Response
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`p-2 glass-card hover:bg-white/[0.05] transition-all duration-200 ${social.color}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-foreground/60">
            <div className="mb-1">
              © 2025 OceanWatch — Made for India 🇮🇳
            </div>
            <div className="text-xs">
              In Partnership with{' '}
              <span className="text-secondary font-semibold">INCOIS</span>,{' '}
              <span className="text-secondary font-semibold">Ministry of Earth Sciences</span>,{' '}
              Government of India
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-foreground/50">
            <div className="flex items-center space-x-1">
              <span>🏆</span>
              <span>Smart India Hackathon 2025</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>🛡️</span>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>🌟</span>
              <span>Digital India Initiative</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>⚡</span>
              <span>Make in India</span>
            </div>
          </div>
        </div>

        {/* Floating Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-background hover:scale-110 transition-all duration-300 shadow-glow-teal z-50"
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;