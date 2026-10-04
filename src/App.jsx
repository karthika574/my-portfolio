import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <Navbar />

      <main id="home" className="hero">
        <div className="grid-background"></div>

        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>

        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="hero-small">HELLO, I'M</p>

          <h1>
            Karthika<span>.</span>
          </h1>

          <h2>
            Junior Developer
            <br />
            <span>& Creative Problem Solver.</span>
          </h2>

          <p className="hero-description">
            I build clean, useful and user-friendly digital experiences.
            I enjoy turning ideas into functional web applications while
            continuously learning and improving my skills.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
          </div>

        </div>

        <div className="hero-visual">

          <div className="visual-ring ring-one"></div>
          <div className="visual-ring ring-two"></div>

          <div className="initial-card">
            <span>K</span>
          </div>

          <div className="floating-tag tag-one">
            <span>⌘</span>
            <p>Code</p>
          </div>

          <div className="floating-tag tag-two">
            <span>✦</span>
            <p>Design</p>
          </div>

          <div className="floating-tag tag-three">
            <span>↗</span>
            <p>Build</p>
          </div>

        </div>

      </main>
      <section id="about" className="about-section">
  <div className="section-label">01 — ABOUT ME</div>

  <div className="about-content">
    <div className="about-heading">
      <h2>
        I turn ideas into
        <span> useful digital experiences.</span>
      </h2>
    </div>

    <div className="about-text">
      <p>
        I'm Karthika, a BCA graduate and Junior Developer with an interest
        in web development and creative digital experiences.
      </p>

      <p>
        I enjoy building clean and user-friendly interfaces, solving
        practical problems with code, and learning new technologies
        through real-world projects.
      </p>

      <p>
        My experience includes working with PHP, MySQL, HTML, CSS and
        JavaScript while developing features for an ERP application.
        I also enjoy exploring frontend development, UI design and
        creative work.
      </p>
    </div>
  </div>
</section>
<section id="skills" className="content-section">
  <div className="section-label">02 — SKILLS</div>

  <div className="section-heading">
    <h2>Tools I use to <span>build & create.</span></h2>
    <p>
      A growing set of technical and creative skills that I use
      to turn ideas into practical digital experiences.
    </p>
  </div>
<div className="skills-grid">

  <div className="skill-card">
    <span className="skill-number">01</span>
    <h3>Frontend</h3>

    <div className="skill-logos">
      <div className="skill-logo">
        <i className="devicon-html5-plain colored"></i>
        <span>HTML</span>
      </div>

      <div className="skill-logo">
        <i className="devicon-css3-plain colored"></i>
        <span>CSS</span>
      </div>

      <div className="skill-logo">
        <i className="devicon-javascript-plain colored"></i>
        <span>JavaScript</span>
      </div>

      <div className="skill-logo">
        <i className="devicon-react-original colored"></i>
        <span>React</span>
      </div>
    </div>
  </div>


  <div className="skill-card">
    <span className="skill-number">02</span>
    <h3>Backend</h3>

    <div className="skill-logos">
      <div className="skill-logo">
        <i className="devicon-php-plain colored"></i>
        <span>PHP</span>
      </div>

      <div className="skill-logo">
        <i className="devicon-python-plain colored"></i>
        <span>Python</span>
      </div>

      <div className="skill-logo">
        <i className="devicon-flask-original"></i>
        <span>Flask</span>
      </div>
    </div>
  </div>


  <div className="skill-card">
    <span className="skill-number">03</span>
    <h3>Database</h3>

    <div className="skill-logos">
      <div className="skill-logo">
        <i className="devicon-mysql-plain colored"></i>
        <span>MySQL</span>
      </div>

      <div className="skill-logo">
        <i className="devicon-microsoftsqlserver-plain colored"></i>
        <span>SQL</span>
      </div>
    </div>
  </div>


  <div className="skill-card">
    <span className="skill-number">04</span>
    <h3>Tools & Design</h3>

    <div className="skill-logos">
      <div className="skill-logo">
        <i className="devicon-git-plain colored"></i>
        <span>Git</span>
      </div>

      <div className="skill-logo">
        <i className="devicon-github-original"></i>
        <span>GitHub</span>
      </div>

      <div className="skill-logo">
        <span className="canva-logo">C</span>
        <span>Canva</span>
      </div>

      <div className="skill-logo">
        <span className="design-icon">✦</span>
        <span>UI Design</span>
      </div>
    </div>
  </div>

