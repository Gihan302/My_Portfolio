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
    name: 'Competencies',
    href: '#competencies',
  },
  {
    id: 4,
    name: 'Education',
    href: '#education',
  },
  {
    id: 5,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 6,
    name: 'Certifications',
    href: '#certifications',
  },
  {
    id: 7,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Wild Path – Mobile Application (2025)',
    desc: 'A mobile application developed during a hackathon to address elephant–vehicle collisions in Sri Lanka. Users can report elephant sightings with images and location data while the system sends real-time alerts to nearby users.',
    subdesc: 'Includes heatmap visualization and an AI-based prediction system that forecasts elephant activity using historical data. Built with React Native, Node.js, Express, MongoDB, Firebase, AI/ML.',
    href: 'https://github.com/gihan/wild-path',
    texture: 'textures/project/project1.mp4',
    logo: 'assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#001A0A',
      border: '0.2px solid #00FF41',
      boxShadow: '0px 0px 60px 0px rgba(0, 255, 65, 0.3)',
    },
    spotlight: 'assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React Native', path: 'assets/react.svg' },
      { id: 2, name: 'Node.js', path: 'assets/jsm-logo.png' },
      { id: 3, name: 'MongoDB', path: 'assets/mongodb.svg' },
      { id: 4, name: 'AI/ML', path: 'assets/typescript.png' },
    ],
  },
  {
    title: 'Internship Job Finder Companion (2025)',
    desc: 'An AI-powered automation system that scrapes internship opportunities from jobseeker.lk, structures the information into Google Sheets, and delivers summarized email reports using AI-generated insights.',
    subdesc: 'Built with n8n, Bright Data, Google Sheets API, Gemini API, and Web Scraping.',
    href: 'https://github.com/gihan/internship-finder',
    texture: 'textures/project/project2.mp4',
    logo: 'assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#000814',
      border: '0.2px solid #00D4FF',
      boxShadow: '0px 0px 60px 0px rgba(0, 212, 255, 0.3)',
    },
    spotlight: 'assets/spotlight2.png',
    tags: [
      { id: 1, name: 'n8n', path: 'assets/framer.png' },
      { id: 2, name: 'Gemini AI', path: 'assets/react.svg' },
      { id: 3, name: 'Automation', path: 'assets/tailwindcss.png' },
    ],
  },
  {
    title: 'Quick Cart – E-Commerce (2024)',
    desc: 'A full-stack mobile e-commerce platform enabling product browsing, shopping cart management, and order placement with cloud authentication and real-time database updates.',
    subdesc: 'Built with React Native, Node.js, Express, MongoDB, Firebase.',
    href: 'https://github.com/gihan/quick-cart',
    texture: 'textures/project/project3.mp4',
    logo: 'assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#1A0033',
      border: '0.2px solid #8A2BE2',
      boxShadow: '0px 0px 60px 0px rgba(138, 43, 226, 0.3)',
    },
    spotlight: 'assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React Native', path: 'assets/react.svg' },
      { id: 2, name: 'Firebase', path: 'assets/framer.png' },
      { id: 3, name: 'Express', path: 'assets/jsm-logo.png' },
    ],
  },
  {
    title: 'Arduino Vehicle Parking System (2024)',
    desc: 'Smart parking system that detects available parking slots and automates entry/exit using sensor-based detection and auto-door functionality.',
    subdesc: 'Built with Arduino and various hardware sensors for real-time slot monitoring.',
    href: 'https://github.com/gihan/arduino-parking',
    texture: 'textures/project/project4.mp4',
    logo: 'assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E0E10',
      border: '0.2px solid #62646C',
      boxShadow: '0px 0px 60px 0px rgba(98, 100, 108, 0.3)',
    },
    spotlight: 'assets/spotlight4.png',
    tags: [
      { id: 1, name: 'Arduino', path: 'assets/react.svg' },
      { id: 2, name: 'C++', path: 'assets/typescript.png' },
      { id: 3, name: 'Sensors', path: 'assets/tailwindcss.png' },
    ],
  },
  {
    title: 'Auto Care – Vehicle Platform (2025)',
    desc: 'A comprehensive digital platform connecting vehicle buyers, sellers, leasing companies, insurance providers, and banks.',
    subdesc: 'Includes AI-powered vehicle recommendations, chatbot assistance, and automated workflows. Built with NextJS, Node.js, Spring Boot, MySQL, n8n.',
    href: 'https://github.com/gihan/auto-care',
    texture: 'textures/project/project5.mp4',
    logo: 'assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1C21',
      border: '0.2px solid #00FF41',
      boxShadow: '0px 0px 60px 0px rgba(0, 255, 65, 0.3)',
    },
    spotlight: 'assets/spotlight5.png',
    tags: [
      { id: 1, name: 'NextJS', path: 'assets/react.svg' },
      { id: 2, name: 'Spring Boot', path: 'assets/typescript.png' },
      { id: 3, name: 'n8n', path: 'assets/framer.png' },
    ],
  },
  {
    title: '3D Island – Computer Graphics (2025)',
    desc: 'A real-time interactive 3D island environment developed using OpenGL with lighting, camera control, textures, and animated objects.',
    subdesc: 'Built with C++ and OpenGL for high-performance graphics rendering.',
    href: 'https://github.com/gihan/3d-island',
    texture: 'textures/project/project1.mp4',
    logo: 'assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#001A0A',
      border: '0.2px solid #00FF41',
      boxShadow: '0px 0px 60px 0px rgba(0, 255, 65, 0.3)',
    },
    spotlight: 'assets/spotlight1.png',
    tags: [
      { id: 1, name: 'C++', path: 'assets/react.svg' },
      { id: 2, name: 'OpenGL', path: 'assets/typescript.png' },
    ],
  },
  {
    title: 'Network Intrusion Detection System',
    desc: 'A security tool for port scanning detection, SYN flood attack detection, malicious IP detection, and traffic anomaly monitoring.',
    subdesc: 'Built with Python, Raw Sockets, Packet Analysis, and Matplotlib for threat visualization.',
    href: 'https://github.com/gihan/nids',
    texture: 'textures/project/project2.mp4',
    logo: 'assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#000814',
      border: '0.2px solid #00D4FF',
      boxShadow: '0px 0px 60px 0px rgba(0, 212, 255, 0.3)',
    },
    spotlight: 'assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Python', path: 'assets/react.svg' },
      { id: 2, name: 'Cybersecurity', path: 'assets/tailwindcss.png' },
    ],
  },
];

