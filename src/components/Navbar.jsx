function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Karthika<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </div>

      <a href="#contact" className="nav-contact">
        Let's Talk <span>↗</span>
      </a>
    </nav>
  );
}

export default Navbar;