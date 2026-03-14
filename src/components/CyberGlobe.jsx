import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const CyberGlobe = () => {
  const globeRef = useRef();
  const linesRef = useRef();

  // Generate random nodes/points on the sphere
  const nodes = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 40; i++) {
      const phi = Math.acos(-1 + (2 * i) / 40);
      const theta = Math.sqrt(40 * Math.PI) * phi;
      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(phi);
      pts.push(new THREE.Vector3(x, y, z).multiplyScalar(5));
    }
    return pts;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (globeRef.current) {
      globeRef.current.rotation.y = t * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={globeRef}>
          {/* Main Globe */}
          <Sphere args={[5, 64, 64]}>
            <meshPhongMaterial
              color="#001220"
              emissive="#00FF41"
              emissiveIntensity={0.1}
              transparent
              opacity={0.8}
              wireframe
            />
          </Sphere>
          
          {/* Inner Glow */}
          <Sphere args={[4.8, 32, 32]}>
            <meshBasicMaterial color="#00FF41" transparent opacity={0.05} />
          </Sphere>

          {/* Network Nodes */}
          {nodes.map((pos, i) => (
            <mesh key={i} position={pos}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial color="#00FF41" />
              <pointLight color="#00FF41" intensity={0.5} distance={2} />
            </mesh>
          ))}
        </group>

        {/* Outer Connection Lines / Rings */}
        <group ref={linesRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[6, 0.01, 16, 100]} />
            <meshBasicMaterial color="#00FF41" transparent opacity={0.2} />
          </mesh>
          <mesh rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[6.5, 0.01, 16, 100]} />
            <meshBasicMaterial color="#00D4FF" transparent opacity={0.1} />
          </mesh>
        </group>
      </Float>

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

export default CyberGlobe;
