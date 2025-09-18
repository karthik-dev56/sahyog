import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Fisherwoman',
      location: 'Puri, Odisha',
      quote: 'Reported surge at 5 AM — saved 200 families. Proud to be a coast guardian!',
      rating: 5,
      verified: true,
      avatar: '👩‍🦳'
    },
    {
      id: 2,
      name: 'Arjun Menon',
      role: 'Tourist',
      location: 'Goa',
      quote: 'Got alert before news channels — evacuated beach in time. This app is a lifesaver!',
      rating: 5,
      verified: true,
      avatar: '👨‍💼'
    },
    {
      id: 3,
      name: 'Dev Krishnan',
      role: 'Student',
      location: 'Chennai, Tamil Nadu',
      quote: 'INCOIS verified my report in 6 minutes. Felt like a hero helping my community!',
      rating: 5,
      verified: true,
      avatar: '👨‍🎓'
    },
    {
      id: 4,
      name: 'Lakshmi Nair',
      role: 'Coast Guard Officer',
      location: 'Kochi, Kerala',
      quote: 'Real-time data helps us respond faster. This platform is revolutionizing coastal safety.',
      rating: 5,
      verified: true,
      avatar: '👩‍✈️'
    },
    {
      id: 5,
      name: 'Ramesh Kumar',
      role: 'Local Fisherman',
      location: 'Visakhapatnam, AP',
      quote: 'Easy to use even for someone like me. My reports have helped many fellow fishermen.',
      rating: 5,
      verified: true,
      avatar: '👨‍🦲'
    }
  ];

  const liveUsers = [
    { id: 1, name: 'Suresh', avatar: '👨‍🦱', status: 'online' },
    { id: 2, name: 'Meera', avatar: '👩‍🦰', status: 'online' },
    { id: 3, name: 'Karthik', avatar: '👨‍💻', status: 'online' },
    { id: 4, name: 'Anjali', avatar: '👩‍🔬', status: 'online' },
    { id: 5, name: 'Raj', avatar: '👨‍🎨', status: 'online' },
    { id: 6, name: 'Deepika', avatar: '👩‍🏫', status: 'online' },
    { id: 7, name: 'Vikram', avatar: '👨‍⚕️', status: 'online' },
    { id: 8, name: 'Shreya', avatar: '👩‍💼', status: 'online' },
    { id: 9, name: 'Arun', avatar: '👨‍🔧', status: 'online' },
    { id: 10, name: 'Kavya', avatar: '👩‍🎤', status: 'online' },
    { id: 11, name: 'Naveen', avatar: '👨‍🚀', status: 'online' },
    { id: 12, name: 'Riya', avatar: '👩‍🎭', status: 'online' },
    { id: 13, name: 'Sanjay', avatar: '👨‍🏭', status: 'online' },
    { id: 14, name: 'Pooja', avatar: '👩‍⚖️', status: 'online' },
    { id: 15, name: 'Manish', avatar: '👨‍🌾', status: 'online' },
    { id: 16, name: 'Nisha', avatar: '👩‍🍳', status: 'online' },
    { id: 17, name: 'Rohit', avatar: '👨‍🎭', status: 'online' },
    { id: 18, name: 'Divya', avatar: '👩‍🚒', status: 'online' },
    { id: 19, name: 'Amit', avatar: '👨‍✈️', status: 'online' },
    { id: 20, name: 'Sneha', avatar: '👩‍🔧', status: 'online' }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-clash font-bold text-4xl md:text-5xl mb-4">
            COAST GUARDIANS IN <span className="text-secondary">ACTION</span>
          </h2>
          <p className="text-xl text-foreground/80 font-inter">
            Real stories from heroes protecting our coastline
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-secondary/20" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-4xl border-4 border-white/10">
                  {current.avatar}
                </div>
                {current.verified && (
                  <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-secondary text-background text-xs">
                    ✅ Verified
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-1 mb-3">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl font-inter leading-relaxed mb-6 text-foreground/90">
                  "{current.quote}"
                </blockquote>

                <div className="space-y-1">
                  <div className="font-clash font-semibold text-lg text-secondary">
                    {current.name}
                  </div>
                  <div className="text-foreground/70">
                    {current.role} • {current.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-secondary scale-125' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* Live Users Section */}
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="font-clash font-semibold text-2xl mb-2">
              LIVE USERS RIGHT NOW
            </h3>
            <div className="font-orbitron font-bold text-3xl text-secondary">
              842 Guardians Online
            </div>
          </div>

          {/* Scrolling Avatar Bar */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-4 animate-marquee">
              {[...liveUsers, ...liveUsers].map((user, index) => (
                <div key={`${user.id}-${index}`} className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center text-xl border-2 border-white/10">
                    {user.avatar}
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-background animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <div className="text-sm text-foreground/70">
              Join the community protecting India's coastline
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;