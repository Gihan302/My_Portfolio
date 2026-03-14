import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../constants/index.js';

const Education = () => {
  return (
    <section className="c-space my-20 font-terminal" id="education">
      <p className="head-text text-cyber-green uppercase tracking-tighter">&gt; EDUCATION_HISTORY</p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-8 border border-cyber-green/20 bg-cyber-dark/60 backdrop-blur-md relative group hover:border-cyber-green/50 transition-all"
          >
            {/* Holographic effect corner */}
            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-gradient-to-br from-cyber-green/10 to-transparent rotate-45 transform translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <p className="text-cyber-blue text-xs font-bold uppercase tracking-[0.2em]">{item.duration}</p>
                <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              </div>

              <h3 className="text-white text-xl font-bold uppercase tracking-wider group-hover:text-cyber-green transition-colors">
                {item.title}
              </h3>
              
              <div className="space-y-2">
                <p className="text-cyber-green font-medium">&gt; {item.institution}</p>
                {item.major && (
                  <p className="text-white/70 text-sm">
                    <span className="text-cyber-blue/80">Major:</span> {item.major}
                  </p>
                )}
                {item.minor && (
                  <p className="text-white/70 text-sm">
                    <span className="text-cyber-blue/80">Minor:</span> {item.minor}
                  </p>
                )}
                {item.details && (
                  <p className="text-white/70 text-sm italic border-l-2 border-cyber-blue/30 pl-4 py-1">
                    {item.details}
                  </p>
                )}
                <p className="text-cyber-green/50 text-[10px] uppercase tracking-widest mt-4">Location: {item.location || 'Sri Lanka'}</p>
              </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-green/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
