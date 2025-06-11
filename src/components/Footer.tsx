
import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Shield, 
  ChevronDown, 
  ChevronUp,
  Brain,
  Linkedin,
  Twitter,
  Youtube,
  Send,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const integrationLogos = [
    { name: 'Tally', icon: '📊' },
    { name: 'QuickBooks', icon: '💼' },
    { name: 'SAP', icon: '🏢' },
    { name: 'Zoho', icon: '🔧' },
    { name: 'GST Portal', icon: '🏛️' },
    { name: 'Banks', icon: '🏦' },
  ];

  const agentMascots = [
    { name: 'DocMaster', color: 'bg-blue-500', position: 'left-10' },
    { name: 'FlowGenius', color: 'bg-green-500', position: 'left-1/4' },
    { name: 'StructureBot', color: 'bg-purple-500', position: 'left-1/2' },
    { name: 'ReportCraft', color: 'bg-orange-500', position: 'left-3/4' },
  ];

  const footerSections = [
    {
      title: 'Product',
      links: [
        'Agentic Extraction',
        'Workflow Automation', 
        'LLM Integration',
        'Canvas Editor'
      ]
    },
    {
      title: 'Solutions',
      links: [
        'CA Firms',
        'Corporates',
        'Consultants',
        'Fintech'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Documentation',
        'API Reference',
        'Webinars',
        'Blog'
      ]
    },
    {
      title: 'Support',
      links: [
        'Help Center',
        'Community',
        'Contact',
        'Status Page'
      ]
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    setIsNewsletterOpen(false);
  };

  return (
    <footer className="relative bg-neural-gradient overflow-hidden">
      {/* Animated Agent Mascots */}
      <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none">
        {agentMascots.map((agent, index) => (
          <div
            key={agent.name}
            className={`absolute top-4 ${agent.position} w-8 h-8 ${agent.color} rounded-full flex items-center justify-center text-white text-xs font-bold animate-float`}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            {agent.name[0]}
          </div>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        
        {/* Layer 1 - Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="w-8 h-8 text-white agent-glow" />
              <span className="text-2xl font-bold text-white">ThynkSort</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Powering the Future of Audit Intelligence with Autonomous AI Agents
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <Button variant="ghost" size="sm" className="text-white hover:text-soft-lavender hover:bg-white/10 rounded-full">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-soft-lavender hover:bg-white/10 rounded-full">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-soft-lavender hover:bg-white/10 rounded-full">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>

            {/* Office Location */}
            <div className="flex items-center space-x-2 text-white/80">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Bengaluru HQ, India</span>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-2">
            <div className="glass-effect backdrop-blur-md border border-white/20 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Mail className="w-5 h-5 text-white animate-bounce" />
                <h3 className="text-lg font-semibold text-white">AI Audit Insights</h3>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Get weekly insights on AI-powered audit automation
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  required
                />
                <Button type="submit" className="bg-white/20 hover:bg-white/30 text-white">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Layer 2 - Feature Links (Desktop) */}
        <div className="hidden md:grid grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <button className="text-white/70 hover:text-white transition-colors text-sm text-left hover:translate-x-1 transform duration-200">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Layer 2 - Feature Links (Mobile Accordion) */}
        <div className="md:hidden mb-12 space-y-4">
          {footerSections.map((section) => (
            <Collapsible key={section.title} open={openSections[section.title]} onOpenChange={() => toggleSection(section.title)}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 glass-effect backdrop-blur-md border border-white/20 rounded-lg text-white font-semibold">
                {section.title}
                {openSections[section.title] ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-2 px-4">
                {section.links.map((link) => (
                  <button key={link} className="block text-white/70 hover:text-white transition-colors text-sm text-left py-1">
                    {link}
                  </button>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        {/* Layer 3 - Integration Showcase */}
        <div className="mb-12">
          <h4 className="text-white font-semibold mb-6 text-center">Seamlessly Integrates With</h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {integrationLogos.map((integration, index) => (
              <div
                key={integration.name}
                className="flex items-center space-x-2 glass-effect backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 hover:scale-105 transition-transform duration-200 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="text-2xl">{integration.icon}</span>
                <span className="text-white text-sm font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 4 - Trust Indicators */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center space-x-2 text-white/80">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-sm">RBI Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Shield className="w-5 h-5 text-purple-400" />
              <span className="text-sm">GDPR Ready</span>
            </div>
          </div>
        </div>

        {/* Layer 5 - Legal Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2025 ThynkSortAI. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <button className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-white/70 hover:text-white transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Particle Background */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
