import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, AlertTriangle, Clock, TrendingUp, Eye, MapPin } from 'lucide-react';

const LiveMap: React.FC = () => {
  const [activeThreats, setActiveThreats] = useState(7);
  const [reportsToday, setReportsToday] = useState(1189);
  const [activeUsers, setActiveUsers] = useState(835);
  const [socialMentions, setSocialMentions] = useState(3798);
  const [selectedPin, setSelectedPin] = useState<number | null>(null);

  // Dummy hazard data
  const hazardPins = [
    {
      id: 1,
      type: 'tsunami',
      color: 'bg-red-500',
      position: { top: '35%', left: '72%' },
      user: 'Ramesh K., Fisherman',
      report: 'Abnormal tide + strong current — 8:42 AM',
      verified: true,
      socialMentions: 328,
      hashtag: '#HighWavePuri'
    },
    {
      id: 2,
      type: 'surge',
      color: 'bg-orange-500',
      position: { top: '45%', left: '68%' },
      user: 'Priya S., Coast Guard',
      report: 'Storm surge warning — 9:15 AM',
      verified: true,
      socialMentions: 256,
      hashtag: '#StormSurgeAlert'
    },
    {
      id: 3,
      type: 'wave',
      color: 'bg-blue-500',
      position: { top: '55%', left: '65%' },
      user: 'Dev M., Student',
      report: 'High waves observed — 7:30 AM',
      verified: true,
      socialMentions: 192,
      hashtag: '#HighWaves'
    },
    {
      id: 4,
      type: 'flood',
      color: 'bg-purple-500',
      position: { top: '25%', left: '75%' },
      user: 'Arjun R., Tourist',
      report: 'Coastal flooding in progress — 10:22 AM',
      verified: false,
      socialMentions: 89,
      hashtag: '#CoastalFlood'
    },
    {
      id: 5,
      type: 'tsunami',
      color: 'bg-red-500',
      position: { top: '65%', left: '62%' },
      user: 'Lakshmi T., Local Resident',
      report: 'Unusual water receding — 6:45 AM',
      verified: true,
      socialMentions: 445,
      hashtag: '#TsunamiWatch'
    }
  ];

  // Live counter animations
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveThreats(prev => prev === 9 ? 7 : prev + 1);
      setReportsToday(prev => prev + Math.floor(Math.random() * 3));
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5) - 2);
      setSocialMentions(prev => prev + Math.floor(Math.random() * 10));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="map" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-clash font-bold text-4xl md:text-5xl mb-4">
            LIVE COASTAL THREAT MAP — <span className="text-secondary">INDIA</span>
          </h2>
          <p className="text-xl text-foreground/80 font-inter">
            Powered by <span className="text-secondary font-semibold">12,847</span> citizen reports + AI social monitoring.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Interactive Map */}
          <div className="glass-card p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-clash font-semibold text-2xl">Interactive Map</h3>
              <Button className="btn-glass text-sm">
                <Eye className="w-4 h-4 mr-2" />
                Heatmap Overlay
              </Button>
            </div>

            {/* Map Container */}
            <div className="relative bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-xl h-96 overflow-hidden border border-white/10">
              {/* India Map Outline (simplified) */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-800/30 to-blue-800/30 rounded-xl">
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                  {/* Coastline visualization */}
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    <path
                      d="M100 50 C150 60, 200 80, 250 70 C300 60, 350 80, 380 100 L380 250 C350 240, 300 230, 250 240 C200 250, 150 240, 100 230 Z"
                      fill="rgba(34, 197, 94, 0.2)"
                      stroke="rgba(34, 197, 94, 0.4)"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              {/* Hazard Pins */}
              {hazardPins.map((pin) => (
                <div
                  key={pin.id}
                  className={`absolute w-4 h-4 rounded-full ${pin.color} animate-wave-pulse cursor-pointer z-10 transform -translate-x-1/2 -translate-y-1/2`}
                  style={{ top: pin.position.top, left: pin.position.left }}
                  onClick={() => setSelectedPin(selectedPin === pin.id ? null : pin.id)}
                >
                  <MapPin className="w-3 h-3 text-white absolute top-0.5 left-0.5" />
                </div>
              ))}

              {/* Pin Popup */}
              {selectedPin && (
                <div className="absolute top-4 right-4 glass-card p-4 max-w-xs z-20">
                  {hazardPins.find(pin => pin.id === selectedPin) && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={hazardPins.find(pin => pin.id === selectedPin)?.verified ? "secondary" : "destructive"}>
                          {hazardPins.find(pin => pin.id === selectedPin)?.verified ? "✅ INCOIS Verified" : "⏳ Pending"}
                        </Badge>
                      </div>
                      <div className="font-semibold text-sm mb-1">
                        {hazardPins.find(pin => pin.id === selectedPin)?.user}
                      </div>
                      <div className="text-sm text-foreground/80 mb-2">
                        {hazardPins.find(pin => pin.id === selectedPin)?.report}
                      </div>
                      <div className="text-xs text-secondary">
                        {hazardPins.find(pin => pin.id === selectedPin)?.hashtag} — {hazardPins.find(pin => pin.id === selectedPin)?.socialMentions} tweets
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Live Stats Dashboard */}
          <div className="space-y-6">
            <h3 className="font-clash font-semibold text-2xl mb-6">Live Stats Dashboard</h3>
            
            {/* Active Threats */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-sm text-foreground/70">Active Threats</div>
                    <div className="font-orbitron font-bold text-3xl text-primary counter-up">
                      {activeThreats}
                    </div>
                  </div>
                </div>
                <div className="text-right text-sm text-foreground/60">
                  <div>Previous: 12</div>
                  <div className="text-secondary">-25% ↓</div>
                </div>
              </div>
            </Card>

            {/* Reports Today */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                  <div>
                    <div className="text-sm text-foreground/70">Reports Today</div>
                    <div className="font-orbitron font-bold text-3xl text-secondary counter-up">
                      {reportsToday.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="w-16 h-8 bg-gradient-to-r from-secondary/20 to-secondary/40 rounded flex items-end justify-center">
                  <div className="w-1 h-6 bg-secondary rounded-t"></div>
                  <div className="w-1 h-4 bg-secondary rounded-t ml-1"></div>
                  <div className="w-1 h-8 bg-secondary rounded-t ml-1"></div>
                  <div className="w-1 h-3 bg-secondary rounded-t ml-1"></div>
                </div>
              </div>
            </Card>

            {/* Active Users */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-blue-400" />
                  <div>
                    <div className="text-sm text-foreground/70">Active Users</div>
                    <div className="font-orbitron font-bold text-3xl text-blue-400 counter-up">
                      {activeUsers}
                    </div>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-primary border-2 border-background`}></div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Response Time */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-yellow-400" />
                  <div>
                    <div className="text-sm text-foreground/70">Avg. Response Time</div>
                    <div className="font-orbitron font-bold text-3xl text-yellow-400">
                      18 <span className="text-lg">mins</span>
                    </div>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="text-foreground/60">Old: 4 hrs</div>
                  <div className="text-secondary font-semibold">95% faster!</div>
                </div>
              </div>
            </Card>

            {/* Social Mentions */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">💬</div>
                  <div>
                    <div className="text-sm text-foreground/70">Social Mentions</div>
                    <div className="font-orbitron font-bold text-3xl text-purple-400 counter-up">
                      {socialMentions.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="text-right text-xs">
                  <div className="flex items-center space-x-1 mb-1">
                    <span>😊</span><span>20%</span>
                  </div>
                  <div className="flex items-center space-x-1 mb-1">
                    <span>😐</span><span>35%</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>😱</span><span>45%</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMap;