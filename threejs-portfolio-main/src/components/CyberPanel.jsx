import React from 'react';
import { Html } from '@react-three/drei';
import { motion as motion2d } from 'framer-motion';
import * as THREE from 'three';

const CyberPanel = ({ position, title, children, rotation = [0, 0, 0] }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* 3D Wireframe Panel Backplate */}
      <mesh>
        <planeGeometry args={[4, 2.5]} />
        <meshBasicMaterial color="#00FF41" transparent opacity={0.05} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Edges with glowing effect */}
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(4, 2.5)]} />
        <lineBasicMaterial color="#00FF41" transparent opacity={0.5} />
      </lineSegments>

      {/* Holographic Content using Drei Html */}
      <Html
        transform
        distanceFactor={4}
        position={[0, 0, 0.05]}
        className="pointer-events-none select-none"
      >
        <motion2d.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 30px rgba(0, 255, 65, 0.2)",
            borderColor: "rgba(0, 255, 65, 0.6)"
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-96 p-6 border border-cyber-green/30 bg-black/80 backdrop-blur-md rounded-lg flex flex-col gap-3 font-terminal pointer-events-auto shadow-[0_0_20px_rgba(0,255,65,0.15)] transition-all cursor-default group"
        >
          {/* Scanning Line Effect */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity rounded-lg">
             <motion2d.div 
               animate={{ top: ['-100%', '200%'] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-cyber-green to-transparent"
             />
          </div>

          <div className="flex items-center justify-between border-b border-cyber-green/30 pb-2 relative z-10">
            <h3 className="text-cyber-green font-bold uppercase tracking-wider text-lg group-hover:animate-glitch">{title}</h3>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse delay-75" />
            </div>
          </div>
          <div className="text-cyber-green/80 text-sm leading-relaxed overflow-hidden relative z-10 group-hover:text-white transition-colors">
            {children}
          </div>
          <div className="flex justify-between items-center mt-2 relative z-10">
            <div className="flex gap-1 opacity-30">
                <div className="w-8 h-[1px] bg-cyber-green" />
                <div className="w-2 h-[1px] bg-cyber-green" />
            </div>
            <span className="text-[10px] text-cyber-green/40 uppercase font-bold tracking-tighter group-hover:text-cyber-green transition-colors">
              [ SECURE_LINK_ACTIVE ]
            </span>
          </div>
        </motion2d.div>
      </Html>
    </group>
  );
};

export default CyberPanel;
