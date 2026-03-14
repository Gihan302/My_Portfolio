export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'NetSniff - Packet Analyzer',
    desc: 'A robust network packet sniffer built for real-time traffic monitoring and protocol analysis. It captures and parses TCP/UDP/HTTP packets, providing insights into network behavior and potential security threats.',
    subdesc:
      'Developed with Python, Scapy, and React for the dashboard, NetSniff features a clean SOC-style interface for visualizing live network data streams.',
    href: 'https://github.com/gihan/netsniff',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#001A0A',
      border: '0.2px solid #00FF41',
      boxShadow: '0px 0px 60px 0px rgba(0, 255, 65, 0.3)',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/react.svg', // Placeholder
      },
      {
        id: 2,
        name: 'Scapy',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'React',
        path: '/assets/react.svg',
      },
    ],
  },
  {
    title: 'VulnScan - Vulnerability Scanner',
    desc: 'Automated vulnerability scanner that identifies common web application weaknesses like SQL injection and XSS. It generates detailed reports with remediation steps for security teams.',
    subdesc:
      'Built using Go and integrated with Nmap, VulnScan provides a fast and reliable way to assess the security posture of web assets.',
    href: 'https://github.com/gihan/vulnscan',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#000814',
      border: '0.2px solid #00D4FF',
      boxShadow: '0px 0px 60px 0px rgba(0, 212, 255, 0.3)',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Go',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Nmap',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'SecAuto - Security Orchestration',
    desc: 'A security automation framework that streamlines incident response by integrating multiple security tools into a single workflow. It reduces response time by automating repetitive tasks.',
    subdesc:
      'Implemented with Node.js and Docker, SecAuto allows for rapid deployment of security containers and automated threat mitigation.',
    href: 'https://github.com/gihan/secauto',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#1A0033',
      border: '0.2px solid #8A2BE2',
      boxShadow: '0px 0px 60px 0px rgba(138, 43, 226, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Docker',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    name: 'CyberOps Inc.',
    pos: 'Security Intern',
    duration: '2025 - Present',
    title: "Assisting in network monitoring and threat analysis. Gaining hands-on experience with SIEM tools and incident response protocols.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'University of Colombo',
    pos: 'Computer Science Student',
    duration: '2023 - 2027',
    title: "Focusing on Information Security and Cryptography. Active member of the University Hacking Club.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};
