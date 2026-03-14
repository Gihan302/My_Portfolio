import React from 'react';
import { Award, ShieldCheck, FileCode } from 'lucide-react';

const certifications = [
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2025',
    icon: <ShieldCheck className="text-cyber-green" size={24} />,
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: '2025',
    icon: <Award className="text-cyber-blue" size={24} />,
  },
  {
    title: 'Google Cybersecurity Professional',
    issuer: 'Google',
    date: '2024',
    icon: <FileCode className="text-cyber-purple" size={24} />,
  },
];

const Certifications = () => {
  return (
    <section className="c-space my-20 font-terminal" id="certifications">
      <p className="head-text text-cyber-green uppercase tracking-tighter">&gt; ACCREDITATIONS</p>
      
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-12">
        {certifications.map((cert, index) => (
          <div key={index} className="p-6 border border-cyber-green/20 bg-cyber-dark/60 backdrop-blur-md hover:border-cyber-green/50 transition-all group">
            <div className="mb-4 group-hover:scale-110 transition-transform">
              {cert.icon}
            </div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-2">{cert.title}</h4>
            <div className="flex justify-between items-center text-xs">
              <span className="text-cyber-green/60">{cert.issuer}</span>
              <span className="text-cyber-blue/60">{cert.date}</span>
            </div>
            <div className="mt-4 w-full h-[1px] bg-cyber-green/10 group-hover:bg-cyber-green/30 transition-all" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
