
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TechnicalArchitecture = () => {
  const components = [
    {
      name: 'Agentic Orchestration Layer',
      description: 'Central brain coordinating all AI agents',
      icon: '🧠',
      color: 'bg-purple-500',
      details: ['Agent coordination', 'Task distribution', 'Load balancing', 'Error handling']
    },
    {
      name: 'Document Processing Pipeline',
      description: 'Multi-stage extraction and validation',
      icon: '📄',
      color: 'bg-blue-500',
      details: ['OCR processing', 'Field extraction', 'Data validation', 'Format conversion']
    },
    {
      name: 'LLM Integration Hub',
      description: 'Model routing and prompt optimization',
      icon: '🤖',
      color: 'bg-green-500',
      details: ['Model selection', 'Prompt engineering', 'Response optimization', 'Fallback handling']
    },
    {
      name: 'Workflow Automation Engine',
      description: 'Business logic and decision trees',
      icon: '⚙️',
      color: 'bg-yellow-500',
      details: ['Decision trees', 'Conditional routing', 'Parallel processing', 'Event handling']
    },
    {
      name: 'Canvas Collaboration Platform',
      description: 'Real-time editing and version control',
      icon: '🎨',
      color: 'bg-orange-500',
      details: ['Real-time sync', 'Version control', 'Conflict resolution', 'Export handling']
    },
    {
      name: 'Security & Compliance Layer',
      description: 'Encryption, audit trails, access control',
      icon: '🔒',
      color: 'bg-red-500',
      details: ['End-to-end encryption', 'Audit logging', 'Access control', 'Compliance monitoring']
    }
  ];

  const integrations = [
    { name: 'Tally', type: 'Accounting', status: 'live' },
    { name: 'QuickBooks', type: 'Accounting', status: 'live' },
    { name: 'Zoho Books', type: 'Accounting', status: 'live' },
    { name: 'SAP', type: 'ERP', status: 'beta' },
    { name: 'GST Portal', type: 'Government', status: 'live' },
    { name: 'Banking APIs', type: 'Financial', status: 'live' },
    { name: 'OpenAI', type: 'LLM', status: 'live' },
    { name: 'Anthropic', type: 'LLM', status: 'live' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 px-6 py-2 text-lg">
            Built for Scale
          </Badge>
          <h2 className="text-5xl font-bold mb-6">
            Technical Architecture
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Enterprise-grade infrastructure designed for high-performance AI processing and seamless integration
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">System Architecture</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((component, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover-lift">
                <CardHeader className={`${component.color} p-6`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{component.icon}</span>
                    </div>
                    <CardTitle className="text-white text-lg font-bold">
                      {component.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-white">
                  <p className="text-white/90 mb-4">{component.description}</p>
                  <div className="space-y-2">
                    {component.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-white/60 rounded-full" />
                        <span className="text-white/80">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white/5 backdrop-blur rounded-lg border border-white/10">
            <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-white/80">Uptime SLA</div>
          </div>
          <div className="text-center p-8 bg-white/5 backdrop-blur rounded-lg border border-white/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">10M+</div>
            <div className="text-white/80">Documents Processed</div>
          </div>
          <div className="text-center p-8 bg-white/5 backdrop-blur rounded-lg border border-white/10">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-white/80">AI Agent Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArchitecture;
