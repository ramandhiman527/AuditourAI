import React from 'react';
import { motion } from 'framer-motion';

const founders = [
  {
    name: 'Raman Kumar',
    title: 'Data Scientist',
    funTitle: 'AI & Automation Expert',
    img: '/founders/raman.png',
    bio: 'Transforming complex data into intelligent solutions. Passionate about building AI that makes a real impact.',
    gradient: 'from-blue-500 to-purple-500',
    accent: 'bg-gradient-to-r from-blue-500 to-purple-500',
    emoji: '🧠',
  },
  {
    name: 'Mahima Singh',
    title: 'Chartered Accountant',
    funTitle: 'Finance & Strategy',
    img: '/founders/mahima.png',
    bio: 'Bridging financial expertise with technological innovation to create smarter audit solutions.',
    gradient: 'from-pink-500 to-rose-500',
    accent: 'bg-gradient-to-r from-pink-500 to-rose-500',
    emoji: '📊',
  },
];

export default function MeetTheFounders() {
  return (
    <section className="relative py-28 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-pink-100 to-transparent rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-black/5 text-gray-600 mb-4">
            The Visionaries
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Meet the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Founders</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Combining deep expertise in data science and finance to revolutionize the audit industry through AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative z-10 h-full bg-white/80 backdrop-blur-sm rounded-2xl p-0.5 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative h-full bg-white/95 rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="relative">
                    <div className={`absolute inset-0 ${f.accent} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                    <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-white shadow-lg">
                      {f.img ? (
                        <img
                          src={f.img}
                          alt={f.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-4xl">
                          {f.emoji}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600 mb-3">
                      {f.title}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{f.name}</h3>
                    <p className="text-gray-500 mb-4">{f.funTitle}</p>
                    <p className="text-gray-600 leading-relaxed">{f.bio}</p>
                    
                    <div className="mt-6 flex justify-center md:justify-start space-x-4">
                      <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.19 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`absolute -z-10 inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${f.accent} blur-3xl`}></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex items-center px-6 py-3.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm text-gray-600 text-sm font-medium hover:shadow-md transition-all">
            <span className="mr-3 text-lg">💡</span>
            Building the future of financial auditing, one algorithm at a time
          </div>
        </motion.div>
      </div>
    </section>
  );
}
