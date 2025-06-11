
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
    { name: 'OpenAI GPT-4', icon: '🧠' },
    { name: 'Claude AI', icon: '⚡' },
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
                <span className="text-xl font-bold bg-neural-gradient bg-clip-text text-transparent">
                  ThynkSort
                </span>
                <div className="flex items-center space-x-1 text-xs text-muted-violet">
                  <Zap className="w-3 h-3" />
                  <span>AI Agents Active: {aiAgentCount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-foreground">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="grid grid-cols-2 gap-4">
                        {agentPreviews.map((agent) => (
                          <div key={agent.name} className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                            <div className={`w-10 h-10 ${agent.color} rounded-full flex items-center justify-center text-white font-bold`}>
                              {agent.name[0]}
                            </div>
                            <div>
                              <div className="font-semibold text-sm">{agent.name}</div>
                              <div className="text-xs text-muted-foreground">{agent.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-foreground">
                    Technology
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[300px]">
                      {techStack.map((tech) => (
                        <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors">
                          <span className="text-2xl">{tech.icon}</span>
                          <span className="font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-soft-lavender transition-colors">
                    Pricing
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-soft-lavender to-pale-orchid text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      Early Bird
                    </span>
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-soft-lavender transition-colors">
                    About
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-1">
                    <Globe className="w-4 h-4" />
                    <span>{language}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage('EN')}>
                    🇺🇸 English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('HI')}>
                    🇮🇳 हिंदी
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Demo Button */}
              <Button className="hidden sm:inline-flex bg-gradient-to-r from-deep-slate to-muted-violet hover:from-muted-violet hover:to-soft-lavender text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
                Book Demo
              </Button>

              {/* Waitlist Button */}
              <Button className="bg-gradient-to-r from-soft-lavender to-pale-orchid hover:from-pale-orchid hover:to-soft-lavender text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Join Waitlist
              </Button>

              {/* Mobile Menu Toggle */}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-effect backdrop-blur-md border-t border-white/20">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button className="block w-full text-left py-2 text-foreground hover:text-soft-lavender transition-colors">
                Features
              </button>
              <button className="block w-full text-left py-2 text-foreground hover:text-soft-lavender transition-colors">
                Technology
              </button>
              <button className="block w-full text-left py-2 text-foreground hover:text-soft-lavender transition-colors">
                Pricing
              </button>
              <button className="block w-full text-left py-2 text-foreground hover:text-soft-lavender transition-colors">
                About
              </button>
              <div className="pt-4 border-t border-white/20">
                <Button className="w-full mb-2 bg-gradient-to-r from-deep-slate to-muted-violet text-white">
                  Book Demo
                </Button>
                <Button className="w-full bg-gradient-to-r from-soft-lavender to-pale-orchid text-white">
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
