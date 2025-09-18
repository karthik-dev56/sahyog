import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Camera, 
  MapPin, 
  AlertTriangle, 
  Upload, 
  Phone, 
  User,
  Clock,
  CheckCircle,
  Waves,
  CloudRain,
  Zap
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    hazardType: '',
    location: '',
    description: '',
    severity: '',
    name: '',
    phone: '',
    photo: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reportId, setReportId] = useState('');
  const { toast } = useToast();

  const hazardTypes = [
    { id: 'tsunami', label: 'Tsunami Warning', icon: Waves, color: 'bg-red-500', severity: 'critical' },
    { id: 'surge', label: 'Storm Surge', icon: CloudRain, color: 'bg-orange-500', severity: 'high' },
    { id: 'waves', label: 'High Waves', icon: Waves, color: 'bg-blue-500', severity: 'medium' },
    { id: 'flood', label: 'Coastal Flooding', icon: Zap, color: 'bg-purple-500', severity: 'high' },
    { id: 'erosion', label: 'Beach Erosion', icon: AlertTriangle, color: 'bg-yellow-500', severity: 'low' },
    { id: 'other', label: 'Other Hazard', icon: AlertTriangle, color: 'bg-gray-500', severity: 'medium' }
  ];

  const severityLevels = [
    { id: 'low', label: 'Low Risk', color: 'bg-green-500', description: 'Minor concern, no immediate danger' },
    { id: 'medium', label: 'Medium Risk', color: 'bg-yellow-500', description: 'Moderate concern, monitor closely' },
    { id: 'high', label: 'High Risk', color: 'bg-orange-500', description: 'Significant threat, take precautions' },
    { id: 'critical', label: 'Critical Risk', color: 'bg-red-500', description: 'Immediate danger, evacuate if needed' }
  ];

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate dummy report ID
    const id = `OW-${Date.now().toString().slice(-6)}`;
    setReportId(id);
    setStep(4);
    setIsSubmitting(false);

    toast({
      title: "Report Submitted Successfully!",
      description: `Your report ${id} has been submitted to INCOIS for verification.`,
    });
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      hazardType: '',
      location: '',
      description: '',
      severity: '',
      name: '',
      phone: '',
      photo: null
    });
    setReportId('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="glass-card border border-white/20 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-clash font-bold text-2xl text-center">
            🚨 Report Coastal Hazard
          </DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-4">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= stepNum ? 'bg-secondary text-background' : 'bg-white/10 text-foreground/50'
                }`}>
                  {step > stepNum ? '✓' : stepNum}
                </div>
                {stepNum < 4 && <div className="w-8 h-0.5 bg-white/20 mx-2"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Hazard Type */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="font-clash font-semibold text-xl text-center">
              What type of hazard are you reporting?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {hazardTypes.map((hazard) => (
                <Card
                  key={hazard.id}
                  className={`glass-card p-4 cursor-pointer hover:scale-105 transition-all duration-200 ${
                    formData.hazardType === hazard.id ? 'border-secondary border-2' : 'border-white/10'
                  }`}
                  onClick={() => setFormData({...formData, hazardType: hazard.id})}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full ${hazard.color} flex items-center justify-center`}>
                      <hazard.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">{hazard.label}</div>
                      <div className="text-xs text-foreground/70">{hazard.severity} priority</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Button 
              onClick={() => setStep(2)} 
              disabled={!formData.hazardType}
              className="btn-primary w-full"
            >
              Next: Location Details →
            </Button>
          </div>
        )}

        {/* Step 2: Location & Details */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="font-clash font-semibold text-xl text-center">
              Provide Location & Details
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Location (Beach/Area Name)
                </label>
                <Input 
                  placeholder="e.g., Marina Beach, Chennai"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="glass-card border-white/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <AlertTriangle className="w-4 h-4 inline mr-2" />
                  Severity Level
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {severityLevels.map((level) => (
                    <Card
                      key={level.id}
                      className={`glass-card p-3 cursor-pointer hover:scale-105 transition-all duration-200 ${
                        formData.severity === level.id ? 'border-secondary border-2' : 'border-white/10'
                      }`}
                      onClick={() => setFormData({...formData, severity: level.id})}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${level.color}`}></div>
                        <div>
                          <div className="text-sm font-semibold">{level.label}</div>
                          <div className="text-xs text-foreground/70">{level.description}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description of the Hazard
                </label>
                <Textarea 
                  placeholder="Describe what you're seeing... (e.g., unusually high waves, water receding, storm surge approaching)"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="glass-card border-white/20"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Camera className="w-4 h-4 inline mr-2" />
                  Upload Photo (Optional)
                </label>
                <div className="glass-card border-2 border-dashed border-white/20 p-6 text-center hover:border-secondary/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-foreground/50" />
                  <div className="text-sm text-foreground/70">
                    Click to upload or drag and drop
                  </div>
                  <div className="text-xs text-foreground/50 mt-1">
                    JPG, PNG up to 10MB
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button onClick={() => setStep(1)} className="btn-glass flex-1">
                ← Back
              </Button>
              <Button 
                onClick={() => setStep(3)} 
                disabled={!formData.location || !formData.severity || !formData.description}
                className="btn-primary flex-1"
              >
                Next: Contact Info →
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Information */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="font-clash font-semibold text-xl text-center">
              Your Contact Information
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </label>
                <Input 
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="glass-card border-white/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Mobile Number
                </label>
                <Input 
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="glass-card border-white/20"
                />
              </div>

              <div className="glass-card p-4 border border-yellow-500/30">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold text-yellow-400 mb-1">Privacy Notice</div>
                    <div className="text-foreground/80">
                      Your contact information will only be used for verification purposes 
                      and emergency contact by INCOIS and authorized agencies.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Report Summary */}
            <Card className="glass-card p-4 border border-secondary/30">
              <h4 className="font-semibold text-secondary mb-3">Report Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Hazard Type:</span>
                  <span className="font-medium">
                    {hazardTypes.find(h => h.id === formData.hazardType)?.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="font-medium">{formData.location}</span>
                </div>
                <div className="flex justify-between">
                  <span>Severity:</span>
                  <Badge className={severityLevels.find(s => s.id === formData.severity)?.color}>
                    {severityLevels.find(s => s.id === formData.severity)?.label}
                  </Badge>
                </div>
              </div>
            </Card>

            <div className="flex space-x-4">
              <Button onClick={() => setStep(2)} className="btn-glass flex-1">
                ← Back
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={!formData.name || !formData.phone || isSubmitting}
                className="btn-primary flex-1"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  'Submit Report 🚨'
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <div>
              <h3 className="font-clash font-bold text-2xl text-green-400 mb-2">
                Report Submitted Successfully!
              </h3>
              <p className="text-foreground/80">
                Your report has been sent to INCOIS for immediate verification
              </p>
            </div>

            <Card className="glass-card p-6 border border-green-500/30">
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-sm">Report ID:</span>
                  <Badge className="bg-green-500 text-white font-orbitron">{reportId}</Badge>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-foreground/70">
                  <Clock className="w-4 h-4" />
                  <span>Expected verification time: 6-18 minutes</span>
                </div>

                <div className="text-xs text-foreground/60">
                  You will receive SMS updates on your registered mobile number
                </div>
              </div>
            </Card>

            <div className="space-y-3">
              <div className="text-sm text-foreground/70">
                Emergency Contact Numbers:
              </div>
              <div className="flex justify-center space-x-4 text-sm">
                <div className="glass-card px-3 py-2">
                  <span className="text-primary font-semibold">108</span> - Emergency
                </div>
                <div className="glass-card px-3 py-2">
                  <span className="text-secondary font-semibold">1077</span> - Coast Guard
                </div>
              </div>
            </div>

            <Button onClick={handleClose} className="btn-secondary w-full">
              Close & Continue Monitoring
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ReportModal;