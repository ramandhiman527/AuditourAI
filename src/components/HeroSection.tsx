
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const [agentCount, setAgentCount] = useState(0);
  const [docsProcessed, setDocsProcessed] = useState(0);
  const [llmQueries, setLLMQueries] = useState(0);

  useEffect(() => {
    // Animate counters
    const agentTimer = setInterval(() => {
      setAgentCount(prev => prev < 12 ? prev + 1 : prev);
    }, 200);

    const docsTimer = setInterval(() => {
      setDocsProcessed(prev => prev < 50000 ? prev + 2000 : prev);
    }, 100);

    const llmTimer = setInterval(() => {
      setLLMQueries(prev => prev < 1000000 ? prev + 50000 : prev);
    }, 80);

    return () => {
      clearInterval(agentTimer);
      clearInterval(docsTimer);
      clearInterval(llmTimer);
    };
  }, []);

  const agents = [
    { name: 'DocMaster', color: 'bg-blue-500', icon: '📄', position: 'top-20 left-20' },
    { name: 'FlowGenius', color: 'bg-green-500', icon: '🔄', position: 'top-32 right-32' },
    { name: 'StructureBot', color: 'bg-purple-500', icon: '🧠', position: 'bottom-32 left-40' },
    { name: 'ReportCraft', color: 'bg-orange-500', icon: '📊', position: 'bottom-20 right-20' }
  ];

  return (
    <section className="relative min-h-screen neural-bg overflow-hidden">
      {/* Particle Background */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 3 + 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center max-w-6xl mx-auto">
          
          {/* AI Agents Floating Around */}
          <div className="relative mb-16">
            <div className="mx-auto w-32 h-32 bg-agent-glow rounded-full flex items-center justify-center mb-8 animate-pulse-glow">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center glass-effect">
                <span className="text-3xl">🤖</span>
              </div>
            </div>

            {agents.map((agent, index) => (
              <div
                key={agent.name}
                className={`absolute ${agent.position} w-16 h-16 ${agent.color} rounded-full flex items-center justify-center glass-effect animate-float agent-glow`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <span className="text-xl">{agent.icon}</span>
              </div>
            ))}

            {/* Neural Network Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9B86BD" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#E2BBE9" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              {/* Dynamic connection lines */}
              <path
                d="M 300 200 Q 400 250 500 200"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-neural-pulse"
              />
              <path
                d="M 200 300 Q 350 200 500 300"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-neural-pulse"
                style={{ animationDelay: '0.5s' }}
              />
            </svg>
          </div>

          {/* Main Headline */}
          <div className="animate-slide-up">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 text-lg">
              The Agentic Audit Revolution
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Meet Your
              <span className="block bg-gradient-to-r from-pale-orchid to-white bg-clip-text text-transparent">
                AI Audit Team
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Agentic automation that thinks, learns, and delivers like your best auditor. 
              Deploy autonomous AI agents that work 24/7 to transform your audit workflows.
            </p>
          </div>

          {/* Power Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-effect rounded-lg px-6 py-4 text-center hover-lift">
              <div className="text-2xl font-bold text-white">{agentCount}</div>
              <div className="text-white/80">Autonomous Agents</div>
            </div>
            <div className="glass-effect rounded-lg px-6 py-4 text-center hover-lift">
              <div className="text-2xl font-bold text-white">{docsProcessed.toLocaleString()}+</div>
              <div className="text-white/80">Documents Processed</div>
            </div>
            <div className="glass-effect rounded-lg px-6 py-4 text-center hover-lift">
              <div className="text-2xl font-bold text-white">{llmQueries.toLocaleString()}+</div>
              <div className="text-white/80">LLM Queries</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-white text-deep-slate hover:bg-white/90 px-8 py-6 text-lg font-semibold hover-lift"
            >
              Deploy Your AI Audit Team - Early Access
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold hover-lift"
            >
              Watch AI Agents in Action
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-white/70 mb-4">Trusted by 500+ Audit Firms & CAs</p>
            <div className="flex justify-center space-x-8 opacity-60">
              {['Enterprise Security', 'SOC 2 Compliant', '99.9% Uptime', 'GDPR Ready'].map((feature) => (
                <Badge key={feature} variant="outline" className="border-white/30 text-white/80">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
