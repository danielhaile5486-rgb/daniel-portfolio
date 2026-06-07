import React, { useEffect, useRef } from 'react';
import { useScrollReveal } from '../App';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend Development',
    icon: '◈',
    description: 'Building responsive, interactive user interfaces',
    skills: [
      { name: 'HTML', level: 85, note: 'Semantic, accessible markup' },
      { name: 'CSS', level: 80, note: 'Flexbox, Grid, animations, responsive design' },
      { name: 'JavaScript', level: 72, note: 'ES6+, DOM, async/await, APIs' },
      { name: 'React', level: 65, note: 'Components, hooks, state management' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend Development',
    icon: '⬡',
    description: 'Server-side logic and API development',
    skills: [
      { name: 'Node.js', level: 58, note: 'REST APIs, Express.js, middleware' },
    ],
  },
  {
    id: 'database',
    label: 'Database Management',
    icon: '◇',
    description: 'Data modeling, querying, and management',
    skills: [
      { name: 'SQL', level: 62, note: 'CRUD, joins, normalization, MySQL' },
    ],
  },
];

const otherSkills = [
  { name: 'Git & GitHub', icon: '◆' },
  { name: 'Responsive Design', icon: '◆' },
  { name: 'REST APIs', icon: '◆' },
  { name: 'Problem Solving', icon: '◆' },
  { name: 'VS Code', icon: '◆' },
  { name: 'Command Line', icon: '◆' },
  { name: 'Web Performance', icon: '◆' },
  { name: 'Debugging', icon: '◆' },
];

function AnimatedBar({ level, name }) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.width = level + '%';
            }, 200);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div style={{
      height: '6px',
      background: 'var(--border-subtle)',
      borderRadius: '3px',
      overflow: 'hidden',
      flex: 1,
    }}>
      <div
        ref={barRef}
        style={{
          height: '100%',
          width: '0%',
          background: `linear-gradient(90deg, var(--text-accent), var(--amber-100))`,
          borderRadius: '3px',
          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  );
}

function SkillRow({ skill, index }) {
  return (
    <div style={{
      padding: '1rem 0',
      borderBottom: '1px solid var(--border-subtle)',
      animation: `fadeUp 0.5s ease ${index * 0.08}s both`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
            {skill.name}
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{skill.note}</span>
        </div>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--text-accent)',
          fontWeight: 600,
        }}>{skill.level}%</span>
      </div>
      <AnimatedBar level={skill.level} name={skill.name} />
    </div>
  );
}

function CategoryCard({ category, delay }) {
  return (
    <div className="reveal card" style={{ animationDelay: delay }}>
      {/* Category header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '10px',
          background: 'rgba(239,159,39,0.1)', border: '1px solid var(--border-accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.1rem', color: 'var(--text-accent)',
        }}>{category.icon}</div>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            {category.label}
          </h3>
        </div>
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)' }}>
        {category.description}
      </p>

      {/* Skills */}
      <div>
        {category.skills.map((skill, i) => <SkillRow key={skill.name} skill={skill} index={i} />)}
      </div>
    </div>
  );
}

export default function Skills() {
  useScrollReveal();

  return (
    <div className="page-content">
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>

        {/* ── Header ── */}
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <p className="section-label">Technical Skills</p>
          <h1 className="section-title">What I Work With</h1>
          <p className="section-subtitle">
            A growing toolkit built through coursework, self-study, and real project experience.
            Proficiency levels reflect honest self-assessment.
          </p>
        </div>

        {/* ── Skill Categories ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} delay={`${i * 0.1}s`} />
          ))}
        </div>

        {/* ── Legend note ── */}
        <div className="reveal" style={{
          padding: '1rem 1.5rem',
          background: 'rgba(239,159,39,0.05)',
          border: '1px solid var(--border-accent)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '4rem',
          display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
        }}>
          <span style={{ color: 'var(--text-accent)', marginTop: '0.1rem', flexShrink: 0 }}>ℹ</span>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
            <strong style={{ color: 'var(--text-primary)' }}>Note on proficiency levels:</strong> These percentages
            represent my honest self-assessment based on practical project experience, not industry-standard benchmarks.
            I'm still growing — and that's intentional.
          </p>
        </div>

        {/* ── Other Skills ── */}
        <div className="reveal" style={{ marginBottom: '2rem' }}>
          <p className="section-label">Also Familiar With</p>
          <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Tools & Concepts</h2>
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
          {otherSkills.map(s => (
            <div key={s.name} style={{
              padding: '0.875rem 1rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              transition: 'all 0.2s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-accent)';
              e.currentTarget.style.background = 'var(--bg-card-hover)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.background = 'var(--bg-card)';
            }}>
              <span style={{ color: 'var(--text-accent)', fontSize: '0.6rem' }}>{s.icon}</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{s.name}</span>
            </div>
          ))}
        </div>

        {/* ── Learning goals ── */}
        <div className="reveal" style={{
          marginTop: '4rem',
          padding: '2.5rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
        }}>
          <p className="section-label" style={{ marginBottom: '0.5rem' }}>What's Next</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Currently Learning
          </h3>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['TypeScript', 'Next.js', 'MongoDB', 'REST API Design', 'Testing (Jest)', 'Docker basics'].map(t => (
              <span key={t} style={{
                padding: '0.4rem 1rem',
                background: 'var(--bg-secondary)',
                border: '1px dashed var(--border-normal)',
                borderRadius: '100px',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
