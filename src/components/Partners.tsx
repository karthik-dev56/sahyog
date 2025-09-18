import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Globe, Smartphone, Users, Database } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    { name: 'INCOIS', fullName: 'Indian National Centre for Ocean Information Services' },
    { name: 'Ministry of Earth Sciences', fullName: 'Government of India' },
    { name: 'NDMA', fullName: 'National Disaster Management Authority' },
    { name: 'NDRF', fullName: 'National Disaster Response Force' },
    { name: 'ISRO', fullName: 'Indian Space Research Organisation' },
    { name: 'IMD', fullName: 'India Meteorological Department' }
  ];

  const features = [
    {
      icon: Database,
      title: 'Community Reporting',
      description: 'Citizens can report local incidents (flooding, blocked roads) to help response teams.',
      color: 'text-blue-400'
    },
    {
      icon: Smartphone,
      title: 'Offline Mode',
      description: 'Works without internet connection for remote coastal areas',
      color: 'text-green-400'
    },
    {
      icon: Globe,
      title: 'Multilingual',
      description: 'Available in Hindi, Tamil, Telugu, Bengali, and English',
      color: 'text-secondary'
    },
    {
      icon: Users,
      title: 'Accessible',
      description: 'Designed for all users including elderly and differently-abled',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="partners" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-clash font-bold text-4xl md:text-5xl mb-4">
            TRUSTED BY <span className="text-secondary">INCOIS</span>. BUILT FOR <span className="text-primary">INDIA</span>.
          </h2>
          <p className="text-xl text-foreground/80 font-inter">
            Official partnerships with India's leading disaster management organizations
          </p>
        </div>

        {/* Main Partnership Card */}
        <div className="glass-card p-8 md:p-12 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* INCOIS Badge */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center border-4 border-secondary/30">
                <Shield className="w-16 h-16 text-secondary" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <Badge className="bg-secondary text-background mb-4 text-sm px-4 py-2">
                🏛️ Official Government Partnership
              </Badge>
              
              <h3 className="font-clash font-bold text-2xl md:text-3xl mb-4">
                Verified by INCOIS, Ministry of Earth Sciences
              </h3>
              
              <p className="text-lg text-foreground/80 font-inter leading-relaxed mb-6">
                Sahyog is the first citizen-powered coastal hazard intelligence platform 
                officially recognized and integrated with India's national ocean monitoring systems.
              </p>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge variant="outline" className="border-secondary/50 text-secondary">
                  ✅ Data Verified
                </Badge>
                <Badge variant="outline" className="border-blue-400/50 text-blue-400">
                  📡 Real-time Integration
                </Badge>
                <Badge variant="outline" className="border-green-400/50 text-green-400">
                  🛡️ Security Certified
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {partners.map((partner, index) => (
            <Card key={partner.name} className="glass-card p-4 text-center hover:bg-white/[0.05] transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div className="font-clash font-semibold text-sm text-secondary mb-1">
                {partner.name}
              </div>
              <div className="text-xs text-foreground/60 leading-tight">
                {partner.fullName}
              </div>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={feature.title} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              
              <h3 className="font-clash font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              
              <p className="text-sm text-foreground/70 font-inter">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <h3 className="font-clash font-semibold text-2xl text-center mb-8">
            Technical Specifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="font-orbitron font-bold text-xl text-yellow-400">
                99.9%
              </div>
              <div className="text-sm text-foreground/70">
                Uptime Guarantee
              </div>
            </div>
            
            <div className="text-center">
              <Database className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="font-orbitron font-bold text-xl text-blue-400">
                &lt; 2s
              </div>
              <div className="text-sm text-foreground/70">
                Server Response Time
              </div>
            </div>
            
            <div className="text-center">
              <Globe className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="font-orbitron font-bold text-xl text-secondary">
                7,516 km
              </div>
              <div className="text-sm text-foreground/70">
                Coastline Covered
              </div>
            </div>
          </div>
        </div>

        {/* Government Statement */}
        <div className="mt-12 text-center">
          <div className="glass-card p-6 max-w-2xl mx-auto border-l-4 border-secondary">
            <p className="text-lg font-inter italic text-foreground/90 mb-4">
              "Sahyog represents the future of disaster preparedness - 
              leveraging citizen participation with scientific validation."
            </p>
            <div className="font-clash font-semibold text-secondary">
              - Ministry of Earth Sciences, Government of India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;