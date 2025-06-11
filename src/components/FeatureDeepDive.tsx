
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const FeatureDeepDive = () => {
  const [extractionProgress, setExtractionProgress] = useState(0);
  const [llmProcessing, setLLMProcessing] = useState(false);

  const features = [
    {
      id: 'extraction',
      title: 'Agentic Document Extraction',
      icon: '📄',
      color: 'bg-blue-500',
      description: 'AI-powered document processing with intelligent field recognition',
      demo: {
        input: 'Multiple file formats (PDF, Excel, Images, Scanned docs)',
        process: ['OCR Scanning', 'Field Mapping', 'Data Validation', 'Confidence Scoring'],
        output: 'Structured JSON with 99.2% accuracy',
        metrics: {
          speed: '2.3s per document',
          accuracy: '99.2%',
          fields: '847 extracted'
        }
      }
    },
    {
      id: 'llm',
      title: 'Structured LLM Integration',
      icon: '🧠',
      color: 'bg-purple-500',
      description: 'Multiple LLM models working in parallel for intelligent data processing',
      demo: {
        input: 'Unstructured text and narrative data',
        process: ['Tokenization', 'Context Analysis', 'Parallel Processing', 'Structured Output'],
        output: 'Standardized audit findings and recommendations',
        metrics: {
          models: 'GPT-4, Claude, Gemini',
          processing: '15 insights/min',
          accuracy: '97.8%'
        }
      }
    },
    {
      id: 'canvas',
      title: 'Canvas Report Editor',
      icon: '📊',
      color: 'bg-orange-500',
      description: 'Collaborative report building with real-time editing and AI assistance',
      demo: {
        input: 'Audit data and team collaboration',
        process: ['Template Selection', 'AI Writing', 'Real-time Collaboration', 'Export'],
        output: 'Professional audit reports in multiple formats',
        metrics: {
          collaboration: 'Real-time',
          templates: '50+ industry-specific',
          export: 'PDF, Word, Excel, HTML'
        }
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-deep-slate text-white px-6 py-2 text-lg">
            Next-Gen Audit Intelligence
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Deep Dive Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the cutting-edge AI capabilities that set ThynkSort apart from traditional audit tools
          </p>
        </div>

        <Tabs defaultValue="extraction" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 h-16">
            {features.map((feature) => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className="flex items-center gap-3 text-lg font-semibold py-4"
              >
                <span className="text-2xl">{feature.icon}</span>
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id}>
              <Card className="overflow-hidden border-0 shadow-2xl">
                <CardHeader className={`${feature.color} text-white p-8`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold">{feature.title}</CardTitle>
                      <p className="text-xl opacity-90">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-12">
                    
                    {/* Interactive Demo */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Interactive Demo</h3>
                      
                      {/* Demo Visualization */}
                      <div className="bg-gray-900 rounded-lg p-6 text-white mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full" />
                          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                          <div className="w-3 h-3 bg-green-500 rounded-full" />
                          <span className="text-sm text-gray-400 ml-2">Live Demo Environment</span>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <div className="text-green-400 text-sm mb-2">INPUT:</div>
                            <div className="bg-gray-800 p-4 rounded font-mono text-sm scanning-line">
                              {feature.demo.input}
                            </div>
                          </div>

                          <div>
                            <div className="text-blue-400 text-sm mb-2">PROCESSING PIPELINE:</div>
                            <div className="space-y-3">
                              {feature.demo.process.map((step, index) => (
                                <div key={index} className="flex items-center gap-3">
                                  <div className={`w-3 h-3 ${feature.color} rounded-full animate-pulse-glow`}
                                       style={{ animationDelay: `${index * 0.3}s` }} />
                                  <span className="text-sm text-gray-300">{step}</span>
                                  <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent" />
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="text-purple-400 text-sm mb-2">OUTPUT:</div>
                            <div className="bg-gray-800 p-4 rounded font-mono text-sm text-green-300">
                              ✓ {feature.demo.output}
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button className={`${feature.color} text-white w-full hover:opacity-90`}>
                        Try Interactive Demo
                      </Button>
                    </div>

                    {/* Performance Metrics & Details */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
                      
                      <div className="grid grid-cols-1 gap-4 mb-8">
                        {Object.entries(feature.demo.metrics).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                            <span className="font-semibold text-gray-700 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <span className={`font-bold text-lg ${feature.color.replace('bg-', 'text-')}`}>
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Feature-specific Visualization */}
                      {feature.id === 'extraction' && (
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                          <h4 className="font-bold text-gray-900 mb-4">Document Processing Flow</h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-6 bg-red-200 rounded border-2 border-red-400" />
                              <span className="text-sm">PDF Documents</span>
                              <div className="flex-1 h-px bg-gray-300" />
                              <span className="text-xs text-gray-500">OCR + AI</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-6 bg-green-200 rounded border-2 border-green-400" />
                              <span className="text-sm">Excel Sheets</span>
                              <div className="flex-1 h-px bg-gray-300" />
                              <span className="text-xs text-gray-500">Direct Parse</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-6 bg-yellow-200 rounded border-2 border-yellow-400" />
                              <span className="text-sm">Scanned Images</span>
                              <div className="flex-1 h-px bg-gray-300" />
                              <span className="text-xs text-gray-500">Advanced OCR</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {feature.id === 'llm' && (
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                          <h4 className="font-bold text-gray-900 mb-4">LLM Model Orchestra</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {['GPT-4', 'Claude', 'Gemini', 'Custom'].map((model) => (
                              <div key={model} className="bg-white rounded p-3 text-center border border-purple-200">
                                <div className="w-full h-2 bg-purple-200 rounded mb-2">
                                  <div className="h-full bg-purple-500 rounded animate-pulse" style={{ width: '85%' }} />
                                </div>
                                <span className="text-sm font-semibold">{model}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {feature.id === 'canvas' && (
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                          <h4 className="font-bold text-gray-900 mb-4">Collaborative Features</h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                                <span className="text-sm">👥</span>
                              </div>
                              <span className="text-sm">Real-time multi-user editing</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                                <span className="text-sm">💬</span>
                              </div>
                              <span className="text-sm">Comment threads & @mentions</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                                <span className="text-sm">🤖</span>
                              </div>
                              <span className="text-sm">AI writing assistant</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeatureDeepDive;
