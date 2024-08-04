import React, { useState, useEffect } from 'react';
import './App.css';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';
import emailIcon from './assets/email.png';
import headshot from './assets/headshot.png';
import portfolioWebsite from './assets/portfolio-website.png';
import typescriptIcon from './assets/typescript.png';
import jsIcon from './assets/js.png';
import cssIcon from './assets/css.png';
import html5Icon from './assets/html5.png';
import cplusIcon from './assets/c++.png';
import reactIcon from './assets/react.png';
import gitIcon from './assets/git.png';
import pythonIcon from './assets/python.png';
import javaIcon from './assets/java.png';

const phrases = [
  "a software developer",
  "a problem solver",
  "a student",
];

function App() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      } else {
        setText(currentPhrase.substring(0, isDeleting ? text.length - 1 : text.length + 1));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [text, phraseIndex, isDeleting]);

  useEffect(() => {
    const handleScroll = () => {
      const contentSection = document.getElementById('content');
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const contentPosition = contentSection.getBoundingClientRect().top;
      const skillsPosition = skillsSection.getBoundingClientRect().top;
      const projectsPosition = projectsSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (contentPosition < screenPosition) {
        setShowContent(true);
      }

      if (skillsPosition < screenPosition) {
        setShowSkills(true);
      }

      if (projectsPosition < screenPosition) {
        setShowProjects(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="icons">
          <a href="https://www.linkedin.com/in/aliabbaskhalfan" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/aliabbaskhalfan" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="mailto:ak60@fordham.edu">
            <img src={emailIcon} alt="Email" />
          </a>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#content" onClick={() => handleNavClick('content')}>About</a></li>
          <li><a href="#skills" onClick={() => handleNavClick('skills')}>Skills</a></li>
          <li><a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a></li>
          <li><a href="#resume" download="resume.pdf">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="header">
        <h1>
          <span className="white-text">Hi, I am </span>
          <span className="pink-text">Aliabbas Khalfan</span>
          <br />
          <span className="white-text">and I'm </span>
          <span className="typed-text">{text}</span>
          <span className="cursor"></span>
        </h1>
      </header>
      <div id="content" className={`content-container ${showContent ? 'fade-in' : ''}`}>
        <div className="headshot-container">
          <img src={headshot} alt="Headshot" className="headshot" />
        </div>
        <div className="about-section">
          <h2 className="about-title">About Me</h2>
          <p>
            I am currently enrolled in the 3-2 program at Fordham and Columbia University, pursuing dual bachelor's degrees in Computer Science + Mathematics and Financial Engineering.
            <br /><br />
            Currently, I am focused on enhancing my knowledge of Data Structures and Algorithms, while also developing my skills in CSS and HTML. I aim to become a quantitative developer and am actively seeking internship opportunities to further develop my skills and advance my career in these dynamic fields.
          </p>
        </div>
      </div>
      <div id="skills" className={`skills-section ${showSkills ? 'fade-in' : ''}`}>
        <h2 className="skills-title">Skills</h2>
        <div className="skills-container">
          <div className="skill-item">
            <img src={typescriptIcon} alt="TypeScript" />
            <p>TypeScript</p>
          </div>
          <div className="skill-item">
            <img src={jsIcon} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <img src={cssIcon} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <img src={html5Icon} alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div className="skill-item">
            <img src={cplusIcon} alt="C++" />
            <p>C++</p>
          </div>
          <div className="skill-item">
            <img src={reactIcon} alt="React" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <img src={gitIcon} alt="Git" />
            <p>Git</p>
          </div>
          <div className="skill-item">
            <img src={pythonIcon} alt="Python" />
            <p>Python</p>
          </div>
          <div className="skill-item">
            <img src={javaIcon} alt="Java" />
            <p>Java</p>
          </div>
        </div>
      </div>
      <div id="projects" className={`projects-section ${showProjects ? 'fade-in' : ''}`}>
        <h2 className="projects-title">Projects</h2>
        <div className="projects-tiles">
          <div className="project-tile">
            <img src={portfolioWebsite} alt="Portfolio Website" />
          </div>
          <div className="project-tile"></div>
          <div className="project-tile"></div>
        </div>
      </div>
    </div>
  );
}

export default App;