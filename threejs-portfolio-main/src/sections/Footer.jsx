const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-cyber-green/10 flex justify-between items-center flex-wrap gap-5 font-terminal">
      <div className="text-cyber-green/40 flex gap-2 text-xs uppercase tracking-widest">
        <p className="hover:text-cyber-green cursor-pointer">Protocol_Terms</p>
        <p>|</p>
        <p className="hover:text-cyber-green cursor-pointer">Security_Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full border border-cyber-green/20 flex justify-center items-center bg-cyber-green/5 hover:bg-cyber-green/20 transition-all cursor-pointer">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 invert sepia-[1] hue-rotate-[100deg]" />
        </div>
        <div className="w-10 h-10 rounded-full border border-cyber-green/20 flex justify-center items-center bg-cyber-green/5 hover:bg-cyber-green/20 transition-all cursor-pointer">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2 invert sepia-[1] hue-rotate-[100deg]" />
        </div>
        <div className="w-10 h-10 rounded-full border border-cyber-green/20 flex justify-center items-center bg-cyber-green/5 hover:bg-cyber-green/20 transition-all cursor-pointer">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2 invert sepia-[1] hue-rotate-[100deg]" />
        </div>
      </div>

      <p className="text-cyber-green/40 text-xs tracking-tighter uppercase">
        [ GIHAN_CHINTHAKA // OPERATIVE_LOG_2026 ]
      </p>
    </footer>
  );
};

export default Footer;
