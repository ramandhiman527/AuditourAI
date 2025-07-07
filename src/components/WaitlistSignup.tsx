
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const WaitlistSignup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    auditVolume: '',
    painPoints: [],
    features: [],
    demoPreference: ''
  });

  const steps = [
    { number: 1, title: 'Contact & Firm Details', icon: '👤' },
    { number: 2, title: 'Current Audit Volume', icon: '📊' },
    { number: 3, title: 'AI Feature Preferences', icon: '🤖' },
    { number: 4, title: 'Demo Booking', icon: '📅' },
    { number: 5, title: 'Welcome to AI Future', icon: '🎉' }
  ];

  const painPoints = [
    'Manual document processing',
    'Time-consuming report generation',
    'Inconsistent audit quality',
    'Client communication delays',
    'Compliance tracking challenges'
  ];

  const features = [
    { id: 'extraction', name: 'Agentic Document Extraction', icon: '📄' },
    { id: 'workflow', name: 'Automated Workflow Orchestration', icon: '🔄' },
    { id: 'llm', name: 'LLM-Powered Analysis', icon: '🧠' },
    { id: 'canvas', name: 'Canvas Report Editing', icon: '📊' },
    { id: 'all', name: 'All of the above!', icon: '⭐' }
  ];

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Simulate form submission
    setCurrentStep(5);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-lg font-semibold">Full Name *</Label>
                <Input 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your full name"
                  className="mt-2 h-12 text-lg"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg font-semibold">Email Address *</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@firm.com"
                  className="mt-2 h-12 text-lg"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="company" className="text-lg font-semibold">Firm/Company Name *</Label>
                <Input 
                  id="company" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="Your audit firm name"
                  className="mt-2 h-12 text-lg"
                />
              </div>
              <div>
                <Label className="text-lg font-semibold">Your Role *</Label>
                <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                  <SelectTrigger className="mt-2 h-12 text-lg">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ca">Chartered Accountant</SelectItem>
                    <SelectItem value="partner">Partner</SelectItem>
                    <SelectItem value="manager">Audit Manager</SelectItem>
                    <SelectItem value="senior">Senior Associate</SelectItem>
                    <SelectItem value="associate">Associate</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-lg font-semibold">Monthly Audit Volume *</Label>
              <Select value={formData.auditVolume} onValueChange={(value) => setFormData({...formData, auditVolume: value})}>
                <SelectTrigger className="mt-2 h-12 text-lg">
                  <SelectValue placeholder="Select your monthly audit volume" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">1-50 clients</SelectItem>
                  <SelectItem value="medium">51-200 clients</SelectItem>
                  <SelectItem value="large">201-500 clients</SelectItem>
                  <SelectItem value="enterprise">500+ clients</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label className="text-lg font-semibold mb-4 block">Current Pain Points (Select all that apply)</Label>
              <div className="space-y-3">
                {painPoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Checkbox 
                      id={`pain-${index}`}
                      checked={formData.painPoints.includes(point)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({...formData, painPoints: [...formData.painPoints, point]});
                        } else {
                          setFormData({...formData, painPoints: formData.painPoints.filter(p => p !== point)});
                        }
                      }}
                    />
                    <Label htmlFor={`pain-${index}`} className="text-lg cursor-pointer">
                      {point}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-lg font-semibold mb-4 block">AI Features You're Most Interested In</Label>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <Card 
                    key={feature.id}
                    className={`cursor-pointer transition-all duration-300 hover-lift ${
                      formData.features.includes(feature.id) 
                        ? 'border-deep-slate bg-deep-slate text-white' 
                        : 'border-gray-200 hover:border-deep-slate'
                    }`}
                    onClick={() => {
                      if (feature.id === 'all') {
                        setFormData({...formData, features: ['all']});
                      } else if (formData.features.includes(feature.id)) {
                        setFormData({...formData, features: formData.features.filter(f => f !== feature.id)});
                      } else {
                        setFormData({...formData, features: [...formData.features.filter(f => f !== 'all'), feature.id]});
                      }
                    }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">{feature.icon}</div>
                      <div className="font-semibold">{feature.name}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 text-center">
            <div className="text-6xl mb-6">📅</div>
            <h3 className="text-2xl font-bold text-gray-900">Book Your Personalized Demo</h3>
            <p className="text-lg text-gray-600">
              Get a custom demonstration based on your specific needs and audit requirements
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {['15-min Overview', '30-min Deep Dive', '60-min Full Demo'].map((option, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover-lift ${
                    formData.demoPreference === option 
                      ? 'border-deep-slate bg-deep-slate text-white' 
                      : 'border-gray-200 hover:border-deep-slate'
                  }`}
                  onClick={() => setFormData({...formData, demoPreference: option})}
                >
                  <CardContent className="p-6 text-center">
                    <div className="font-semibold text-lg">{option}</div>
                    <div className="text-sm opacity-75 mt-2">
                      {index === 0 && 'Quick feature overview'}
                      {index === 1 && 'Detailed capabilities'}
                      {index === 2 && 'Complete walkthrough'}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="text-8xl animate-bounce">🎉</div>
            <h3 className="text-3xl font-bold text-gray-900">Welcome to the Future of Auditing!</h3>
            <p className="text-xl text-gray-600">
              You're now on the early access list for ThynkSort AI Agents
            </p>
            
            <div className="bg-gradient-to-br from-pale-orchid to-soft-lavender rounded-lg p-8 mt-8">
              <h4 className="text-2xl font-bold text-deep-slate mb-4">Your Early Access Benefits</h4>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-deep-slate">Free AI agent hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-deep-slate">Priority support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-deep-slate">Beta testing access</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-deep-slate">Exclusive webinars</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600">
              We'll be in touch within 24 hours to schedule your personalized demo!
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pale-orchid to-white">
      <div className="container mx-auto px-6 max-w-lg">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Join the Early Waitlist And Explore the New Concept</h2>
          <p className="text-lg text-red-600 font-semibold mb-6">Only 100 early access slots left</p>
        </div>
        <Card className="border-0 shadow-2xl">
          <CardContent className="p-8">
            <form className="space-y-6" action="https://formspree.io/f/xwpbozoo" method="POST">
              <div>
                <Label htmlFor="email" className="block mb-2 font-semibold">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="Enter your email" className="w-full" />
              </div>
              <div>
                <Label htmlFor="firmType" className="block mb-2 font-semibold">Firm Type</Label>
                <Select name="firmType" required>
                  <SelectTrigger id="firmType" className="w-full">
                    <SelectValue placeholder="Select your firm type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CA">CA Firm</SelectItem>
                    <SelectItem value="Consulting">Consulting</SelectItem>
                    <SelectItem value="Enterprise">Enterprise</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-deep-slate text-white py-3 text-lg font-bold rounded-lg mt-6 hover:bg-muted-violet transition">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WaitlistSignup;
