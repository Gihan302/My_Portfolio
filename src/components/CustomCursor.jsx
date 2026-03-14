import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHoverStart = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('work-content_container')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-cyber-green rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(0, 255, 65, 0.2)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyber-blue rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
      />

      {/* Crosshair horizontal */}
      {isHovering && (
        <>
          <motion.div 
            className="fixed h-[1px] bg-cyber-green/30 pointer-events-none z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              top: mousePosition.y, 
              left: 0, 
              right: 0 
            }}
          />
          <motion.div 
            className="fixed w-[1px] bg-cyber-green/30 pointer-events-none z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              left: mousePosition.x, 
              top: 0, 
              bottom: 0 
            }}
          />
        </>
      )}
    </>
  );
};

export default CustomCursor;
