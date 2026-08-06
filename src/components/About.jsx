import React from 'react';
import { User, ShieldCheck, Database, FileCheck, HeartHandshake, CheckCircle2, MapPin, Award, Car, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const coreValues = [
    {
      icon: ShieldCheck,
      title: 'Policy & SOP Compliance',
      description: 'Strict adherence to organizational guidelines, privacy protocols, and state/federal regulatory compliance.',
    },
    {
      icon: Database,
      title: 'Data Integrity & Keyboarding',
      description: 'High-volume data entry accuracy, organized records keeping, and continuous database content maintenance.',
    },
    {
      icon: FileCheck,
      title: 'Document Preparation',
      description: 'Compiling structured status reports, technical test logs, operational spreadsheets, and executive documentation.',
    },
    {
      icon: HeartHandshake,
      title: 'Public Service Mindset',
      description: 'Dedicated to customer assistance, cross-functional team coordination, and timely public service delivery.',
    },
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">About Abu Saeed</span>
          <h2>Public Service & Administrative Professional</h2>
          <p>Learn more about my background, civil service candidacy, and operational experience.</p>
        </div>

        {/* Top Grid: Bio Text & Stat Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '48px',
          }}
          className="about-top-grid"
        >
          {/* Bio Text */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <User style={{ color: 'var(--accent-primary)' }} size={24} />
              <span>Certified NYS 55-b Eligible Candidate</span>
            </h3>

            {personalInfo.bioLong.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: index === personalInfo.bioLong.length - 1 ? 0 : '16px',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stat Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '18px',
            }}
          >
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="glass-card"
                style={{
                  padding: '24px',
                  textAlign: 'center',
                  borderTop: '4px solid var(--accent-primary)',
                }}
              >
                <div
                  style={{
                    fontSize: '2.2rem',
                    fontWeight: 800,
                    marginBottom: '6px',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--accent-primary)',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Civil Service Key Details Card */}
        <div
          className="glass-card"
          style={{
            padding: '32px',
            marginBottom: '60px',
            background: 'var(--bg-pill-active)',
            borderColor: 'rgba(240, 90, 40, 0.25)',
          }}
        >
          <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={22} />
            <span>NYS Civil Service Employment Preferences & Credentials</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                Civil Service Eligibility
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Certified NYS 55-b Program Letter of Eligibility (Issued June 10, 2026)
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                Target Positions & Salary Grades
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Office Assistant / Clerical / Program Aide / Operations Specialist (Salary Grade 06 - 18)
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                Preferred Work Locations
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Schenectady, Albany, Saratoga, and Rensselaer Counties
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                Driver License & Availability
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Valid NYS Class D Driver License • Available within 2 weeks
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid: Core Pillars */}
        <div>
          <h3 style={{ fontSize: '1.4rem', textAlign: 'center', marginBottom: '32px' }}>
            Operational Pillars & Standards
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {coreValues.map((value) => (
              <div key={value.title} className="glass-card" style={{ padding: '28px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-pill-active)',
                    color: 'var(--accent-primary)',
                    marginBottom: '16px',
                  }}
                >
                  <value.icon size={24} />
                </div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>{value.title}</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-top-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
