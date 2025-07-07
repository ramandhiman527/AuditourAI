import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, useInView, animate } from 'framer-motion';
import { Phone, PlayCircle, FileText, BrainCircuit, Target } from 'lucide-react';

const AnimatedCounter = ({ to, suffix = '', precision = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, to, {
        duration: 2.5,
        ease: 'easeOut',
        onUpdate(value) {
          ref.current.textContent = value.toLocaleString(undefined, { 
            minimumFractionDigits: precision, 
            maximumFractionDigits: precision 
          }) + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, suffix, precision]);

  return <span ref={ref}>0{suffix}</span>;
};

const HeroSection = () => {
  const [agentCount, setAgentCount] = useState(0);

  useEffect(() => {
    const agentTimer = setInterval(() => {
      setAgentCount(prev => (prev < 12 ? prev + 1 : prev));
    }, 150);
    return () => clearInterval(agentTimer);
  }, []);

  const stats = [
    { icon: FileText, value: 1, suffix: 'k+', label: 'Docs Processed', color: 'text-blue-600' },
    { icon: BrainCircuit, value: 1, suffix: 'k+', label: 'LLM Queries', color: 'text-purple-600' },
    { icon: Target, value: 60, suffix: '%', label: 'Accuracy', color: 'text-green-600', precision: 0 },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background elements... */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-1/4 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-1/2 left-20 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-32 w-5 h-5 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="flex justify-start">
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow">
                  🎉 Early Bird – 50% Off • Starting ₹5,000/month
                </Badge>
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                  Audit 2.0: Where{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    AI Agents
                  </span>{' '}
                  Replace Spreadsheets
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                  Deploy intelligent agents that extract, analyze, and report with superhuman precision and reduces 60% manual work
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-slate-500 font-medium">Trusted by 10+ Audit Firms & Chartered Accountants</p>
                <div className="flex flex-wrap gap-3">
                  {['Enterprise Security', 'SOC 2 Compliant', '99.9% Uptime', 'GDPR Ready'].map((feature) => (
                    <Badge key={feature} variant="outline" className="border-slate-200 text-slate-600 bg-white/50 backdrop-blur-sm">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-6 pt-4">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 w-full sm:w-auto">
                      <Phone className="w-5 h-5" />
                      Book Demo – 15 Mins
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                     <Button size="lg" variant="ghost" className="text-slate-700 hover:text-slate-900 px-8 py-6 text-lg font-medium flex items-center gap-2 hover:bg-slate-100/80 rounded-2xl transition-all duration-300 w-full sm:w-auto">
                       <PlayCircle className="w-6 h-6 text-blue-600" />
                       See 2-Min Demo
                     </Button>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="absolute top-0 right-0 z-20">
                <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-slate-200 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">
                    AI Agents Active: {agentCount.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 backdrop-blur-sm">
                <div className="relative mx-auto w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-8 shadow-lg">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                      <span className="text-4xl">🤖</span>
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-ping"></div>
                  <div className="absolute inset-2 rounded-full border border-purple-400/50 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['DocMaster', 'FlowGenius', 'StructureBot', 'ReportCraft'].map((name, index) => (
                    <div key={name} className="bg-gray-100 rounded-xl p-4 text-gray-800 font-semibold text-center shadow-md transform hover:scale-105 transition-all duration-300">
                      {name}
                    </div>
                  ))}
                </div>
                <div className="mt-10 border-t border-gray-200 pt-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col items-center space-y-2">
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                        <div className={`text-3xl font-bold ${stat.color}`}>
                          <AnimatedCounter to={stat.value} suffix={stat.suffix} precision={stat.precision} />
                        </div>
                        <div className="text-sm text-slate-500 tracking-wide">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
