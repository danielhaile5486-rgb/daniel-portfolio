import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../App';

// ── Animated background dots ──
function BackgroundGrid() {
  return (
    <div style={{
      position: 'absolute', inset: 0, overflow: 'hidden',
      pointerEvents: 'none', zIndex: 0,
    }}>
      {/* Radial amber glow */}
      <div style={{
        position: 'absolute', top: '-20%', left: '50%',
        transform: 'translateX(-50%)',
        width: '800px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(239,159,39,0.07) 0%, transparent 70%)',
      }} />
      {/* Dot grid */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.3 }}>
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="var(--text-muted)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      {/* Geometric accent lines */}
      <svg style={{ position: 'absolute', top: '10%', right: '5%', width: '300px', height: '300px', opacity: 0.12 }} viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="100" fill="none" stroke="var(--text-accent)" strokeWidth="0.8" />
        <circle cx="150" cy="150" r="140" fill="none" stroke="var(--text-accent)" strokeWidth="0.5" strokeDasharray="4,8" />
        <line x1="50" y1="150" x2="250" y2="150" stroke="var(--text-accent)" strokeWidth="0.5" />
        <line x1="150" y1="50" x2="150" y2="250" stroke="var(--text-accent)" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

// ── Typing animation ──
function TypedText({ words }) {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timer;
    if (!deleting && charIndex < word.length) {
      timer = setTimeout(() => setCharIndex(c => c + 1), 80);
    } else if (!deleting && charIndex === word.length) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex(c => c - 1), 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex(i => (i + 1) % words.length);
    }
    setDisplay(word.slice(0, charIndex));
    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    <span style={{ color: 'var(--text-accent)' }}>
      {display}
      <span style={{ animation: 'fadeIn 0.5s ease infinite alternate', opacity: 0.8 }}>|</span>
    </span>
  );
}

// ── Skill pill ──
function SkillPill({ label }) {
  return (
    <span style={{
      padding: '0.4rem 1rem',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-normal)',
      borderRadius: '100px',
      fontSize: '0.85rem',
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap',
      transition: 'all 0.2s ease',
      cursor: 'default',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'var(--border-accent)';
      e.currentTarget.style.color = 'var(--text-accent)';
      e.currentTarget.style.background = 'rgba(239,159,39,0.05)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border-normal)';
      e.currentTarget.style.color = 'var(--text-secondary)';
      e.currentTarget.style.background = 'var(--bg-card)';
    }}
    >
      {label}
    </span>
  );
}

// ── Mini Project Card ──
function MiniProjectCard({ title, desc, tags, delay }) {
  return (
    <div className="reveal card" style={{ animationDelay: delay, flex: 1, minWidth: '280px' }}>
      <div style={{
        width: '44px', height: '44px', borderRadius: '12px',
        background: 'rgba(239,159,39,0.1)',
        border: '1px solid var(--border-accent)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.3rem', marginBottom: '1rem',
      }}>⬡</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>{desc}</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  );
}

export default function Home() {
  useScrollReveal();

  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL'];

  return (
    <div className="page-content">
      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingBottom: '4rem' }}>
        <BackgroundGrid />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem' }}>
          {/* Status badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(239,159,39,0.08)', border: '1px solid var(--border-accent)', borderRadius: '100px', marginBottom: '2rem', animation: 'fadeUp 0.6s ease' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', animation: 'pulse-amber 2s infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-accent)', letterSpacing: '0.08em' }}>Open to internship opportunities</span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
            animation: 'fadeUp 0.6s ease 0.1s both',
          }}>
            Daniel Haile
          </h1>

          {/* Typed title */}
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            fontWeight: 400,
            marginBottom: '1.75rem',
            animation: 'fadeUp 0.6s ease 0.2s both',
            minHeight: '3rem',
          }}>
            <TypedText words={['Full Stack Developer', 'React Developer', 'Problem Solver', 'IS Student']} />
          </h2>

          {/* Bio */}
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '580px',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
            animation: 'fadeUp 0.6s ease 0.3s both',
          }}>
            Information Systems student at Haramaya University, passionate about building modern web applications
            using JavaScript, React, Node.js, and SQL. Seeking internship opportunities to apply skills
            and contribute to meaningful projects.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeUp 0.6s ease 0.4s both' }}>
            <Link to="/projects" className="btn-primary">
              View Projects →
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>

          {/* Skills scroll */}
          <div style={{ marginTop: '4rem', animation: 'fadeUp 0.6s ease 0.5s both' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Tech Stack</p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {skills.map(s => <SkillPill key={s} label={s} />)}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          animation: 'float 2s ease infinite',
          opacity: 0.5,
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>SCROLL</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--text-muted), transparent)' }} />
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: '3rem' }}>
            <p className="section-label">Featured Work</p>
            <h2 className="section-title">Projects I've Built</h2>
            <p className="section-subtitle">Real-world applications demonstrating full-stack development skills.</p>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <MiniProjectCard
              title="University Cafeteria Management System"
              desc="Web-based application to manage food items, orders, and customer data — streamlining daily cafeteria operations."
              tags={['HTML', 'CSS', 'JavaScript', 'SQL']}
              delay="0.1s"
            />
            <MiniProjectCard
              title="Netflix Clone"
              desc="Responsive Netflix-inspired web app featuring modern UI design, movie browsing, and engaging user experience."
              tags={['React', 'CSS', 'JavaScript']}
              delay="0.2s"
            />
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }} className="reveal">
            <Link to="/projects" className="btn-secondary">See All Projects →</Link>
          </div>
        </div>
      </section>

      {/* ── QUICK STATS ── */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { num: '2+', label: 'Projects Built' },
              { num: '6+', label: 'Technologies' },
              { num: '3+', label: 'Years Learning' },
              { num: '∞', label: 'Curiosity' },
            ].map(({ num, label }) => (
              <div key={label} className="reveal">
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 700, color: 'var(--text-accent)', lineHeight: 1 }}>{num}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="reveal" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-accent)',
            borderRadius: 'var(--radius-xl)',
            padding: '4rem 3rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              background: 'radial-gradient(ellipse at center, rgba(239,159,39,0.05) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <p className="section-label" style={{ marginBottom: '1rem' }}>Let's Collaborate</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Looking for an Internship
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              I'm actively seeking opportunities to grow, contribute, and learn from experienced developers in a professional environment.
            </p>
            <Link to="/contact" className="btn-primary">Reach Out →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
