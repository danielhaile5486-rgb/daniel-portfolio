import React, { useState } from 'react';
import { useScrollReveal } from '../App';

const projects = [
  {
    id: 1,
    title: 'University Cafeteria Management System',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    emoji: '🍽',
    description: 'A web-based application designed to simplify cafeteria operations by managing food items, orders, and customer information. The system improves efficiency and helps streamline daily cafeteria activities, reducing manual workload for cafeteria staff.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'SQL', 'MySQL'],
    features: [
      'Food menu management (add, edit, delete items)',
      'Real-time order tracking and management',
      'Customer database with order history',
      'Sales reporting and analytics dashboard',
      'Responsive design for cafeteria tablets',
      'Role-based access (admin & cashier)',
    ],
    github: 'https://github.com/danielhaile5486-rgb/cafeteria-management-system',
    demo: 'https://hu-cafeteria-management-system.vercel.app',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Netflix Clone',
    category: 'frontend',
    categoryLabel: 'Frontend',
    emoji: '🎬',
    description: 'A responsive Netflix-inspired web application featuring modern UI design, movie browsing functionality, and an engaging user experience. Built using modern web technologies to replicate the look, feel, and interactivity of the original platform.',
    technologies: ['React', 'CSS', 'JavaScript', 'Flexbox', 'Grid'],
    features: [
      'Netflix-style hero banner with featured content',
      'Horizontally scrollable content rows by category',
      'Hover effects revealing title details and rating',
      'Fully responsive layout (mobile, tablet, desktop)',
      'Dark themed UI with Netflix color palette',
      'Smooth CSS transitions and animations',
    ],
    github: 'https://github.com/danielhaile5486-rgb/netflix-clone',
    demo: 'https://netflix-clone-app-virid.vercel.app',
    status: 'Completed',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
];

function FeatureItem({ text }) {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.4rem 0' }}>
      <span style={{ color: 'var(--text-accent)', fontSize: '0.75rem', marginTop: '0.3rem', flexShrink: 0 }}>◆</span>
      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{text}</span>
    </div>
  );
}

function TechBadge({ tech }) {
  return (
    <span style={{
      padding: '0.3rem 0.75rem',
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-subtle)',
      borderRadius: '6px',
      fontSize: '0.8rem',
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-secondary)',
    }}>{tech}</span>
  );
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="reveal card" style={{ marginBottom: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '14px',
          background: 'rgba(239,159,39,0.1)', border: '1px solid var(--border-accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.6rem', flexShrink: 0,
        }}>
          {project.emoji}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {project.title}
            </h3>
            <span style={{
              padding: '0.2rem 0.7rem', borderRadius: '100px',
              background: 'rgba(239,159,39,0.1)', border: '1px solid var(--border-accent)',
              fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-accent)',
            }}>{project.categoryLabel}</span>
            <span style={{
              padding: '0.2rem 0.7rem', borderRadius: '100px',
              background: 'rgba(74, 222, 128, 0.08)', border: '1px solid rgba(74,222,128,0.2)',
              fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#4ade80',
            }}>{project.status}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        {project.technologies.map(t => <TechBadge key={t} tech={t} />)}
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          color: 'var(--text-accent)', fontSize: '0.85rem', fontWeight: 500,
          background: 'none', border: 'none', cursor: 'pointer',
          padding: '0', marginBottom: expanded ? '1.25rem' : '0',
          transition: 'opacity 0.2s ease',
        }}
      >
        <span style={{ transition: 'transform 0.2s ease', display: 'inline-block', transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>▶</span>
        {expanded ? 'Hide' : 'View'} Key Features
      </button>

      {/* Features list */}
      {expanded && (
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1.25rem',
          animation: 'fadeUp 0.3s ease',
        }}>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            Features
          </h4>
          {project.features.map(f => <FeatureItem key={f} text={f} />)}
        </div>
      )}

      {/* Live Preview */}
<div style={{
  marginTop: '1.5rem',
  borderRadius: 'var(--radius-md)',
  overflow: 'hidden',
  border: '1px solid var(--border-subtle)',
  position: 'relative',
  height: '320px',
}}>
  {/* Top bar */}
  <div style={{
    height: '36px',
    background: 'var(--bg-secondary)',
    borderBottom: '1px solid var(--border-subtle)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',
    gap: '0.5rem',
  }}>
    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e' }} />
    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
    <span style={{
      flex: 1,
      marginLeft: '0.5rem',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: '6px',
      padding: '0.2rem 0.75rem',
      fontSize: '0.72rem',
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-muted)',
    }}>
      {project.demo}
    </span>
  </div>

  {/* iframe */}
  <iframe
    src={project.demo}
    title={project.title}
    style={{
      width: '100%',
      height: '284px',
      border: 'none',
      display: 'block',
    }}
    loading="lazy"
    sandbox="allow-scripts allow-same-origin allow-forms"
  />
</div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
          style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
        >
          GitHub →
        </a>
        <span style={{
          display: 'flex', alignItems: 'center',
          padding: '0.6rem 1.25rem',
          color: 'var(--text-muted)',
          fontSize: '0.82rem',
          fontFamily: 'var(--font-mono)',
        }}>
          Demo link coming soon
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  useScrollReveal();
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="page-content">
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>

        {/* ── Header ── */}
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">Portfolio</p>
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle">
            A showcase of web applications built with real-world functionality, clean code, and thoughtful design.
          </p>
        </div>

        {/* ── Filter tabs ── */}
        <div className="reveal" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '100px',
                border: '1px solid',
                borderColor: filter === cat.id ? 'var(--text-accent)' : 'var(--border-normal)',
                background: filter === cat.id ? 'rgba(239,159,39,0.1)' : 'transparent',
                color: filter === cat.id ? 'var(--text-accent)' : 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.label}
              <span style={{ marginLeft: '0.5rem', opacity: 0.6, fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
                {cat.id === 'all' ? projects.length : projects.filter(p => p.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* ── Projects ── */}
        <div>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* ── More coming ── */}
        <div className="reveal" style={{
          marginTop: '2rem', padding: '3rem',
          border: '1px dashed var(--border-normal)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
            // More projects in development...
          </p>
          <a href="https://github.com/danielhaile5486-rgb" target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--text-accent)', fontSize: '0.9rem', fontWeight: 500 }}>
            See GitHub for latest →
          </a>
        </div>
      </div>
    </div>
  );
}