</div>
</section>


<section id="experience" className="content-section experience-section">
  <div className="section-label">03 — EXPERIENCE</div>

  <div className="experience-card">
    <div className="experience-top">
      <div>
        <p className="experience-role">Junior Developer Trainee</p>
        <h3>BS Teknology Pvt Ltd</h3>
      </div>

      <span className="experience-date">2026</span>
    </div>

    <p className="experience-description">
      Working on an ERP application and contributing to web-based
      business modules using PHP, MySQL, HTML, CSS and JavaScript.
    </p>

    <div className="experience-tags">
      <span>PHP</span>
      <span>MySQL</span>
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>ERP</span>
    </div>
  </div>
</section>

<section id="projects" className="content-section projects-section">
  <div className="section-label">04 — SELECTED WORK</div>

  <div className="section-heading">
    <h2>Things I've <span>built.</span></h2>
    <p>
      A collection of frontend projects and applications I've worked on
      while learning, experimenting and solving real problems.
    </p>
  </div>

  <div className="projects-grid">

    {/* Farewell Website */}
    <article className="project-card">
      <div className="project-number">01</div>

      <div className="project-content">
        <p className="project-type">FRONTEND PROJECT</p>

        <h3>Farewell Website</h3>

        <p>
          An interactive farewell website created with a fun and engaging
          interface, including a catching emoji game for visitors.
        </p>

        <div className="project-tech">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        <div className="project-links">
          <a
            href="https://karthika574.github.io/Farewell-website/"
            target="_blank"
            rel="noreferrer"
          >
            Live Website ↗
          </a>

          <a
            href="https://github.com/karthika574/Farewell-website"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>


    {/* Story Website */}
    <article className="project-card">
      <div className="project-number">02</div>

      <div className="project-content">
        <p className="project-type">FRONTEND PROJECT</p>

        <h3>Story Website</h3>

        <p>
          A creative storytelling website designed with a visually engaging
          layout and a focus on presenting content in an interactive way.
        </p>

        <div className="project-tech">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        <div className="project-links">
          <a
            href="https://karthika574.github.io/Story/"
            target="_blank"
            rel="noreferrer"
          >
            Live Website ↗
          </a>

          <a
            href="https://github.com/karthika574/Story"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>


    {/* Todo App */}
    <article className="project-card">
      <div className="project-number">03</div>

      <div className="project-content">
        <p className="project-type">WEB APPLICATION</p>

        <h3>Todo App</h3>

        <p>
          A simple task management application designed to help users
          organize and manage their daily tasks through a clean interface.
        </p>

        <div className="project-tech">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        <div className="project-links">
          <a href="https://karthika574.github.io/Todo-app/" className="disabled-link">
            Live Demo ↗
          </a>

          <a href="https://github.com/karthika574/Todo-app" className="disabled-link">
            GitHub ↗
          </a>
        </div>
      </div>
    </article>

  </div>
</section>
<section id="final-project" className="featured-section">
  <div className="section-label">05 — FEATURED PROJECT</div>

  <div className="featured-header">
    <div>
      <p className="project-type">FINAL YEAR PROJECT</p>

      <h2>
        Smart Grocery
        <br />
        <span>List Generator.</span>
      </h2>
    </div>

    <p className="featured-intro">
      A web-based application designed to help users plan groceries,
      manage quantities, organize recipes and simplify their shopping
      experience.
    </p>
  </div>

  <div className="featured-body">

    <div className="featured-preview">
      <div className="preview-top">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="preview-content">
        <div className="preview-icon">🛒</div>

        <h3>Smart Grocery List</h3>

        <p>
          Plan. Calculate. Shop smarter.
        </p>
      </div>
    </div>

    <div className="featured-details">

      <div className="detail-item">
        <span>01</span>
        <div>
          <h3>Problem</h3>
          <p>
            Managing grocery items, quantities and shopping plans
            manually can be time-consuming and difficult to organize.
          </p>
        </div>
      </div>

      <div className="detail-item">
        <span>02</span>
        <div>
          <h3>Solution</h3>
          <p>
            The application provides a centralized platform to create
            grocery lists, manage quantities and organize shopping plans.
          </p>
        </div>
      </div>

      <div className="detail-item">
        <span>03</span>
        <div>
          <h3>Key Features</h3>
          <p>
            Grocery list generation, quantity management, recipe
            support, shopping cart, 7-day planning, login and history.
          </p>
        </div>
      </div>

    </div>
  </div>

  <div className="featured-footer">

    <div className="project-tech">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>Flask</span>
      <span>MySQL</span>
    </div>

    <a href="/Smart_Grocery_List_Generator_Summary.pdf"
  target="_blank"
  rel="noreferrer"
  className="case-study-button"
