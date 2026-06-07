import React, { useState } from 'react';
import { useScrollReveal } from '../App';

function ContactCard({ icon, label, value, href, delay }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="reveal"
      style={{
        display: 'flex', alignItems: 'center', gap: '1rem',
        padding: '1.25rem 1.5rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        animationDelay: delay,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--border-accent)';
        e.currentTarget.style.background = 'var(--bg-card-hover)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.background = 'var(--bg-card)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{
        width: '44px', height: '44px', borderRadius: '12px',
        background: 'rgba(239,159,39,0.1)', border: '1px solid var(--border-accent)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.2rem', flexShrink: 0,
      }}>{icon}</div>
      <div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{label}</p>
        <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>{value}</p>
      </div>
      <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.8rem' }}>↗</span>
    </a>
  );
}

export default function Contact() {
  useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate submission (replace with real backend/EmailJS/Formspree)
    await new Promise(r => setTimeout(r, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-normal)',
    borderRadius: 'var(--radius-md)',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  return (
    <div className="page-content">
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>

        {/* ── Header ── */}
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <p className="section-label">Get In Touch</p>
          <h1 className="section-title">Let's Connect</h1>
          <p className="section-subtitle">
            I'm actively seeking internship opportunities. Whether you have a position, a project,
            or just want to say hello — my inbox is open.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

          {/* ── Contact Info ── */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Contact Information
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
              <ContactCard
                icon="✉"
                label="Email"
                value="danielhaile5486@gmail.com"
                href="mailto:danielhaile5486@gmail.com"
                delay="0.1s"
              />
              <ContactCard
                icon="◈"
                label="GitHub"
                value="github.com/danielhaile5486-rgb"
                href="https://github.com/danielhaile5486-rgb"
                delay="0.2s"
              />
              <ContactCard
                icon="◎"
                label="University"
                value="Haramaya University, Ethiopia"
                href="https://www.haramaya.edu.et"
                delay="0.3s"
              />
            </div>

            {/* Availability */}
            <div className="reveal" style={{
              padding: '1.5rem',
              background: 'rgba(239,159,39,0.05)',
              border: '1px solid var(--border-accent)',
              borderRadius: 'var(--radius-md)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', animation: 'pulse-amber 2s infinite', display: 'inline-block' }} />
                <span style={{ color: '#4ade80', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em' }}>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Currently seeking <strong style={{ color: 'var(--text-primary)' }}>internship positions</strong> in web development.
                Open to remote, hybrid, or on-site roles. Typical response time: within 24 hours.
              </p>
            </div>

            {/* Social placeholders */}
            <div className="reveal" style={{ marginTop: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Social Media
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['LinkedIn', 'Twitter / X', 'Dev.to'].map(s => (
                  <span key={s} style={{
                    padding: '0.4rem 0.9rem',
                    background: 'var(--bg-card)',
                    border: '1px dashed var(--border-normal)',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                  }}>{s} — coming soon</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Contact Form ── */}
          <div className="reveal">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Send a Message
            </h2>

            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
            }}>
              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', animation: 'fadeUp 0.4s ease' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--text-accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-normal)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--text-accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-normal)'}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Internship opportunity / Project collaboration..."
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--text-accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border-normal)'}
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity, your team, or just introduce yourself..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      onFocus={e => e.target.style.borderColor = 'var(--text-accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border-normal)'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      opacity: status === 'sending' ? 0.7 : 1,
                      cursor: status === 'sending' ? 'wait' : 'pointer',
                    }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message →'}
                  </button>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', textAlign: 'center', marginTop: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                    * Note: To receive real emails, connect a service like{' '}
                    <a href="https://formspree.io" target="_blank" rel="noreferrer" style={{ color: 'var(--text-accent)' }}>Formspree</a>
                    {' '}or{' '}
                    <a href="https://www.emailjs.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-accent)' }}>EmailJS</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
