import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const [filterType, setFilterType] = useState('all');

  const filteredExperience =
    filterType === 'all'
      ? experience
      : experience.filter((exp) => {
          if (filterType === 'work') return exp.type === 'Work';
          if (filterType === 'education') return exp.type === 'Education' || exp.type === 'Certification';
          return true;
        });

  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Career History</span>
          <h2>Work Experience & Education</h2>
          <p>My professional trajectory across public service, technical operations, and education.</p>
        </div>

        {/* Filter Toggle */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '48px',
          }}
        >
          {[
            { id: 'all', label: 'All Experience' },
            { id: 'work', label: 'Work History' },
            { id: 'education', label: 'Education & Certifications' },
          ].map((type) => {
            const isActive = filterType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setFilterType(type.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  transition: 'all 0.2s ease',
                  background: isActive ? 'var(--accent-primary)' : 'var(--bg-card)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: `1px solid ${isActive ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                  boxShadow: isActive ? 'var(--shadow-glow)' : 'var(--shadow-sm)',
                }}
              >
                {type.label}
              </button>
            );
          })}
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '32px',
          }}
          className="timeline-container"
        >
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              bottom: '10px',
              left: '11px',
              width: '3px',
              background: 'var(--accent-primary)',
              opacity: 0.3,
            }}
          />

          {filteredExperience.map((exp) => (
            <div
              key={exp.id}
              style={{
                position: 'relative',
                marginBottom: '40px',
              }}
            >
              {/* Timeline Dot Icon */}
              <div
                style={{
                  position: 'absolute',
                  left: '-32px',
                  top: '0',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: 'var(--shadow-glow)',
                  zIndex: 2,
                }}
              >
                {exp.type === 'Work' ? (
                  <Briefcase size={14} />
                ) : exp.type === 'Certification' ? (
                  <Award size={14} />
                ) : (
                  <GraduationCap size={14} />
                )}
              </div>

              {/* Experience Card */}
              <div className="glass-card" style={{ padding: '28px' }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '14px',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '4px' }}>{exp.role}</h3>
                    <div style={{ fontSize: '1.05rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
                      {exp.company}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
                  {exp.description}
                </p>

                {/* Achievements Bullet Points */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--bg-pill-active)',
                        border: '1px solid rgba(240, 90, 40, 0.15)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
