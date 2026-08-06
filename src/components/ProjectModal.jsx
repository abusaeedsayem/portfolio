import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Award } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'rgba(26, 25, 24, 0.65)',
        backdropFilter: 'blur(10px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px',
          position: 'relative',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg), 0 0 30px rgba(240, 90, 40, 0.2)',
          background: 'var(--bg-card)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s ease',
          }}
        >
          <X size={20} />
        </button>

        {/* Visual Banner Header */}
        <div
          style={{
            height: '170px',
            borderRadius: 'var(--radius-md)',
            background: project.imageColor || 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '24px',
            marginBottom: '28px',
          }}
        >
          <h3 style={{ color: '#ffffff', fontSize: '1.9rem', margin: 0, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            {project.title}
          </h3>
        </div>

        {/* Tagline */}
        <p style={{ fontSize: '1.15rem', color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '16px' }}>
          {project.tagline}
        </p>

        {/* Full Description */}
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px' }}>
          {project.description}
        </p>

        {/* Key Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>Key Highlights & Impact</span>
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {project.metrics.map((m, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '6px 16px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-pill-active)',
                    color: 'var(--accent-primary)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    border: '1px solid rgba(240, 90, 40, 0.2)',
                  }}
                >
                  ⚡ {m}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Architecture Details */}
        {project.architecture && project.architecture.length > 0 && (
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Cpu size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>Operational Workflow & SOPs</span>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.architecture.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '1rem', marginBottom: '12px' }}>Skill Competencies Used</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="badge-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <span>View Profile Details</span>
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
