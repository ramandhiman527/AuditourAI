
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Brain, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [aiAgentCount, setAiAgentCount] = useState(1247);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const updateAiCount = () => {
      setAiAgentCount(prev => prev + Math.floor(Math.random() * 3));
    };

    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(updateAiCount, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const agentPreviews = [
    { name: 'DocMaster', color: 'bg-blue-500', description: 'Document extraction specialist' },
    { name: 'FlowGenius', color: 'bg-green-500', description: 'Workflow automation expert' },
    { name: 'StructureBot', color: 'bg-purple-500', description: 'LLM-powered analysis' },
    { name: 'ReportCraft', color: 'bg-orange-500', description: 'Report generation artist' },
  ];

  const techStack = [
    { name: 'OpenAI GPT-4o', icon: '🧠' },
    { name: 'Claude Sonnet', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Python', icon: '🐍' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect backdrop-blur-md border-b border-white/20 py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="w-8 h-8 text-deep-slate animate-spin" style={{ animationDuration: '8s' }} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-soft-lavender rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                {/* Redesigned Brand Logo */}
                <div className="relative flex items-center">
                                    <span className="inline-flex items-center">
                    <Brain className="w-7 h-7 mr-2 text-gradient animate-spin-slow" style={{ background: 'linear-gradient(90deg,#7f53ac,#657ced,#ff6a88)', WebkitBackgroundClip: 'text', color: 'transparent' }} />
                    <span
                      className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-700 via-purple-600 to-pink-400 bg-clip-text text-transparent drop-shadow-xl tracking-tight"
                      style={{ fontFamily: 'Frank, Inter, Arial, sans-serif', letterSpacing: '-0.01em' }}
                    >
                      AuditourAI
                    </span>
                  </span>
                  {/* Subtle glow accent */}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gradient-to-r from-blue-400/30 via-purple-300/30 to-pink-300/30 blur-lg rounded-full opacity-80 pointer-events-none"></span>
                </div>
              </div>
            </div>

            {/* Minimalist Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="nav-item text-base font-medium text-foreground hover:text-blue-600 transition-colors">Features</a>
              <a href="#blog" className="nav-item text-base font-medium text-foreground hover:text-blue-600 transition-colors">Blog</a>
              <a href="#contact" className="nav-item text-base font-medium text-foreground hover:text-blue-600 transition-colors">Contact Us</a>
              <div className="flex items-center space-x-4 ml-6">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-6 py-2 rounded-full shadow-md hover:from-purple-600 hover:to-pink-400 transition-all duration-300 font-semibold text-base animate-pulse-glow">
                  Book Demo
                </Button>
                <Button className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white px-6 py-2 rounded-full shadow-lg hover:from-yellow-400 hover:to-pink-400 transition-all duration-300 font-semibold text-base animate-pulse-glow">
                  Join Waitlist
                </Button>
              </div>
            </nav>

            {/* Minimalist Right Side Controls (Mobile Menu Toggle only) */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
                ) : (
                  <Menu className="w-6 h-6 transition-transform duration-300" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Minimalist Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-effect backdrop-blur-md border-t border-white/20">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#features" className="block w-full text-left py-2 text-foreground hover:text-blue-600 transition-colors">Features</a>
              <a href="#blog" className="block w-full text-left py-2 text-foreground hover:text-blue-600 transition-colors">Blog</a>
              <a href="#contact" className="block w-full text-left py-2 text-foreground hover:text-blue-600 transition-colors">Contact Us</a>
              <div className="pt-4 border-t border-white/20">
                <Button className="w-full mb-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold animate-pulse-glow">
                  Book Demo
                </Button>
                <Button className="w-full bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-semibold animate-pulse-glow">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
