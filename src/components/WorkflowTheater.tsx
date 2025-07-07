
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// Ring Progress Indicator
const RingProgress = ({ percent, color }: { percent: number; color: string }) => {
  const radius = 48;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;
  return (
    <svg width={radius * 2} height={radius * 2} className="block">
      <circle
        stroke="#e0e7ef"
        fill="none"
        strokeWidth={stroke}
        cx={radius}
        cy={radius}
        r={normalizedRadius}
      />
      <circle
        stroke={color}
        fill="none"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        className="transition-all duration-700"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        className="font-black text-2xl fill-teal-600"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {percent}%
      </text>
    </svg>
  );
};

// Animated Checklist
const AnimatedChecklist = ({ steps, progress }: { steps: string[]; progress: number }) => {
  const completed = Math.floor((progress / 100) * steps.length);
  return (
    <ul className="space-y-3 mt-2">
      {steps.map((step, i) => (
        <li key={i} className={`flex items-center text-lg font-medium rounded-xl px-4 py-2 transition-all duration-300 ${i < completed ? 'bg-teal-100 text-teal-700' : 'bg-white/70 text-slate-500'}`}
            style={{ fontFamily: 'Inter, sans-serif' }}>
          <span className={`mr-3 text-2xl transition-all ${i < completed ? 'text-teal-500' : 'text-slate-300'}`}>{i < completed ? '✔' : '○'}</span>
          {step}
        </li>
      ))}
    </ul>
  );
};

// Simple Sparkline
const Sparkline = ({ data, color }: { data: number[]; color: string }) => {
  const max = Math.max(...data, 1);
  const points = data
    .map((d, i) => `${(i / (data.length - 1)) * 60},${20 - (d / max) * 18}`)
    .join(' ');
  return (
    <svg width="60" height="20">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="3"
        points={points}
      />
    </svg>
  );
};

// Live Ticker
const AgentTicker = ({ activity }: { activity: { agent: string; color: string; msg: string }[] }) => (
  <div className="flex gap-6 py-3 px-4 rounded-xl bg-white/70 mt-8 shadow-inner overflow-x-auto animate-pulse">
    {activity.map((a, i) => (
      <span
        key={i}
        className={`font-bold text-lg px-3 py-1 rounded-lg`}
        style={{ color: a.color, fontFamily: 'Inter, sans-serif', background: a.color + '22' }}
      >
        {a.agent}: <span className="font-medium text-slate-800">{a.msg}</span>
      </span>
    ))}
  </div>
);

const WorkflowTheater = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [docsProcessed, setDocsProcessed] = useState(557);
  const [agentsOnline, setAgentsOnline] = useState(3);
  const [docsTrend, setDocsTrend] = useState<number[]>([530,535,540,545,550,553,557]);
  const [agentsTrend, setAgentsTrend] = useState<number[]>([2,3,3,2,3,3,3]);
  const [ticker, setTicker] = useState([
    { agent: 'DocMaster', color: '#0ea5e9', msg: 'Processed PDF Invoice' },
    { agent: 'FlowGenius', color: '#14b8a6', msg: 'Decision: Route to StructureBot' },
    { agent: 'StructureBot', color: '#6366f1', msg: 'LLM Analysis Complete' },
    { agent: 'ReportCraft', color: '#f59e42', msg: 'Report Exported' },
  ]);


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
          setDocsProcessed(prevDocs => {
            const next = prevDocs + Math.floor(Math.random() * 5) + 3;
            setDocsTrend(t => [...t.slice(-6), next]);
            return next;
          });
          setAgentsOnline(prev => {
            const next = Math.max(2, Math.min(3, prev + (Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0)));
            setAgentsTrend(t => [...t.slice(-6), next]);
            return next;
          });
          setTicker(t => [
            ...t.slice(1),
            {
              agent: ['DocMaster', 'FlowGenius', 'StructureBot', 'ReportCraft'][Math.floor(Math.random() * 4)],
              color: ['#0ea5e9', '#14b8a6', '#6366f1', '#f59e42'][Math.floor(Math.random() * 4)],
              msg: [
                'Processed PDF Invoice',
                'Decision: Route to StructureBot',
                'LLM Analysis Complete',
                'Report Exported',
                'Field Extraction',
                'OCR Complete',
                'Template Selected',
              ][Math.floor(Math.random() * 7)]
            }
          ]);
          return 0;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [stages.length]);

  const currentStageData = stages[currentStage];

  // Checklist steps for each stage
  const checklist = [
    ['PDF Invoices', 'Excel Sheets', 'Scanned Images', 'Bank Statements'],
    ['OCR Processing', 'Field Extraction', 'Data Validation', 'LLM Analysis'],
    ['Template Selection', 'AI Writing', 'Canvas Editing', 'Final Export'],
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-200 via-indigo-100 to-white font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-indigo-50 text-indigo-700 border-indigo-200 px-6 py-2 text-lg shadow-lg">
            AI Audit Command Center
          </Badge>
          <h2 className="text-5xl font-black text-indigo-900 mb-4 tracking-tight" style={{ letterSpacing: '-.03em' }}>
            AI Audit Command Center
          </h2>
          <p className="text-xl text-indigo-600/90 max-w-2xl mx-auto">
            Monitor and orchestrate every step of your AI-powered audit workflow in real time.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="flex space-x-4 bg-white rounded-2xl p-2 shadow-xl border-4 border-indigo-100">
            {stages.map((stage, index) => (
              <button
                key={index}
                onClick={() => setCurrentStage(index)}
                className={`px-7 py-3 rounded-xl font-bold text-lg transition-all duration-300 outline-none relative ${
                  currentStage === index
                    ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-[0_0_16px_2px_rgba(56,189,248,0.3)] border-4 border-white ring-2 ring-teal-400'
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border-4 border-transparent'
                }`}
                style={currentStage === index ? { boxShadow: '0 0 16px 2px #67e8f9cc, 0 2px 8px #6366f1' } : {}}
              >
                {stage.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Command Center Panel */}
        <div className="rounded-3xl bg-white/90 shadow-2xl p-8 flex flex-col gap-8 border-4 border-indigo-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Progress ring and checklist */}
            <div className="flex flex-col items-center justify-center gap-4">
              <RingProgress percent={progress} color={['#0ea5e9', '#14b8a6', '#f59e42'][currentStage]} />
              <AnimatedChecklist steps={checklist[currentStage]} progress={progress} />
            </div>

            {/* Metrics cards */}
            <div className="col-span-2 flex flex-col md:flex-row gap-8 items-center justify-center">
              {/* Docs Processed */}
              <div className="flex flex-col items-center bg-indigo-50 rounded-2xl p-6 min-w-[210px] shadow-lg border-2 border-indigo-100">
                <span className="text-5xl font-black text-teal-500 mb-1">{docsProcessed}</span>
                <span className="text-base font-semibold text-indigo-700">Docs Processed</span>
                <div className="mt-2"><Sparkline data={docsTrend} color="#0ea5e9" /></div>
              </div>
              {/* Agents Online */}
              <div className="flex flex-col items-center bg-indigo-50 rounded-2xl p-6 min-w-[210px] shadow-lg border-2 border-indigo-100">
                <span className="text-5xl font-black text-blue-500 mb-1">{agentsOnline}</span>
                <span className="text-base font-semibold text-indigo-700">Agents Online</span>
                <div className="mt-2"><Sparkline data={agentsTrend} color="#6366f1" /></div>
              </div>
            </div>
          </div>

          {/* Live ticker */}
          <AgentTicker activity={ticker} />
        </div>
      </div>
    </section>
  );
}

export default WorkflowTheater;
