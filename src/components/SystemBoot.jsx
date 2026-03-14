import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SystemBoot = () => {
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState([]);
  
  const bootLogs = [
    'INITIALIZING BIOS...',
    'CHECKING PERIPHERALS...',
    'ESTABLISHING SECURE HANDSHAKE...',
    'LOADING KERNEL MODULES...',
    'MOUNTING VIRTUAL FILE SYSTEM...',
    'STARTING SECURE_TERMINAL_V1.0...',
    'ACCESS GRANTED.'
  ];

  useEffect(() => {
    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLog]]);
        currentLog++;
      } else {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 1000);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center font-terminal p-4"
        >
          <div className="w-full max-w-md">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-1 bg-cyber-green mb-8 shadow-[0_0_15px_#00FF41]"
            />
            <div className="space-y-2">
              {logs.map((log, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-cyber-green text-sm flex items-center gap-2"
                >
                  <span className="text-cyber-blue">[+]</span> {log}
                </motion.p>
              ))}
            </div>
            {logs.length === bootLogs.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="mt-8 text-center text-cyber-green font-bold text-xl tracking-[0.3em]"
              >
                READY_
              </motion.div>
            )}
          </div>
          
          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] animate-scanline" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SystemBoot;
