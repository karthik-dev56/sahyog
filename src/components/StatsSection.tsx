import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Users, 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Activity,
  Target,
  Shield,
  Zap,
  BarChart3
} from 'lucide-react';

const StatsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [liveCounter, setLiveCounter] = useState(1247);

  // Live counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCounter(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const overviewStats = [
    {
      icon: AlertTriangle,
      title: 'Active Threats',
      value: '9',
      change: '-25%',
      changeType: 'positive',
      description: 'Currently monitored hazards',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Total Reports',
      value: liveCounter.toLocaleString(),
      change: '+12%',
      changeType: 'positive',
      description: 'Citizen reports today',
      color: 'text-secondary'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '18 min',
      change: '95% faster',
      changeType: 'positive',
      description: 'Average verification time',
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      title: 'Lives Protected',
      value: '2.4M',
      change: '+8.3%',
      changeType: 'positive',
      description: 'Estimated people in safe zones',
      color: 'text-green-400'
    }
  ];

  const regionStats = [
    { region: 'Tamil Nadu', reports: 542, threats: 3, color: 'bg-secondary' },
    { region: 'Odisha', reports: 398, threats: 2, color: 'bg-blue-400' },
    { region: 'Kerala', reports: 287, threats: 2, color: 'bg-green-400' },
    { region: 'Andhra Pradesh', reports: 245, threats: 1, color: 'bg-purple-400' },
    { region: 'West Bengal', reports: 189, threats: 1, color: 'bg-yellow-400' },
    { region: 'Gujarat', reports: 156, threats: 0, color: 'bg-pink-400' }
  ];

  const hourlyData = [
    { hour: '00:00', reports: 23 },
    { hour: '04:00', reports: 45 },
    { hour: '08:00', reports: 89 },
    { hour: '12:00', reports: 156 },
    { hour: '16:00', reports: 134 },
    { hour: '20:00', reports: 167 }
  ];

  const hazardTypes = [
    { type: 'High Waves', count: 567, percentage: 45, color: 'bg-blue-500' },
    { type: 'Storm Surge', count: 378, percentage: 30, color: 'bg-orange-500' },
    { type: 'Tsunami Warning', count: 189, percentage: 15, color: 'bg-red-500' },
    { type: 'Coastal Flooding', count: 126, percentage: 10, color: 'bg-purple-500' }
  ];

  return (
    <section id="stats" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-clash font-bold text-4xl md:text-5xl mb-4">
            REAL-TIME <span className="text-secondary">ANALYTICS</span>
          </h2>
          <p className="text-xl text-foreground/80 font-inter">
            Comprehensive insights into India's coastal safety network
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 flex space-x-2">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'regions', label: 'Regions', icon: MapPin },
              { id: 'trends', label: 'Trends', icon: TrendingUp },
              { id: 'performance', label: 'Performance', icon: Activity }
            ].map(tab => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 ${activeTab === tab.id ? 'btn-primary' : 'btn-glass'}`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewStats.map((stat) => (
                <Card key={stat.title} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    <Badge variant={stat.changeType === 'positive' ? 'secondary' : 'destructive'}>
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="font-orbitron font-bold text-3xl mb-2 counter-up">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/70 mb-1">
                    {stat.title}
                  </div>
                  <div className="text-xs text-foreground/50">
                    {stat.description}
                  </div>
                </Card>
              ))}
            </div>

            {/* Hazard Types Distribution */}
            <Card className="glass-card p-8">
              <h3 className="font-clash font-semibold text-2xl mb-6 text-center">
                Hazard Types Distribution
              </h3>
              <div className="space-y-4">
                {hazardTypes.map((hazard) => (
                  <div key={hazard.type} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{hazard.type}</span>
                      <div className="text-right">
                        <span className="font-orbitron font-bold">{hazard.count}</span>
                        <span className="text-sm text-foreground/70 ml-2">({hazard.percentage}%)</span>
                      </div>
                    </div>
                    <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${hazard.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${hazard.percentage}%` }}
                      >
                        <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'regions' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionStats.map((region) => (
                <Card key={region.region} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-clash font-semibold text-lg">{region.region}</h3>
                    <div className={`w-4 h-4 rounded-full ${region.color}`}></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Reports</span>
                      <span className="font-orbitron font-bold text-secondary">{region.reports}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Active Threats</span>
                      <span className="font-orbitron font-bold text-primary">{region.threats}</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2">
                      <div 
                        className={`h-full ${region.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${(region.reports / 600) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'trends' && (
          <div className="space-y-8">
            <Card className="glass-card p-8">
              <h3 className="font-clash font-semibold text-2xl mb-6 text-center">
                24-Hour Report Trends
              </h3>
              <div className="grid grid-cols-6 gap-4 items-end h-64">
                {hourlyData.map((data, index) => (
                  <div key={data.hour} className="flex flex-col items-center">
                    <div 
                      className="bg-gradient-to-t from-secondary to-secondary/50 rounded-t-lg w-full transition-all duration-1000 ease-out"
                      style={{ height: `${(data.reports / 200) * 100}%` }}
                    ></div>
                    <div className="mt-2 text-xs text-foreground/70">{data.hour}</div>
                    <div className="font-orbitron font-bold text-sm text-secondary">{data.reports}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Impact Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-card p-6">
                <Target className="w-8 h-8 text-green-400 mb-4" />
                <div className="font-orbitron font-bold text-2xl text-green-400 mb-2">98.2%</div>
                <div className="text-sm text-foreground/70">Accuracy Rate</div>
              </Card>
              <Card className="glass-card p-6">
                <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                <div className="font-orbitron font-bold text-2xl text-yellow-400 mb-2">4.7s</div>
                <div className="text-sm text-foreground/70">Avg Processing Time</div>
              </Card>
              <Card className="glass-card p-6">
                <Shield className="w-8 h-8 text-secondary mb-4" />
                <div className="font-orbitron font-bold text-2xl text-secondary mb-2">847</div>
                <div className="text-sm text-foreground/70">Lives Saved Today</div>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card p-8">
                <h3 className="font-clash font-semibold text-xl mb-6">System Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>API Uptime</span>
                    <span className="font-orbitron font-bold text-green-400">99.97%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="h-full bg-green-400 rounded-full w-full"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Response Time</span>
                    <span className="font-orbitron font-bold text-blue-400">1.8s</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="h-full bg-blue-400 rounded-full w-4/5"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Data Accuracy</span>
                    <span className="font-orbitron font-bold text-secondary">98.2%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="h-full bg-secondary rounded-full w-full"></div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-8">
                <h3 className="font-clash font-semibold text-xl mb-6">User Engagement</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="font-orbitron font-bold text-4xl text-secondary mb-2">842</div>
                    <div className="text-sm text-foreground/70">Active Users Right Now</div>
                  </div>
                  <div className="text-center">
                    <div className="font-orbitron font-bold text-3xl text-primary mb-2">2.4M</div>
                    <div className="text-sm text-foreground/70">Total App Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="font-orbitron font-bold text-3xl text-blue-400 mb-2">4.8★</div>
                    <div className="text-sm text-foreground/70">Average App Rating</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Real-time Status */}
        <div className="mt-12 text-center glass-card p-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-clash font-semibold text-green-400">SYSTEM OPERATIONAL</span>
          </div>
          <div className="text-sm text-foreground/70">
            Last updated: {new Date().toLocaleTimeString()} IST
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;