export const coreCompetencies = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'C', 'C++', 'JavaScript', 'Python', 'TypeScript'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'React Native', 'NestJS', 'Express.js', 'Spring Boot', 'Bootstrap', 'Tailwind CSS', 'PyTorch'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB', 'Firebase'],
  },
  {
    category: 'Development Tools',
    skills: ['IntelliJ IDEA', 'Visual Studio', 'PyCharm', 'Apache NetBeans', 'Postman', 'Cursor AI'],
  },
  {
    category: 'Operating Systems',
    skills: ['Windows', 'Linux'],
  },
];

export const education = [
  {
    id: 1,
    title: 'Bachelor of Science (Undergraduate)',
    major: 'Computer Science',
    minor: 'Chemistry',
    institution: 'University of Peradeniya',
    location: 'Sri Lanka',
    duration: '2022 - Present',
  },
  {
    id: 2,
    title: 'Primary and Secondary Education',
    details: 'G.C.E A/L – Biological Science Stream (Results: A1, B1, C1)',
    institution: 'B. Dharmapala Maha Vidyalaya, Bandarawela',
    duration: '2016 – 2019',
  },
];

export const certifications = [
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    date: 'Jan 2026',
  },
  {
    title: 'Multicloud Network Associate',
    issuer: 'Aviatrix',
    date: 'Sep 2025 - Sep 2028',
    credentialId: '2025-27421',
  },
  {
    title: 'AI / ML Engineer Stage 2',
    issuer: 'SLIIT',
    date: 'Mar 2025',
  },
  {
    title: 'Getting Started with Full Stack Java Development',
    issuer: 'Simplilearn',
    date: 'Mar 2025',
  },
  {
    title: 'AI / ML Engineer Stage 1',
    issuer: 'SLIIT',
    date: 'Jun 2024',
  },
];

export const workExperiences = [
  {
    id: 1,
    name: 'CyberOps Inc.',
    pos: 'Security Intern',
    duration: '2025 - Present',
    title: "Assisting in network monitoring and threat analysis. Gaining hands-on experience with SIEM tools and incident response protocols.",
    icon: 'assets/framer.svg',
    animation: 'victory',
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
