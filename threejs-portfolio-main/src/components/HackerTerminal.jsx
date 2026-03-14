import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import { motion } from 'framer-motion';

const HackerTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'system', content: 'SYSTEM BOOT SUCCESSFUL...' },
    { type: 'system', content: 'ESTABLISHING SECURE CONNECTION...' },
    { type: 'system', content: 'WELCOME, OPERATIVE GIHAN.' },
    { type: 'system', content: "TYPE 'help' TO VIEW AVAILABLE COMMANDS." }
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const scrollRef = useRef(null);

  const commands = {
    help: 'Available commands: help, whoami, skills, projects, contact, clear, exit',
    whoami: 'Gihan | Computer Science Student | Cybersecurity Enthusiast | Ethical Hacker in Training',
    skills: 'Cybersecurity: Network Security, Ethical Hacking, Linux, Wireshark, Nmap, Burp Suite, OSINT\nProgramming: Python, Java, JavaScript, React, Node.js',
    projects: '1. Network Packet Sniffer\n2. Vulnerability Scanner\n3. Web Scraper\n4. Security Automation Scripts',
    contact: 'Email: gihan@cyber-ops.sec | GitHub: github.com/gihan | LinkedIn: linkedin.com/in/gihan',
    clear: 'CLEAR',
    exit: 'EXIT'
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmedInput = input.trim().toLowerCase();
      let response = '';

      if (trimmedInput === 'clear') {
        setHistory([]);
      } else if (trimmedInput === 'exit') {
        setIsOpen(false);
      } else if (commands[trimmedInput]) {
        response = commands[trimmedInput];
        setHistory([...history, { type: 'input', content: input }, { type: 'response', content: response }]);
      } else if (trimmedInput !== '') {
        response = `Command not found: ${trimmedInput}. Type 'help' for assistance.`;
        setHistory([...history, { type: 'input', content: input }, { type: 'response', content: response }]);
      }

      setInput('');
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed bottom-10 right-10 z-50 flex flex-col transition-all duration-300 ${
        isMinimized ? 'h-10 w-64' : 'h-96 w-[500px]'
      } border border-cyber-green/30 bg-black/90 backdrop-blur-md rounded-lg shadow-[0_0_20px_rgba(0,255,65,0.2)] overflow-hidden font-terminal`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-cyber-green/10 border-b border-cyber-green/30">
        <div className="flex items-center gap-2">
          <TerminalIcon size={16} className="text-cyber-green" />
          <span className="text-xs text-cyber-green/80 font-bold uppercase tracking-wider">SECURE_TERMINAL_V1.0</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsMinimized(!isMinimized)} className="hover:text-cyber-green text-cyber-green/50">
            {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
          </button>
          <button onClick={() => setIsOpen(false)} className="hover:text-red-500 text-cyber-green/50">
            <X size={14} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Terminal Content */}
          <div
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto text-sm scrollbar-thin scrollbar-thumb-cyber-green/30"
          >
            {history.map((line, i) => (
              <div key={i} className="mb-1 leading-relaxed">
                {line.type === 'input' && (
                  <span className="text-cyber-blue mr-2 font-bold">visitor@gihan-ops:~$</span>
                )}
                {line.type === 'system' && (
                  <span className="text-cyber-purple mr-2 font-bold">[SYS]:</span>
                )}
                <span className={`${
                  line.type === 'input' ? 'text-white' : 
                  line.type === 'system' ? 'text-cyber-green/70' : 
                  'text-cyber-green'
                } whitespace-pre-wrap`}>
                  {line.content}
                </span>
              </div>
            ))}
            <div className="flex items-center mt-2">
              <span className="text-cyber-blue mr-2 font-bold">visitor@gihan-ops:~$</span>
              <input
                autoFocus
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="flex-1 bg-transparent border-none outline-none text-cyber-green caret-cyber-green"
              />
            </div>
          </div>
          <div className="px-4 py-1 bg-cyber-green/5 border-t border-cyber-green/10 text-[10px] text-cyber-green/30 flex justify-between uppercase">
            <span>Status: Connected</span>
            <span>Encryption: AES-256</span>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default HackerTerminal;
