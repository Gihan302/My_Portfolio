import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MatrixRain = ({ count = 500 }) => {
  const meshRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 20;
      const speed = 0.05 + Math.random() * 0.1;
      temp.push({ x, y, z, speed });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    particles.forEach((p, i) => {
      p.y -= p.speed;
      if (p.y < -25) p.y = 25;
      
      dummy.position.set(p.x, p.y, p.z);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxGeometry args={[0.02, 0.4, 0.02]} />
      <meshBasicMaterial color="#00FF41" transparent opacity={0.4} />
    </instancedMesh>
  );
};

export default MatrixRain;
