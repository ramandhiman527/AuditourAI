
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const ComparisonSection = () => {
  const [animatedValues, setAnimatedValues] = useState({
    humanDocs: 0,
    aiDocs: 0,
    humanAccuracy: 0,
    aiAccuracy: 0,
    humanTime: 0,
    aiTime: 0,
    humanReportTime: 0,
    aiReportTime: 0
  });

  const targetValues = {
    humanDocs: 20,
    aiDocs: 200,
    humanAccuracy: 94,
    aiAccuracy: 99.2,
    humanTime: 8,
    aiTime: 0.75,
    humanReportTime: 4,
    aiReportTime: 0.25
  };

  useEffect(() => {
    const animateValues = () => {
      Object.keys(targetValues).forEach(key => {
        const target = targetValues[key];
        const increment = target / 100;
        
        const timer = setInterval(() => {
          setAnimatedValues(prev => {
            if (prev[key] >= target) {
              clearInterval(timer);
              return prev;
            }
            return {
              ...prev,
              [key]: Math.min(prev[key] + increment, target)
            };
          });
        }, 20);
      });
    };

    const timer = setTimeout(animateValues, 500);
    return () => clearTimeout(timer);
  }, []);

  const comparisons = [
    {
      metric: 'Document Processing',
      unit: 'docs/hour',
      human: animatedValues.humanDocs,
      ai: animatedValues.aiDocs,
      icon: '📄',
      improvement: '10x faster'
    },
    {
      metric: 'Accuracy Rate',
      unit: '%',
      human: animatedValues.humanAccuracy,
      ai: animatedValues.aiAccuracy,
      icon: '🎯',
      improvement: '5.5% better'
    },
    {
      metric: 'Workflow Completion',
      unit: 'hours',
      human: animatedValues.humanTime,
      ai: animatedValues.aiTime,
      icon: '⚡',
      improvement: '11x faster'
    },
    {
      metric: 'Report Generation',
      unit: 'hours',
      human: animatedValues.humanReportTime,
      ai: animatedValues.aiReportTime,
      icon: '📊',
      improvement: '16x faster'
    }
  ];

  const additionalMetrics = [
    { metric: 'Consistency', human: 'Variable', ai: '100% Standardized', color: 'bg-green-500' },
    { metric: 'Availability', human: '8 hours/day', ai: '24/7 Operation', color: 'bg-blue-500' },
    { metric: 'Scaling', human: 'Linear with hiring', ai: 'Instant scale-up', color: 'bg-purple-500' },
    { metric: 'Learning', human: 'Experience-based', ai: 'Continuous ML improvement', color: 'bg-orange-500' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-deep-slate text-white px-6 py-2 text-lg">
            Human vs. AI Performance
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            AI Agent Comparison
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI agents outperform traditional manual processes across key audit metrics
          </p>
        </div>

        {/* Main Comparison Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {comparisons.map((comparison, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover-lift">
              <CardHeader className="bg-gradient-to-br from-deep-slate to-muted-violet text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{comparison.icon}</span>
                  <CardTitle className="text-lg font-bold">{comparison.metric}</CardTitle>
                </div>
                <Badge className="bg-white/20 text-white border-white/30 w-fit">
                  {comparison.improvement}
                </Badge>
              </CardHeader>
              
              <CardContent className="p-6">
                {/* Human Performance */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-600">Human Auditor</span>
                    <span className="text-lg font-bold text-gray-800">
                      {Math.round(comparison.human * 10) / 10} {comparison.unit}
                    </span>
                  </div>
                  <Progress 
                    value={comparison.metric === 'Accuracy Rate' ? comparison.human : (comparison.human / Math.max(comparison.human, comparison.ai)) * 100} 
                    className="h-2 bg-gray-200"
                  />
                </div>

                {/* AI Performance */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-deep-slate">AI Agent</span>
                    <span className="text-lg font-bold text-deep-slate">
                      {Math.round(comparison.ai * 10) / 10} {comparison.unit}
                    </span>
                  </div>
                  <Progress 
                    value={comparison.metric === 'Accuracy Rate' ? comparison.ai : 100} 
                    className="h-2"
                  />
                </div>

                {/* Performance Indicator */}
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    <span>↗</span>
                    {comparison.improvement}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Additional Performance Advantages</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalMetrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-4 h-4 ${metric.color} rounded-full flex-shrink-0`} />
                    <h4 className="text-lg font-bold text-gray-900">{metric.metric}</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Human</div>
                      <div className="font-semibold text-gray-800">{metric.human}</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-deep-slate to-muted-violet text-white rounded-lg">
                      <div className="text-sm text-white/80 mb-1">AI Agent</div>
                      <div className="font-semibold">{metric.ai}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ROI Calculator Preview */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-pale-orchid to-white">
            <CardHeader className="p-8">
              <CardTitle className="text-3xl font-bold text-deep-slate mb-4">
                Potential Cost Savings Calculator
              </CardTitle>
              <p className="text-xl text-gray-700">
                See how much your firm could save with AI automation
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                  <div className="text-gray-700">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
                  <div className="text-gray-700">Productivity Increase</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
                  <div className="text-gray-700">Time Savings</div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-600 mb-4">
                  Based on average audit firm processing 1,000 documents monthly
                </p>
                <div className="text-2xl font-bold text-deep-slate">
                  Estimated Annual Savings: ₹25,00,000+
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
