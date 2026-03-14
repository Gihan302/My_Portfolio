import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20 font-terminal" id="projects">
      <p className="head-text text-cyber-green uppercase tracking-tighter">&gt; CLASSIFIED_PROJECTS</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 border border-cyber-green/20 bg-cyber-dark/60 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,65,0.05)]">
          <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="p-3 border border-cyber-green/30 w-fit rounded-lg shadow-[0_0_15px_rgba(0,255,65,0.1)]" style={currentProject.logoStyle}>
            <img className="w-10 h-10 brightness-110" src={currentProject.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-cyber-green/80 my-5">
            <p className="text-white text-2xl font-bold uppercase tracking-widest animatedText">
              {currentProject.title}
            </p>

            <p className="animatedText leading-relaxed">{currentProject.desc}</p>
            <p className="animatedText text-cyber-blue/80 text-sm italic">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="w-10 h-10 rounded-md p-2 bg-cyber-green/10 border border-cyber-green/20 flex justify-center items-center hover:bg-cyber-green/20 transition-colors">
                  <span className="text-[8px] text-cyber-green font-bold">{tag.name}</span>
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-cyber-green hover:text-white transition-colors border border-cyber-green/30 px-4 py-2 rounded uppercase text-xs tracking-widest"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Access Repository</p>
              <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3 invert sepia-[1] hue-rotate-[100deg]" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="w-12 h-12 flex items-center justify-center border border-cyber-green/30 hover:bg-cyber-green/10 transition-all rounded-full" onClick={() => handleNavigation('previous')}>
              <img src="assets/left-arrow.png" alt="left arrow" className="w-4 h-4 invert sepia-[1] hue-rotate-[100deg]" />
            </button>

            <button className="w-12 h-12 flex items-center justify-center border border-cyber-green/30 hover:bg-cyber-green/10 transition-all rounded-full" onClick={() => handleNavigation('next')}>
              <img src="assets/right-arrow.png" alt="right arrow" className="w-4 h-4 invert sepia-[1] hue-rotate-[100deg]" />
            </button>
          </div>
        </div>

        <div className="border border-cyber-green/20 bg-black/40 backdrop-blur-sm rounded-lg h-96 md:h-full relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <div className="absolute top-4 right-4 text-[10px] text-cyber-green/30 font-terminal z-10">
            RENDER_VIEW_0{selectedProjectIndex + 1}
          </div>
          
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#00FF41" />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
