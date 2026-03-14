import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('gihan@cyber-ops.sec');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 font-terminal" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container border-cyber-green/20 bg-cyber-dark/60">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain opacity-50 grayscale hover:grayscale-0 transition-all" />

            <div>
              <p className="grid-headtext text-cyber-green uppercase">&gt; OPERATIVE_PROFILE</p>
              <p className="grid-subtext text-cyber-green/70">
                Hi, I'm Gihan. A dedicated Computer Science student specializing in Cybersecurity. I focus on identifying vulnerabilities and securing digital landscapes.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container border-cyber-green/20 bg-cyber-dark/60">
            <div className="flex flex-wrap gap-2 mb-4">
              {['Linux', 'Wireshark', 'Nmap', 'Burp Suite', 'Python', 'Metasploit', 'JS', 'React'].map((skill) => (
                <span key={skill} className="px-2 py-1 border border-cyber-green/30 text-cyber-green text-[10px] uppercase">
                  {skill}
                </span>
              ))}
            </div>

            <div>
              <p className="grid-headtext text-cyber-green uppercase">&gt; TECH_STACK</p>
              <p className="grid-subtext text-cyber-green/70">
                My toolkit includes industry-standard security tools and modern development frameworks to build and break secure systems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container border-cyber-green/20 bg-cyber-dark/60">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center overflow-hidden">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 7, lng: 81, text: 'Colombo, Sri Lanka', color: '#00FF41', size: 20 }]}
              />
            </div>
            <div>
              <p className="grid-headtext text-cyber-green uppercase">&gt; GLOBAL_REACH</p>
              <p className="grid-subtext text-cyber-green/70">Based in Sri Lanka, I'm ready to collaborate on security projects globally.</p>
              <Button name="Secure Contact" isBeam containerClass="w-full mt-10 bg-cyber-green/10 border-cyber-green text-cyber-green" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container border-cyber-green/20 bg-cyber-dark/60">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain opacity-30" />

            <div>
              <p className="grid-headtext text-cyber-green uppercase">&gt; MISSION_OBJECTIVE</p>
              <p className="grid-subtext text-cyber-green/70">
                To bridge the gap between development and security. I believe that security should be integrated into every step of the development lifecycle, not just an afterthought.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container border-cyber-green/20 bg-cyber-dark/60">
            <div className="space-y-2">
              <p className="grid-subtext text-center text-cyber-green/50 uppercase">Establish Connection</p>
              <div className="copy-container border border-cyber-green/30 p-4 rounded hover:bg-cyber-green/5 transition-colors" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="invert sepia-[1] hue-rotate-[100deg]" />
                <p className="lg:text-xl md:text-lg font-medium text-cyber-green">gihan@cyber-ops.sec</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
