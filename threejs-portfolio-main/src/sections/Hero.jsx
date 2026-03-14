import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera, OrbitControls, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';

import CanvasLoader from '../components/Loading.jsx';
import CyberGlobe from '../components/CyberGlobe.jsx';
import CyberPanel from '../components/CyberPanel.jsx';
import HackerTerminal from '../components/HackerTerminal.jsx';
import MatrixRain from '../components/MatrixRain.jsx';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return (
    <section className="min-h-screen w-full flex flex-col relative bg-cyber-dark overflow-hidden" id="home">
      {/* Scanline Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] animate-scanline" />
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-cyber-grid bg-[size:40px_40px] pointer-events-none" />

      {/* Hero Text Overlay */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="sm:text-3xl text-xl font-medium text-cyber-green text-center font-terminal"
        >
          &gt; INITIALIZING_CONNECTION... <span className="animate-pulse">_</span>
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hero_tag text-white font-terminal uppercase tracking-tighter"
        >
          GIHAN <span className="text-cyber-green">CHINTHAKA</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-cyber-blue font-terminal text-sm sm:text-lg"
        >
          [ CYBERSECURITY ENTHUSIAST | ETHICAL HACKER | CS STUDENT ]
        </motion.p>
      </div>

      {/* 3D Scene */}
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full" shadows>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} />
            
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00FF41" />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

            <CyberGlobe />
            <MatrixRain count={300} />

            {/* Orbital Panels */}
            {!isMobile && (
              <>
                <CyberPanel 
                  position={[-12, 5, 0]} 
                  title="CORE_INTEL"
                  rotation={[0, 0.4, 0]}
                >
                  <p>Operative: Gihan Chinthaka</p>
                  <p>Specialization: Cybersecurity / Network Defense</p>
                  <p>Status: Active / Learning</p>
                </CyberPanel>

                <CyberPanel 
                  position={[12, -3, 0]} 
                  title="SEC_TOOLS"
                  rotation={[0, -0.4, 0]}
                >
                  <ul className="list-disc list-inside">
                    <li>Wireshark / Nmap</li>
                    <li>Metasploit / Burp Suite</li>
                    <li>Kali Linux / Parrot OS</li>
                    <li>Python / Bash Scripting</li>
                  </ul>
                </CyberPanel>
              </>
            )}

            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              rotateSpeed={0.5} 
              autoRotate 
              autoRotateSpeed={0.5} 
            />
            <ContactShadows position={[0, -10, 0]} opacity={0.4} scale={20} blur={2.4} far={10} color="#00FF41" />
          </Suspense>
        </Canvas>
      </div>

      {/* Footer Navigation Hints */}
      <div className="absolute bottom-10 left-10 z-10 font-terminal text-[10px] text-cyber-green/50 flex flex-col gap-1 uppercase">
        <p>&gt; LATENCY: 24MS</p>
        <p>&gt; ENCRYPTION: ACTIVE</p>
        <p>&gt; LOCATION: SRI LANKA</p>
      </div>

      <HackerTerminal />
    </section>
  );
};

export default Hero;
