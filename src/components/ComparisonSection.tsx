
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { FileText, Clock, Zap, BarChart3, CheckCircle, AlertCircle, ArrowUpRight, Clock3, Gauge, ZapOff } from 'lucide-react';

const AnimatedNumber = ({ value, duration = 1, prefix = '', suffix = '', decimals = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 }
      });
    }
  }, [isInView, controls]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className="inline-block"
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, delay: 0.3 }
        }}
        onAnimationStart={() => {
          const start = 0;
          const end = value;
          const durationMs = duration * 1000;
          const startTime = performance.now();
          
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            
            if (ref.current) {
              ref.current.textContent = currentValue.toLocaleString();
            }
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else if (ref.current) {
              ref.current.textContent = end.toLocaleString();
            }
          };
          
          requestAnimationFrame(animate);
        }}
      >
        <span ref={ref}></span>
      </motion.span>
      {suffix}
    </motion.span>
  );
};

const ComparisonCard = ({ title, human, ai, icon: Icon, unit, improvement, description, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: index * 0.1 }
      });
    }
  }, [isInView, controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="space-y-6">
          {/* Human Performance */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-500">Human Auditor</span>
              <span className="text-lg font-bold text-gray-700">
                {typeof human === 'number' ? (
                  <AnimatedNumber value={human} duration={1.5} suffix={` ${unit}`} />
                ) : (
                  <span className="text-gray-800">{human} {unit}</span>
                )}
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          {/* AI Performance */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-blue-600">AuditourAI</span>
              <span className="text-lg font-bold text-blue-600">
                {typeof ai === 'number' ? (
                  <AnimatedNumber value={ai} duration={1.5} suffix={` ${unit}`} />
                ) : (
                  <span className="text-blue-700">{ai}</span>
                )}
              </span>
            </div>
            <div className="h-2 bg-blue-50 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: '100%',
                  transition: { 
                    duration: 1.5,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>{improvement} improvement</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ComparisonSection = () => {
  const metrics = [
    {
      title: 'Document Processing',
      description: 'Process and analyze audit documents with AI precision',
      icon: FileText,
      human: 20,
      ai: 200,
      unit: 'docs/hour',
      improvement: '10x faster'
    },
    {
      title: 'Accuracy Rate',
      description: 'Minimize human error with consistent AI accuracy',
      icon: CheckCircle,
      human: 94,
      ai: 99.2,
      unit: '%',
      improvement: '5.5% better',
      decimals: 1
    },
    {
      title: 'Workflow Speed',
      description: 'Complete audit workflows in record time',
      icon: Zap,
      human: 8,
      ai: 0.75,
      unit: 'hours',
      improvement: '11x faster'
    },
    {
      title: 'Report Generation',
      description: 'Generate comprehensive audit reports instantly',
      icon: BarChart3,
      human: 4,
      ai: 0.25,
      unit: 'hours',
      improvement: '16x faster'
    }
  ];

  const additionalBenefits = [
    {
      title: '24/7 Availability',
      description: 'Audit around the clock without breaks or downtime',
      icon: Clock,
      highlight: true
    },
    {
      title: 'Consistent Quality',
      description: 'Eliminate human variability in audit quality',
      icon: Gauge,
      highlight: true
    },
    {
      title: 'Zero Human Error',
      description: 'Remove the risk of oversight and miscalculation',
      icon: AlertCircle,
      highlight: true
    },
    {
      title: 'No Training Time',
      description: 'Get started immediately with no learning curve',
      icon: ZapOff,
      highlight: true
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full opacity-70 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            The Future of Auditing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Human-Led vs. AI-Powered Auditing
          </h2>
          <p className="text-xl text-gray-600">
            See how AuditourAI transforms traditional auditing with intelligent automation, 
            delivering unprecedented speed, accuracy, and efficiency.
          </p>
        </div>

        {/* Main Comparison Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-50 rounded-xl text-red-600">
                <Clock3 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Traditional Auditing</h3>
            </div>
            <ul className="space-y-5">
              {[
                'Manual data entry and verification',
                'Prone to human error and inconsistency',
                'Limited by working hours and capacity',
                'High operational costs',
                'Lengthy audit cycles',
                'Difficulty scaling with business growth'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">AuditourAI Solution</h3>
              </div>
              <ul className="space-y-5">
                {[
                  'Automated data extraction and analysis',
                  'Consistent, error-free processing',
                  '24/7 operation with instant scaling',
                  'Reduced operational costs',
                  'Dramatically faster audit cycles',
                  'Easily scales with your business'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-white/20 transition-all duration-300 group">
                  <span>See how it works</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <ComparisonCard key={index} index={index} {...metric} />
          ))}
        </div>

        {/* Additional Benefits as Icons */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {additionalBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.5,
                  delay: index * 0.1
                } 
              }}
              viewport={{ once: true }}
              className="p-4 text-center"
            >
              <div className="bg-blue-50 w-14 h-14 mx-auto rounded-xl flex items-center justify-center text-blue-600 mb-3">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full -ml-32 -mb-32"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Audit Process?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join forward-thinking firms already experiencing the AuditourAI advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                Book a Demo
              </button>
              <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300">
                See Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
