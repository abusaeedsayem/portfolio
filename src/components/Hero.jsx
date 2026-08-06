import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Sparkles, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo, typewriterRoles } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = typewriterRoles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typewriterRoles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '130px',
        paddingBottom: '70px',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '60px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline & Intro (Matching Sample Reference Screenshot) */}
          <div>
            {/* Top Pill Badge (Matching Sample Badge with Sparkle Icon) */}
            <div
              className="badge-pill"
              style={{
                marginBottom: '28px',
                fontSize: '0.9rem',
                padding: '8px 20px',
              }}
            >
              <Sparkles size={16} style={{ color: 'var(--accent-primary)' }} />
              <span>Certified NYS 55-b Candidate • Public Service Operations</span>
            </div>

            {/* Giant Headline with Underline Highlight (Exact Style of Screenshot) */}
            <h1
              style={{
                fontSize: '3.8rem',
                fontWeight: 800,
                lineHeight: 1.12,
                marginBottom: '24px',
                letterSpacing: '-1.5px',
                color: 'var(--text-primary)',
              }}
              className="hero-title"
            >
              Public service is a{' '}
              <span className="underline-highlight">growth system.</span>
            </h1>

            {/* Typewriter Sub-headline */}
            <div
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                marginBottom: '20px',
                minHeight: '2.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>{displayText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1.2rem',
                  backgroundColor: 'var(--accent-primary)',
                  animation: 'fadeIn 0.8s infinite',
                }}
              />
            </div>

            {/* Introductory Bio Paragraph (Matching Sample Tone & Structure) */}
            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                marginBottom: '36px',
                maxWidth: '580px',
                lineHeight: 1.65,
                fontWeight: 400,
              }}
            >
              I build structured operational workflows and records management systems that compound—driving data accuracy, compliance, and measurable public sector results.{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Strict confidentiality. Absolute policy adherence.</strong>
            </p>

            {/* Action Buttons (Matching Primary Orange Pill & White Pill from sample screenshot) */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '44px',
              }}
            >
              <a href="#projects" className="btn-primary">
                <span>View Operations Work</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn-secondary">
                <span>Get in Touch</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
              >
                <FileText size={18} />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Social Quick Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Quick Connect:</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { icon: LinkedinIcon, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
                  { icon: Mail, href: personalInfo.socialLinks.email, label: 'Email' },
                  { icon: GithubIcon, href: personalInfo.socialLinks.github, label: 'GitHub' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-primary)';
                      e.currentTarget.style.color = 'var(--accent-primary)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <item.icon size={19} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Executive Card Showcase */}
          <div style={{ position: 'relative' }} className="hero-card-container">
            <div
              className="glass-card animate-float"
              style={{
                padding: '32px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div
                  style={{
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-pill-active)',
                    color: 'var(--accent-primary)',
                  }}
                >
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>NYS 55-b Certified</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                    Official Civil Service Eligibility
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Qualified candidate with specialized experience in US Postal Service operations, Plug Power manufacturing quality logs, and public sector administrative compliance.
              </p>

              {/* Stat Matrix Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '16px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border-color)',
                }}
              >
                {personalInfo.stats.map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: 'var(--bg-primary)',
                      padding: '16px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-heading)' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-title { font-size: 2.8rem !important; }
        }
      `}</style>
    </section>
  );
}
