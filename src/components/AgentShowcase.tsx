
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const AgentShowcase = () => {
  const [activeAgent, setActiveAgent] = useState(0);

  const agents = [
    {
      id: 'docmaster',
      name: 'DocMaster Agent',
      icon: '📄',
      color: 'bg-blue-500',
      tagline: 'Agentic Document Extraction',
      description: 'Autonomous document processing with X-ray vision for any file format',
      features: [
        'PDF, Excel, Images, Scanned docs processing',
        'Smart field mapping & validation',
        'GSTIN, PAN, and regulatory number recognition',
        '99.2% accuracy with confidence scoring'
      ],
      demo: {
        input: 'Invoice_Q3_2024.pdf',
        output: '47 fields extracted in 2.3s',
        process: ['OCR Scanning', 'Field Mapping', 'Data Validation', 'JSON Export']
      }
    },
    {
      id: 'flowgenius',
      name: 'FlowGenius Agent',
      icon: '🔄',
      color: 'bg-green-500',
      tagline: 'Agentic Automation Workflows',
      description: 'Orchestrates complex audit workflows with decision intelligence',
      features: [
        'Conditional routing & parallel processing',
        'Multi-step execution with error handling',
        'Business logic automation',
        'Real-time workflow monitoring'
      ],
      demo: {
        input: 'Audit Workflow Template',
        output: '12 parallel processes completed',
        process: ['Trigger Event', 'Decision Tree', 'Parallel Execution', 'Completion']
      }
    },
    {
      id: 'structurebot',
      name: 'StructureBot Agent',
      icon: '🧠',
      color: 'bg-purple-500',
      tagline: 'LLM-Powered Data Processing',
      description: 'Transforms unstructured data into actionable audit insights',
      features: [
        'GPT-4, Claude, Gemini integration',
        'Custom audit-trained models',
        'Contextual understanding & analysis',
        'Structured output generation'
      ],
      demo: {
        input: 'Unstructured email thread',
        output: 'Standardized audit findings',
        process: ['Text Analysis', 'Context Understanding', 'LLM Processing', 'Structured Output']
      }
    },
    {
      id: 'reportcraft',
      name: 'ReportCraft Agent',
      icon: '📊',
      color: 'bg-orange-500',
      tagline: 'AI Report Generation & Canvas Editing',
      description: 'Creates professional audit reports with collaborative editing',
      features: [
        'Real-time collaborative editing',
        'AI-powered writing assistant',
        'Industry-specific templates',
        'Multi-format export capabilities'
      ],
      demo: {
        input: 'Audit data & observations',
        output: 'Professional audit report',
        process: ['Template Selection', 'AI Writing', 'Canvas Editing', 'Final Export']
      }
    }
  ];

  const currentAgent = agents[activeAgent];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-deep-slate text-white px-6 py-2 text-lg">
            Your AI Workforce
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Agentic Capabilities Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the four autonomous AI agents that revolutionize every aspect of your audit process
          </p>
        </div>

        {/* Agent Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {agents.map((agent, index) => (
            <Button
              key={agent.id}
              onClick={() => setActiveAgent(index)}
              variant={activeAgent === index ? "default" : "outline"}
              className={`flex items-center gap-3 px-6 py-4 text-lg font-semibold transition-all duration-300 hover-lift ${
                activeAgent === index ? agent.color + ' text-white' : 'hover:bg-gray-100'
              }`}
            >
              <span className="text-2xl">{agent.icon}</span>
              {agent.name}
            </Button>
          ))}
        </div>

        {/* Active Agent Display */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-2xl hover-lift bg-gradient-to-br from-white to-gray-50">
            <CardHeader className={`${currentAgent.color} text-white p-8`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">{currentAgent.icon}</span>
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold">{currentAgent.name}</CardTitle>
                  <p className="text-xl opacity-90">{currentAgent.tagline}</p>
                </div>
              </div>
              <p className="text-lg opacity-95">{currentAgent.description}</p>
            </CardHeader>

            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Features */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Capabilities</h3>
                  <div className="space-y-4">
                    {currentAgent.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${currentAgent.color} rounded-full mt-2 flex-shrink-0`} />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Demo Simulation */}
                <div className="bg-gray-900 rounded-lg p-6 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-400 ml-2">Live Demo</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-green-400 text-sm mb-1">INPUT:</div>
                      <div className="bg-gray-800 p-3 rounded font-mono text-sm scanning-line">
                        {currentAgent.demo.input}
                      </div>
                    </div>

                    <div>
                      <div className="text-blue-400 text-sm mb-1">PROCESSING:</div>
                      <div className="space-y-2">
                        {currentAgent.demo.process.map((step, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className={`w-2 h-2 ${currentAgent.color} rounded-full animate-pulse-glow`} 
                                 style={{ animationDelay: `${index * 0.3}s` }} />
                            <span className="text-sm text-gray-300">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-purple-400 text-sm mb-1">OUTPUT:</div>
                      <div className="bg-gray-800 p-3 rounded font-mono text-sm text-green-300">
                        ✓ {currentAgent.demo.output}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8 pt-8 border-t">
                <Button className={`${currentAgent.color} text-white hover:opacity-90 px-6 py-3`}>
                  Try {currentAgent.name} Demo
                </Button>
                <Button variant="outline" className="px-6 py-3">
                  View Technical Specs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Agent Interaction Visualization */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Agents Working Together</h3>
          <div className="flex justify-center items-center space-x-8">
            {agents.map((agent, index) => (
              <div key={agent.id} className="relative">
                <div className={`w-20 h-20 ${agent.color} rounded-full flex items-center justify-center animate-float`}
                     style={{ animationDelay: `${index * 0.5}s` }}>
                  <span className="text-2xl">{agent.icon}</span>
                </div>
                {index < agents.length - 1 && (
                  <div className="absolute top-1/2 left-full w-8 h-0.5 workflow-line" />
                )}
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6 text-lg">
            Seamless collaboration between AI agents for end-to-end audit automation
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgentShowcase;
