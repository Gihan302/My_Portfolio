import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20 font-terminal" id="work">
      <div className="w-full text-cyber-green">
        <p className="head-text text-cyber-green uppercase tracking-tighter">&gt; SERVICE_RECORD</p>

        <div className="work-container mt-12">
          <div className="work-canvas border border-cyber-green/20 bg-cyber-dark/40 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,65,0.05)]">
            <Canvas>
              <ambientLight intensity={2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} color="#00FF41" />
              <directionalLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content border border-cyber-green/20 bg-cyber-dark/60 backdrop-blur-md">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group border-b border-cyber-green/10 last:border-none">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="w-12 h-12 rounded-full border border-cyber-green/30 p-2 bg-cyber-green/5 group-hover:bg-cyber-green/20 transition-all">
                      <img className="w-full h-full invert sepia-[1] hue-rotate-[100deg]" src={item.icon} alt="" />
                    </div>

                    <div className="w-[1px] mt-4 h-full bg-cyber-green/20 group-hover:bg-cyber-green/50 transition-all" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white uppercase tracking-wider">{item.name}</p>
                    <p className="text-xs text-cyber-blue mb-5">
                      {item.pos} // <span className="text-cyber-green/50">{item.duration}</span>
                    </p>
                    <p className="text-cyber-green/70 group-hover:text-cyber-green transition-all ease-in-out duration-500 text-sm leading-relaxed">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
