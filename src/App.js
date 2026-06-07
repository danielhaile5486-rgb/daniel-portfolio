import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import './styles/global.css';

// ── Pages ──
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

// ── Theme Context ──
export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

// ── Scroll Reveal Hook ──
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
}

// ── Navbar ──
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      background: scrolled ? 'var(--nav-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <span style={{
            width: '36px', height: '36px',
            background: 'var(--text-accent)',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1rem',
            color: '#060b18',
          }}>D</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
            Daniel Haile
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '0.9rem',
                color: isActive ? 'var(--text-accent)' : 'var(--text-secondary)',
                background: isActive ? 'rgba(239, 159, 39, 0.08)' : 'transparent',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
              })}
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            style={{
              marginLeft: '0.5rem',
              width: '40px', height: '40px',
              borderRadius: '10px',
              background: 'var(--border-subtle)',
              border: '1px solid var(--border-normal)',
              color: 'var(--text-secondary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀' : '◐'}
          </button>
        </div>

        {/* Mobile menu button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="mobile-nav">
          <button onClick={toggleTheme} style={{
            width: '36px', height: '36px', borderRadius: '8px',
            background: 'var(--border-subtle)', border: '1px solid var(--border-normal)',
            color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1rem',
          }} aria-label="Toggle theme">
            {theme === 'dark' ? '☀' : '◐'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: '36px', height: '36px', borderRadius: '8px',
              background: 'var(--border-subtle)', border: '1px solid var(--border-normal)',
              color: 'var(--text-primary)', cursor: 'pointer', fontSize: '1.2rem',
            }}
            aria-label="Open menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '72px', left: 0, right: 0, bottom: 0,
          background: 'var(--bg-secondary)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: '1.5rem',
          zIndex: 999,
          animation: 'fadeIn 0.2s ease',
        }}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                fontSize: '1.5rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                color: isActive ? 'var(--text-accent)' : 'var(--text-primary)',
                textDecoration: 'none',
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

// ── Footer ──
function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      padding: '2.5rem 0',
      marginTop: '5rem',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1rem', color: 'var(--text-primary)' }}>Daniel Haile</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginLeft: '0.75rem' }}>Full Stack Developer</span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="https://github.com/danielhaile5486-rgb" target="_blank" rel="noreferrer"
            style={{ color: 'var(--text-muted)', fontSize: '0.85rem', transition: 'color 0.2s ease' }}
            onMouseEnter={e => e.target.style.color = 'var(--text-accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >GitHub</a>
          <a href="mailto:danielhaile5486@gmail.com"
            style={{ color: 'var(--text-muted)', fontSize: '0.85rem', transition: 'color 0.2s ease' }}
            onMouseEnter={e => e.target.style.color = 'var(--text-accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >Email</a>
          <Link to="/contact"
            style={{ color: 'var(--text-muted)', fontSize: '0.85rem', transition: 'color 0.2s ease' }}
            onMouseEnter={e => e.target.style.color = 'var(--text-accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >Contact</Link>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Daniel Haile. Haramaya University.
        </p>
      </div>
    </footer>
  );
}

// ── Page Wrapper (auto-scroll to top) ──
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// ── App ──
function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