>
  View Full Case Study <span>↗</span>
</a>

  </div>
</section>

<section id="creative" className="content-section creative-section">
  <div className="section-label">06 — CREATIVE SIDE</div>

  <div className="section-heading">
    <h2>Beyond <span>code.</span></h2>

    <p>
      I also enjoy drawing, visual design and creating digital content.
      This creative side helps me approach development with a stronger
      eye for detail and user experience.
    </p>
  </div>

  <div className="creative-grid">

   <div className="creative-card drawing-card">
  <a href="#" onClick={(e) => e.preventDefault()}>
    <img src="/kirshna.jpg" alt="My Drawing" />

    <div className="drawing-overlay">
      <span>View my drawings →</span>
    </div>
  </a>
</div>

    <div className="creative-card canva-card">
  <a href="#canva-gallery">
    <img
      src="/Canva-front.png"
      alt="Ganesh Tiles Work - Front"
    />

    <div className="canva-overlay">
      <span>Explore my designs →</span>
    </div>
  </a>
</div>

    <div class="creative-card pinterest-card">
    <a href="https://in.pinterest.com/karthieditz07/" target="_blank" rel="noopener noreferrer">
        
       <img src="/pinterest-cover.png" alt="My Pinterest" />
        <div class="pinterest-overlay">
            <span>View my Pinterest account →</span>
        </div>

    </a>
</div>

  </div>
</section>
<section id="education" className="content-section education-section">
  <div className="section-label">07 — EDUCATION</div>

  <div className="education-card">
    <div>
      <p className="education-year">2023 — 2026</p>
      <h2>Bachelor of Computer Applications</h2>
      <p>VV College for Women</p>
    </div>

    <span className="education-icon">🎓</span>
  </div>

  <div className="education-card">
    <div>
      <p className="education-year">School Education</p>
      <h2>Kshatriya Girls Higher Secondary School</h2>
    </div>

    <span className="education-icon">✦</span>
  </div>
</section>


<section id="contact" className="contact-section">
  <div className="section-label">08 — LET'S CONNECT</div>

  <div className="contact-content">
    <p className="contact-small">HAVE AN OPPORTUNITY?</p>

    <h2>
      Let's build something
      <span> meaningful.</span>
    </h2>

    <p className="contact-description">
      I'm open to opportunities where I can learn, contribute and
      grow as a developer. Feel free to reach out.
    </p>


    <div className="contact-buttons">
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=karthikaganesan924@gmail.com"
  target="_blank" rel="noopener noreferrer" className="contact-button primary">
        Email Me ↗
      </a>

      <a href="https://www.linkedin.com/in/karthika-ganesan-933861377/" className="contact-button">
        LinkedIn ↗
      </a>

      <a href="https://github.com/karthika574" target="_blank" rel="noreferrer" className="contact-button">
  Karthika's GitHub ↗
</a>
    </div>

    <a
  href="/karthika_CV-1.pdf"
  target="_blank"
  rel="noreferrer"
  className="resume-button"
>
  Download Resume ↓
</a>
  </div>
</section>


<footer className="footer">
  <div className="footer-logo">
    Karthika<span>.</span>
  </div>

  <p>Designed & built by Karthika © 2026</p>

  <a href="#home">Back to top ↑</a>
</footer>
    </div>
  );
}

export default App;