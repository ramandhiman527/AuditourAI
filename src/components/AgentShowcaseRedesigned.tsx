import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Zap, Users, Cpu } from 'lucide-react';

const AGENTS = [
  {
    id: 'taxaudit',
    name: 'Tax Audit Assistant',
    icon: <Zap className="w-7 h-7 text-blue-500" />,
    avatar: '🧾',
    color: 'from-blue-500 to-cyan-400',
    summary: 'Checks tax forms, flags errors, and preps reports for you.',
    helps: 'For finance teams, accountants, and tax professionals.',
    saves: 'Catches mistakes, saves hours of manual review.',
    stats: [
      { label: 'Accuracy', value: '99.2%', color: 'text-green-600' },
      { label: 'Avg. Response', value: '2.3s', color: 'text-blue-600' },
      { label: 'Docs/Hour', value: '200+', color: 'text-purple-600' },
    ],
    details: [
      'Reads PDFs, Excel, and scanned images',
      'Auto-maps fields, flags missing info',
      'Exports clean summaries for review',
    ],
    tech: [
      'Secure cloud processing',
      'Audit trail for every action',
      'Continuous ML improvement',
    ],
  },
  {
    id: 'finreview',
    name: 'Financial Review Bot',
    icon: <Users className="w-7 h-7 text-pink-500" />,
    avatar: '💹',
    color: 'from-pink-500 to-purple-400',
    summary: 'Scans ledgers, finds outliers, and preps clear summaries.',
    helps: 'For auditors, controllers, and CFOs.',
    saves: 'Spots issues, automates checks, and speeds up closing.',
    stats: [
      { label: 'Accuracy', value: '98.7%', color: 'text-green-600' },
      { label: 'Avg. Response', value: '1.9s', color: 'text-blue-600' },
      { label: 'Accounts/Hour', value: '500+', color: 'text-purple-600' },
    ],
    details: [
      'Analyzes GL, AP, AR, and more',
      'Flags duplicate/irregular entries',
      'Delivers quick, visual summaries',
    ],
    tech: [
      'Bank-grade encryption',
      'Role-based access',
      'Audit logs for compliance',
    ],
  },
  {
    id: 'compliance',
    name: 'Compliance Monitor',
    icon: <Cpu className="w-7 h-7 text-yellow-500" />,
    avatar: '🛡️',
    color: 'from-yellow-400 to-green-400',
    summary: 'Watches for policy gaps, alerts you to risks, and tracks fixes.',
    helps: 'For compliance teams, risk officers, and managers.',
    saves: 'Reduces manual checks, keeps you audit-ready.',
    stats: [
      { label: 'Accuracy', value: '99.0%', color: 'text-green-600' },
      { label: 'Alerts/Day', value: '120+', color: 'text-blue-600' },
      { label: 'Setup Time', value: '5 min', color: 'text-purple-600' },
    ],
    details: [
      'Monitors rules and deadlines',
      'Flags non-compliance instantly',
      'Keeps a history of all actions',
    ],
    tech: [
      'Real-time dashboards',
      'Custom rule builder',
      'Automated reporting',
    ],
  },
];

const comparison = [
  {
    title: 'Agentic AI',
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    bullets: [
      'Instant, 24/7 processing',
      'Low, predictable cost',
      '99%+ accuracy with audit trail',
    ],
  },
  {
    title: 'Manual Process',
    icon: <Users className="w-8 h-8 text-gray-400" />,
    bullets: [
      'Slow, error-prone',
      'High labor cost',
      'Inconsistent results',
    ],
  },
  {
    title: 'Traditional RPA',
    icon: <Cpu className="w-8 h-8 text-yellow-500" />,
    bullets: [
      'Needs constant updating',
      'Hidden maintenance costs',
      'Limited flexibility',
    ],
  },
];

export default function AgentShowcaseRedesigned() {
  const [active, setActive] = useState(0);
  const [showMore, setShowMore] = useState([false, false, false]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white font-inter">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-400 text-white font-semibold shadow">
            Your AI Audit Team
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-400 bg-clip-text text-transparent drop-shadow-xl mb-4">
            Agentic Capabilities
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Meet your always-on, always-accurate digital audit assistants. No jargon—just results.
          </p>
        </div>

        {/* Agent Tabs */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
          {AGENTS.map((agent, idx) => (
            <button
              key={agent.id}
              onClick={() => setActive(idx)}
              className={`flex-1 flex flex-col items-center px-6 py-4 rounded-2xl transition-all duration-300 shadow-md bg-gradient-to-br ${agent.color} bg-opacity-10 border-2 ${active === idx ? 'border-blue-500 scale-105 shadow-xl' : 'border-transparent'} hover:scale-105`}
              style={{ fontFamily: 'Frank, Inter, Arial, sans-serif' }}
            >
              <span className="text-3xl mb-2">{agent.avatar}</span>
              <span className="font-bold text-lg mb-1 text-gray-900 drop-shadow">{agent.name}</span>
              <span className="text-sm text-gray-600 text-center">{agent.summary}</span>
            </button>
          ))}
        </div>

        {/* Agent Details */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={AGENTS[active].id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border border-blue-100"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                <span className="text-4xl mb-2">{AGENTS[active].avatar}</span>
                <span className="text-lg font-bold text-gray-900">{AGENTS[active].name}</span>
                <div className="mt-3 flex gap-2">
                  {AGENTS[active].stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.08 }}
                      className={`rounded-xl px-3 py-2 bg-gradient-to-br from-gray-100 to-gray-50 shadow text-center ${stat.color} font-semibold text-sm min-w-[80px]`}
                    >
                      <div>{stat.value}</div>
                      <div className="text-gray-500 text-xs font-normal">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-base text-gray-800"><b>Who it helps:</b> {AGENTS[active].helps}</div>
                <div className="mb-2 text-base text-gray-800"><b>How it saves time:</b> {AGENTS[active].saves}</div>
                <ul className="list-disc list-inside text-gray-700 text-base mb-2">
                  {AGENTS[active].details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
                <button
                  className="flex items-center gap-2 text-blue-600 mt-2 hover:underline focus:outline-none"
                  onClick={() => setShowMore(m => m.map((v, idx) => idx === active ? !v : v))}
                >
                  {showMore[active] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  {showMore[active] ? 'Hide Technical Details' : 'View More'}
                </button>
                <AnimatePresence>
                  {showMore[active] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-2"
                    >
                      <ul className="list-disc list-inside text-gray-500 text-sm">
                        {AGENTS[active].tech.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comparison Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
          {comparison.map((col, idx) => (
            <div key={col.title} className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100">
              <div className="flex justify-center mb-3">{col.icon}</div>
              <div className="font-bold text-lg mb-2 text-gray-900">{col.title}</div>
              <ul className="text-gray-700 text-base space-y-2">
                {col.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-300"></span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
