import { useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-8 relative z-20 font-terminal">
    {navLinks.map((item) => (
      <li key={item.id} className="group relative">
        <a 
          href={item.href} 
          className="text-cyber-green/60 hover:text-cyber-green transition-all duration-300 text-sm uppercase tracking-widest flex items-center gap-2" 
          onClick={onClick}
        >
          <span className="text-[10px] text-cyber-green/30 group-hover:text-cyber-green/80 transition-colors">0{item.id}.</span>
          {item.name}
          <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-green transition-all duration-300 group-hover:w-full" />
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-green/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 mx-auto c-space">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 border border-cyber-green flex items-center justify-center text-cyber-green font-terminal font-bold group-hover:bg-cyber-green group-hover:text-black transition-all">
              G
            </div>
            <span className="text-cyber-green font-terminal font-bold tracking-tighter text-xl uppercase group-hover:glitch">
              GIHAN_OPS
            </span>
          </a>

          <button
            onClick={toggleMenu}
            className="text-cyber-green hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6 invert sepia-[1] hue-rotate-[100deg] brightness-[1.5]" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} bg-cyber-dark/95 border-b border-cyber-green/20`}>
        <nav className="p-8">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
