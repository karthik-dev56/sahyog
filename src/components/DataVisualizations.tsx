import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const DataVisualizations: React.FC = () => {
  const [animateCharts, setAnimateCharts] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateCharts(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('visualizations');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hazardData = [
    { type: 'High Waves', percentage: 45, color: 'bg-blue-500' },
    { type: 'Storm Surge', percentage: 30, color: 'bg-orange-500' },
    { type: 'Tsunami', percentage: 15, color: 'bg-red-500' },
    { type: 'Other', percentage: 10, color: 'bg-purple-500' }
  ];

  const responseTimeData = [
    { label: 'Before OceanWatch', value: 240, color: 'bg-red-400', unit: 'mins' },
    { label: 'After OceanWatch', value: 18, color: 'bg-secondary', unit: 'mins' }
  ];

  const stateData = [
    { state: 'Tamil Nadu', percentage: 42, color: 'bg-secondary' },
    { state: 'Odisha', percentage: 28, color: 'bg-blue-400' },
    { state: 'Kerala', percentage: 19, color: 'bg-green-400' },
    { state: 'Andhra Pradesh', percentage: 11, color: 'bg-purple-400' }
  ];

  return (
    <section id="visualizations" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-clash font-bold text-4xl md:text-5xl mb-4">
            IMPACT IN <span className="text-secondary">NUMBERS</span>
          </h2>
          <p className="text-xl text-foreground/80 font-inter">
            Real-time analytics driving coastal safety revolution
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Hazard Distribution - Donut Chart */}
          <Card className="glass-card p-8">
            <h3 className="font-clash font-semibold text-xl mb-6 text-center">
              Hazard Distribution
            </h3>
            
            <div className="relative w-48 h-48 mx-auto mb-6">
              {/* Donut Chart */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="20"
                />
                
                {hazardData.map((item, index) => {
                  const circumference = 2 * Math.PI * 80;
                  const strokeDasharray = circumference;
                  const strokeDashoffset = circumference - (circumference * item.percentage) / 100;
                  const rotation = hazardData.slice(0, index).reduce((acc, curr) => acc + (360 * curr.percentage) / 100, 0);
                  
                  return (
                    <circle
                      key={item.type}
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke={item.color.replace('bg-', '')}
                      strokeWidth="20"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={animateCharts ? strokeDashoffset : circumference}
                      transform={`rotate(${rotation} 100 100)`}
                      className="transition-all duration-2000 ease-out"
                      style={{
                        stroke: item.color === 'bg-blue-500' ? '#3b82f6' :
                               item.color === 'bg-orange-500' ? '#f97316' :
                               item.color === 'bg-red-500' ? '#ef4444' : '#a855f7'
                      }}
                    />
                  );
                })}
              </svg>
              
              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-orbitron font-bold text-2xl text-secondary">100%</div>
                  <div className="text-sm text-foreground/70">Coverage</div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-2">
              {hazardData.map((item) => (
                <div key={item.type} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-sm">{item.type}</span>
                  </div>
                  <span className="font-orbitron font-semibold text-sm">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Response Time Revolution - Bar Chart */}
          <Card className="glass-card p-8">
            <h3 className="font-clash font-semibold text-xl mb-6 text-center">
              Response Time Revolution
            </h3>
            
            <div className="space-y-6">
              {responseTimeData.map((item, index) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="font-orbitron font-bold text-lg">
                      {item.value} {item.unit}
                    </span>
                  </div>
                  
                  <div className="relative h-8 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-2000 ease-out`}
                      style={{
                        width: animateCharts ? `${index === 0 ? 100 : (item.value / 240) * 100}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
              
              {/* Rocket Animation */}
              <div className="relative h-12 flex items-center justify-center">
                <div className={`text-2xl transition-all duration-3000 ease-out ${
                  animateCharts ? 'transform translate-x-20' : 'transform translate-x-0'
                }`}>
                  🚀
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-secondary font-semibold">
                  95% Faster!
                </div>
              </div>
            </div>
          </Card>

          {/* Top Reporting States - Horizontal Bar Chart */}
          <Card className="glass-card p-8">
            <h3 className="font-clash font-semibold text-xl mb-6 text-center">
              Top Reporting States
            </h3>
            
            <div className="space-y-4">
              {stateData.map((item, index) => (
                <div key={item.state} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{item.state}</span>
                    <span className="font-orbitron font-bold">{item.percentage}%</span>
                  </div>
                  
                  <div className="relative h-4 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-2000 ease-out`}
                      style={{
                        width: animateCharts ? `${item.percentage}%` : '0%',
                        animationDelay: `${index * 200}ms`
                      }}
                    >
                      {/* Wave Animation */}
                      <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="text-center">
                <div className="font-orbitron font-bold text-xl text-secondary">12,847</div>
                <div className="text-sm text-foreground/70">Total Reports</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DataVisualizations;