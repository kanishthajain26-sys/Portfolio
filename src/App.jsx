
import { useState } from "react";
import "./App.css";
import Contact from "./Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Git",
    "GitHub",
  ];

  const projects = [
    {
      title: "CollabSphere",
      description:
        "A collaboration platform designed to help users organize projects and collaborate efficiently.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      live: "https://collabsphere-nrfet5gk7-kanishthajain26-2897s-projects.vercel.app",
      code: "https://github.com/kanishthajain26-sys",
    },
    {
  title: "E-Commerce Website",
  description:
    "A responsive e-commerce website where users can explore products and enjoy a smooth online shopping experience through a clean and user-friendly interface.",
  technologies: ["React.js", "JavaScript", "CSS"],
  live: "https://e-commerce-website-one-nu.vercel.app/",
  code: "https://github.com/kanishthajain26-sys",
},
      
    {
      title: "Student Feedback Manager",
      description:
        "A student feedback management project focused on collecting and managing feedback through a backend API.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      live: "https://student-feedback-manager-backend.vercel.app/",
      code: "https://github.com/kanishthajain26-sys",
    },
  ];

  const certificates = [
    {
      title: "JavaScript Basics",
      issuer: "Coursera",
      link: "https://coursera.org/share/1793f3730869fa76efc2a4699a3aaaf9",
    },
    {
      title: "Prompt Engineering",
      issuer: "Coursera",
      link: "https://coursera.org/share/0d0b5feeae1b9f9c83ab97230bfdcb01",
    },
    {
      title: "Certificate of Appreciation",
      issuer: "NavGurukul",
      link: "https://drive.google.com/file/d/1fdbjcK0QVFY74OfA_RNBij3XITjlcs6G/view?usp=sharing",
    },
    {
      title: "Coding Certificate",
      issuer: "CodeChef",
      link: "https://www.codechef.com/certificates/public/49e2906",
    },
  ];

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          Kanishtha<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Education", "Certificates", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>

              


            )
          )}
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M</p>
            <h1>
              Kanishtha <span>Jain</span>
            </h1>
            <h2>Aspiring Full Stack Developer</h2>
            <p className="hero-description">
              I am a web development learner who enjoys building practical
              applications and solving coding problems. I am continuously
              improving my technical skills through hands-on projects and
              consistent learning.
            </p>

            <div className="hero-buttons">
              <a className="primary-btn" href="#projects">
                Explore My Projects <span>↗</span>
              </a>
              <a className="secondary-btn" href="#contact">
                Let's Connect <span>↗</span>
              </a>
             
           

<a
  className="primary-btn"
  href="/Kanishtha_Jain_FlowCV_Resume_2026-10-23.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  View Resume <span>↗</span>
</a>








             
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/kanishthajain26-sys"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-icon">{"</>"}</span>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kanishtha-jain-45324a3b9/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-icon">in</span>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-glow" />
              <div className="initials">KJ</div>
              <h3>Kanishtha Jain</h3>
              <p>Web Development Learner</p>
              <div className="profile-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>Node.js</span>
              </div>
              <div className="profile-status">
                <span className="status-dot" />
                Learning & Building
              </div>
            </div>
            <div className="floating-badge badge-top">{"</>"}</div>
            <div className="floating-badge badge-bottom">{"{}"}</div>
          </div>
        </section>

        <section className="section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
          </div>
          <div className="about-card">
            <div className="about-mark">KJ</div>
            <div>
              <h3>Learning, Building, Growing</h3>
              <p>
                I am pursuing a B.Sc. with Physics, Chemistry, and Mathematics
                while learning web development at NavGurukul in Pune. I enjoy
                creating web applications, practicing coding challenges, and
                learning how frontend and backend technologies work together.
                My goal is to grow as a software developer through practical
                experience, teamwork, and continuous learning.
              </p>
            </div>
          </div>
        </section>

        <section className="section-wrap" id="skills">
          <div className="section-heading">
            <p className="eyebrow">MY TECH TOOLKIT</p>
            <h2>Skills & <span>Technologies</span></h2>
            <p className="section-description">
              Technologies and tools I use while learning and building projects.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span className="skill-symbol">{"</>"}</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap" id="projects">
          <div className="section-heading">
            <p className="eyebrow">WHAT I'VE BUILT</p>
            <h2>Featured <span>Projects</span></h2>
            <p className="section-description">
              Practical projects that reflect my learning and development journey.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-symbol">{"{ }"}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="demo-pending">Live demo coming soon</span>
                  )}
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link secondary-link"
                  >
                    View Code ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="section-note">
            Note: Student Feedback Manager link currently opens the backend API.
            The E-Commerce Website is available through its live demo link.
          </p>
        </section>

        <section className="section-wrap" id="education">
          <div className="section-heading">
            <p className="eyebrow">MY BACKGROUND</p>
            <h2>Education <span>Journey</span></h2>
            <p className="section-description">
              My academic background and ongoing technical learning.
            </p>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-date">2024 – Present</span>
                <h3>Bachelor of Science (B.Sc.) — PCM</h3>
                <h4>Government Motilal Vigyan Mahavidyalaya</h4>
                <p>
                  I am pursuing a Bachelor of Science degree with Physics,
                  Chemistry, and Mathematics. These subjects help me develop
                  analytical thinking, logical reasoning, and a structured
                  approach to solving problems.
                </p>
                <div className="education-tags">
                  <span>Physics</span>
                  <span>Chemistry</span>
                  <span>Mathematics</span>
                </div>
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-date">2026 – Present</span>
                <h3>Web Development Certificate Course</h3>
                <h4>NavGurukul Foundation for Social Welfare · Pune</h4>
                <p>
                  I am learning web development through hands-on practice and
                  project-based learning. My training includes frontend
                  development, backend APIs, database fundamentals, version
                  control, and building full-stack applications.
                </p>
                <div className="education-tags">
                  <span>HTML & CSS</span>
                  <span>JavaScript</span>
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-card">
                <h3>Higher Secondary Education</h3>
                <h4>Kendriya Vidyalaya, Bairagarh</h4>
                <p>
                  My school education helped build my academic foundation,
                  learning discipline, and curiosity to explore new subjects
                  and skills.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-wrap" id="certificates">
          <div className="section-heading">
            <p className="eyebrow">MILESTONES & ACHIEVEMENTS</p>
            <h2>My <span>Certificates</span></h2>
            <p className="section-description">
              Courses and achievements that support my learning journey.
            </p>
          </div>
          <div className="certificates-grid">
            {certificates.map((certificate, index) => (
              <article className="certificate-card" key={certificate.title}>
                <div className="certificate-icon">✦</div>
                <span className="certificate-number">
                  CERTIFICATE 0{index + 1}
                </span>
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Certificate ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <Contact />
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          Kanishtha<span>.</span>
        </a>
        <p>Designed and built by Kanishtha Jain.</p>
        <div className="footer-links">
          <a
            href="https://github.com/kanishthajain26-sys"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kanishtha-jain-45324a3b9/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Kanishtha Jain. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;