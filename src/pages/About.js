import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../App';

const timelineItems = [
  {
    year: '2020',
    title: 'First Lines of Code',
    desc: 'Discovered programming through HTML and CSS — built my first static webpage and was instantly hooked.',
    icon: '◈',
  },
  {
    year: '2021',
    title: 'JavaScript & Logic',
    desc: 'Dove deep into JavaScript, learning DOM manipulation, events, and the fundamentals of programming logic.',
    icon: '⬡',
  },
  {
    year: '2022',
    title: 'University — Haramaya',
    desc: 'Enrolled in Information Systems at Haramaya University, combining theoretical knowledge with practical development.',
    icon: '◎',
  },
  {
    year: '2023',
    title: 'React & Full Stack',
    desc: 'Built my first React projects, learned Node.js and SQL, and started connecting frontend to backend systems.',
    icon: '◇',
  },
  {
    year: '2024',
    title: 'First Real Projects',
    desc: 'Delivered the University Cafeteria Management System and Netflix Clone — applying full-stack skills to real problems.',
    icon: '◆',
  },
  {
    year: '2025 →',
    title: 'Seeking Internship',
    desc: 'Actively looking for internship opportunities to gain industry experience and grow as a professional developer.',
    icon: '★',
    accent: true,
  },
];

export default function About() {
  useScrollReveal();

  return (
    <div className="page-content">
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>

        {/* ── Header ── */}
        <div className="reveal" style={{ marginBottom: '5rem', maxWidth: '700px' }}>
          <p className="section-label">Who I Am</p>
          <h1 className="section-title">About Me</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.75 }}>
            Hello! I'm Daniel Haile, an Information Systems student with a strong interest in software
            development and web technologies. My journey began with learning HTML, CSS, and JavaScript,
            and has grown into building full-stack applications using React, Node.js, and SQL.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.75, marginTop: '1rem' }}>
            I enjoy solving real-world problems through technology and continuously improving my technical
            skills. My goal is to become a skilled Full Stack Developer capable of building scalable
            and impactful digital solutions.
          </p>
        </div>

        {/* ── Two columns: Education + Interests ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>

          {/* Education card */}
          <div className="reveal card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(239,159,39,0.1)', border: '1px solid var(--border-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
              }}>◎</div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)' }}>Education</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>Academic Background</p>
              </div>
            </div>
            <div style={{ borderLeft: '2px solid var(--border-accent)', paddingLeft: '1.25rem' }}>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>Information Systems</p>
              <p style={{ color: 'var(--text-accent)', fontSize: '0.9rem', margin: '0.2rem 0' }}>Haramaya University</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Haramaya, Oromia Region, Ethiopia</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>Current Student</p>
            </div>
          </div>

          {/* Career Goal card */}
          <div className="reveal card" style={{ animationDelay: '0.1s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(239,159,39,0.1)', border: '1px solid var(--border-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
              }}>★</div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)' }}>Career Goal</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>Where I'm Headed</p>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Seeking internship opportunities to contribute my technical skills, gain hands-on industry
              experience, and continue growing as a Full Stack Developer capable of building scalable,
              impactful digital solutions.
            </p>
          </div>

          {/* Interests card */}
          <div className="reveal card" style={{ animationDelay: '0.2s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(239,159,39,0.1)', border: '1px solid var(--border-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
              }}>◇</div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)' }}>Interests</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>Beyond Code</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Web Development', 'Open Source', 'UI/UX Design', 'Problem Solving', 'Tech Trends', 'Learning'].map(i => (
                <span key={i} className="tag">{i}</span>
              ))}
            </div>
          </div>

          {/* Location card */}
          <div className="reveal card" style={{ animationDelay: '0.3s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(239,159,39,0.1)', border: '1px solid var(--border-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
              }}>⬡</div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)' }}>Location</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>Based In</p>
              </div>
            </div>
            <div>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>Shager City</p>
              <p style={{ color: 'var(--text-accent)', fontSize: '0.9rem' }}>Oromia Region, Ethiopia</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem', fontFamily: 'var(--font-mono)' }}>Open to remote opportunities worldwide</p>
            </div>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="reveal" style={{ marginBottom: '2rem' }}>
          <p className="section-label">My Journey</p>
          <h2 className="section-title">Technical Timeline</h2>
          <p className="section-subtitle">From first HTML tags to full-stack applications.</p>
        </div>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '0', top: '0', bottom: '0',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--text-accent), transparent)',
          }} />

          {timelineItems.map((item, i) => (
            <div key={item.year} className="reveal" style={{
              position: 'relative',
              paddingBottom: '2.5rem',
              animationDelay: `${i * 0.1}s`,
            }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '-2.6rem', top: '0',
                width: '22px', height: '22px',
                borderRadius: '50%',
                background: item.accent ? 'var(--text-accent)' : 'var(--bg-card)',
                border: `2px solid ${item.accent ? 'var(--text-accent)' : 'var(--border-normal)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.55rem',
                color: item.accent ? '#060b18' : 'var(--text-muted)',
                boxShadow: item.accent ? 'var(--shadow-glow)' : 'none',
              }}>●</div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: item.accent ? 'var(--text-accent)' : 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                  minWidth: '60px',
                  paddingTop: '0.1rem',
                }}>{item.year}</span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {item.icon} {item.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '3rem', borderTop: '1px solid var(--border-subtle)' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Want to see what I've built?</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/projects" className="btn-primary">View Projects →</Link>
            <Link to="/skills" className="btn-secondary">See My Skills</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
