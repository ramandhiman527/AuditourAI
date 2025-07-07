import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Plug, BarChart } from 'lucide-react';

const CARDS = [
  {
    icon: <Lock className="w-10 h-10 text-blue-600" />,
    title: 'Bank-Grade Security',
    description: 'Your clients’ data stays protected with AES-256 encryption, audit trails, and GDPR/ISO-ready compliance.',
    relevance: '“Security standards you\'d expect from top-tier banks—no shortcuts.”',
    gradient: 'from-blue-50 via-white to-white',
  },
  {
    icon: <Plug className="w-10 h-10 text-green-600" />,
    title: 'Integrates with Your Stack',
    description: 'Works seamlessly with Tally, QuickBooks, and legacy ERP tools—no rip & replace required.',
    relevance: '“Plug us in. Your existing workflows stay intact.”',
    gradient: 'from-green-50 via-white to-white',
  },
  {
    icon: <BarChart className="w-10 h-10 text-purple-600" />,
    title: 'Scales with Your Growth',
    description: 'AuditourAI handles over 1 million documents/month—built for firms of every size, without slowing down.',
    relevance: '“From boutique firms to enterprise volumes—zero performance drop.”',
    gradient: 'from-purple-50 via-white to-white',
  },
];

export default function TechnicalArchitectureRedesigned() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white via-[#f8f9fa] to-[#f0f4f8]"
      style={{ fontFamily: 'Frank, Inter, Arial, sans-serif' }}
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent drop-shadow-lg mb-4">
            Built for Scale & Trust
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Our infrastructure is designed for enterprise-grade performance, security, and seamless integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 12px 32px 0 rgba(100, 100, 150, 0.12)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`relative bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100`}
            >
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${card.gradient} opacity-60 rounded-3xl -z-10`}></div>
              <div className="flex flex-col items-start gap-4">
                <motion.div whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }} className="mb-2">
                  {card.icon}
                </motion.div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-1 drop-shadow-sm">{card.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed mb-3">{card.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-200 w-full">
                  <p className="text-base text-gray-500 italic">{card.relevance}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
