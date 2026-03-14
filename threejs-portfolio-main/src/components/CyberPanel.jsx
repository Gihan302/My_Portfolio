import React from 'react';
import { Html } from '@react-three/drei';
import { motion as motion2d } from 'framer-motion';

const CyberPanel = ({ position, title, children, rotation = [0, 0, 0] }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* 3D Wireframe Panel Backplate */}
      <mesh>
        <planeGeometry args={[4, 2.5]} />
        <meshBasicMaterial color="#00FF41" transparent opacity={0.05} side={2} />
      </mesh>
      
      {/* Edges */}
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(4, 2.5)]} />
        <lineBasicMaterial color="#00FF41" transparent opacity={0.3} />
      </lineSegments>

      {/* Holographic Content using Drei Html */}
      <Html
        transform
        distanceFactor={4}
        position={[0, 0, 0.05]}
        className="pointer-events-none select-none"
      >
        <motion2d.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-96 p-6 border border-cyber-green/30 bg-black/60 backdrop-blur-sm rounded-lg flex flex-col gap-3 font-terminal pointer-events-auto shadow-[0_0_15px_rgba(0,255,65,0.1)]"
        >
          <div className="flex items-center justify-between border-b border-cyber-green/30 pb-2">
            <h3 className="text-cyber-green font-bold uppercase tracking-wider text-lg">{title}</h3>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-cyber-green/50 animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyber-green/50 animate-pulse delay-75" />
            </div>
          </div>
          <div className="text-cyber-green/80 text-sm leading-relaxed overflow-hidden">
            {children}
          </div>
          <div className="flex justify-end mt-2">
            <span className="text-[10px] text-cyber-green/30 uppercase font-bold tracking-tighter">
              [ SECURE_LINK_ACTIVE ]
            </span>
          </div>
        </motion2d.div>
      </Html>
    </group>
  );
};

export default CyberPanel;
import * as THREE from 'three';
