
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const WorkflowTheater = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [docsProcessed, setDocsProcessed] = useState(0);

  const stages = [
    {
      name: 'Document Ingestion',
      description: 'AI agents intercepting and categorizing incoming documents',
      agent: 'DocMaster',
      icon: '📄',
      color: 'bg-blue-500',
      files: ['PDF Invoices', 'Excel Sheets', 'Scanned Images', 'Bank Statements'],
      metrics: { invoices: 47, statements: 12, returns: 8 }
    },
    {
      name: 'Intelligent Processing',
      description: 'FlowGenius routing through decision trees while StructureBot analyzes',
      agent: 'FlowGenius + StructureBot',
      icon: '🔄🧠',
      color: 'bg-green-500',
      files: ['OCR Processing', 'Field Extraction', 'Data Validation', 'LLM Analysis'],
      metrics: { accuracy: 99.2, speed: 2.3, confidence: 97.8 }
    },
    {
      name: 'Report Assembly',
      description: 'ReportCraft generating professional audit reports with AI insights',
      agent: 'ReportCraft',
      icon: '📊',
      color: 'bg-orange-500',
      files: ['Template Selection', 'AI Writing', 'Canvas Editing', 'Final Export'],
      metrics: { reports: 15, pages: 247, findings: 156 }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentStage(prevStage => (prevStage + 1) % stages.length);
          setDocsProcessed(prevDocs => prevDocs + Math.floor(Math.random() * 5) + 3);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const currentStageData = stages[currentStage];

  return (
    <section className="py-20 bg-gradient-to-br from-deep-slate to-muted-violet">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 px-6 py-2 text-lg">
            Watch AI Work
          </Badge>
          <h2 className="text-5xl font-bold text-white mb-6">
            Agentic Workflow Theater
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Experience real-time AI automation as our agents collaborate to process audit workflows
          </p>
        </div>

        {/* Stage Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-white/10 backdrop-blur-lg rounded-lg p-2">
            {stages.map((stage, index) => (
              <button
                key={index}
                onClick={() => setCurrentStage(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  currentStage === index 
                    ? 'bg-white text-deep-slate' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {stage.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Theater Display */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white overflow-hidden">
            <CardHeader className={`${currentStageData.color} p-8`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{currentStageData.icon}</span>
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold">{currentStageData.name}</CardTitle>
                    <p className="text-lg opacity-90">{currentStageData.description}</p>
                  </div>
                </div>
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                  Agent: {currentStageData.agent}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Live Processing Visualization */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Live Processing</h3>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Processing Progress</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-3" />
                  </div>

                  {/* File Processing List */}
                  <div className="space-y-3">
                    {currentStageData.files.map((file, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                        <div className={`w-3 h-3 rounded-full ${
                          index <= Math.floor(progress / 25) ? 'bg-green-400 animate-pulse-glow' : 'bg-gray-500'
                        }`} />
                        <span className="flex-1">{file}</span>
                        {index <= Math.floor(progress / 25) && (
                          <Badge className="bg-green-500 text-white border-0 text-xs">
                            Complete
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real-time Metrics */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Real-time Metrics</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-green-400">{docsProcessed}</div>
                      <div className="text-sm opacity-75">Documents Processed</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-blue-400">{stages.length}</div>
                      <div className="text-sm opacity-75">Active Agents</div>
                    </div>
                  </div>

                  {/* Stage-specific Metrics */}
                  <div className="space-y-3">
                    {Object.entries(currentStageData.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="font-bold text-lg">
                          {typeof value === 'number' && value > 50 ? `${value}%` : value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Live Activity Feed */}
                  <div className="mt-6">
                    <h4 className="font-bold mb-3">Live Activity</h4>
                    <div className="space-y-2 text-sm max-h-40 overflow-y-auto">
                      <div className="flex items-center gap-2 opacity-75">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span>Agent {currentStageData.agent} processing batch #{docsProcessed + 1}</span>
                      </div>
                      <div className="flex items-center gap-2 opacity-60">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span>Data validation completed for invoice batch</span>
                      </div>
                      <div className="flex items-center gap-2 opacity-60">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span>LLM analysis generated 15 new insights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Workflow Flow Visualization */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">End-to-End Workflow</h3>
          <div className="flex justify-center items-center space-x-8 overflow-x-auto pb-4">
            {stages.map((stage, index) => (
              <div key={index} className="relative flex-shrink-0">
                <div className={`w-24 h-24 ${stage.color} rounded-full flex items-center justify-center ${
                  index === currentStage ? 'animate-pulse-glow' : 'opacity-70'
                } transition-all duration-500`}>
                  <span className="text-2xl">{stage.icon}</span>
                </div>
                <div className="text-center mt-3">
                  <div className="text-white font-semibold text-sm">{stage.name}</div>
                  <div className="text-white/70 text-xs">{stage.agent}</div>
                </div>
                {index < stages.length - 1 && (
                  <div className="absolute top-12 left-full w-8 h-0.5 workflow-line" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowTheater;
