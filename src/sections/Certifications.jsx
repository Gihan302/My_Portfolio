import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, FileCode, ExternalLink } from 'lucide-react';
import { certifications } from '../constants/index.js';

const Certifications = () => {
  return (
    <section className="c-space my-20 font-terminal" id="certifications">
      <p className="head-text text-cyber-green uppercase tracking-tighter">&gt; ACCREDITATIONS</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 mt-12">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 border border-cyber-green/20 bg-cyber-dark/60 backdrop-blur-md hover:border-cyber-green/50 transition-all group relative overflow-hidden"
          >
            {/* Background Holographic Glow */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyber-green/5 blur-3xl rounded-full group-hover:bg-cyber-green/10 transition-all" />

            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex justify-between items-start">
                <div className="p-3 border border-cyber-green/30 rounded bg-cyber-green/5 group-hover:bg-cyber-green/10 group-hover:scale-110 transition-all">
                  <ShieldCheck className="text-cyber-green" size={24} />
                </div>
                <div className="text-right">
                    <p className="text-cyber-blue/60 text-[10px] uppercase font-bold tracking-widest">{cert.date}</p>
                    <p className="text-cyber-green/40 text-[8px] uppercase">{cert.issuer}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-bold uppercase tracking-wider group-hover:text-cyber-green transition-colors line-clamp-2 min-h-[3rem]">
                    {cert.title}
                </h4>
                {cert.credentialId && (
                  <p className="text-[10px] text-cyber-blue/40 font-mono">ID: {cert.credentialId}</p>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-cyber-green/10 flex justify-between items-center group-hover:border-cyber-green/30 transition-all">
                <div className="flex gap-1">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-1 h-1 bg-cyber-green/30 rounded-full" />
                    ))}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-cyber-green text-[10px] uppercase">
                    <span>Validate</span>
                    <ExternalLink size={10} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
