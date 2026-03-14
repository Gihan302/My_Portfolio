import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import Certifications from './sections/Certifications.jsx';
import WorkExperience from './sections/Experience.jsx';
import Education from './sections/Education.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import SystemBoot from './components/SystemBoot.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative bg-cyber-dark min-h-screen cursor-none">
      <SystemBoot />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Certifications />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
