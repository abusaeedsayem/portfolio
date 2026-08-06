import React from 'react';
import { User, ShieldCheck, Database, FileCheck, HeartHandshake, CheckCircle2, MapPin, Award, Car, Briefcase, Building2, Landmark } from 'lucide-react';
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
      description: 'High-volume database data entry accuracy, organized records keeping, and continuous data maintenance.',
    },
    {
      icon: FileCheck,
      title: 'Document Preparation',
      description: 'Compiling structured status reports, technical test logs, operational spreadsheets, and executive documentation.',
    },
    {
      icon: HeartHandshake,
      title: 'Cross-Functional Collaboration',
      description: 'Dedicated to customer assistance, team coordination, and timely operational delivery across public and private units.',
    },
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">About Abu Saeed</span>
          <h2>Operations & Administrative Professional</h2>
          <p>Learn more about my versatile background spanning state civil service, federal facilities, and private industry.</p>
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
              <span>Multi-Sector Operations & Compliance Specialist</span>
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

        {/* Sector Versatility Highlights Card */}
        <div
          className="glass-card"
          style={{
            padding: '32px',
            marginBottom: '60px',
            background: 'var(--bg-pill-active)',
            borderColor: 'rgba(240, 90, 40, 0.25)',
          }}
        >
          <h3 style={{ fontSize: '1.3rem', marginBottom: '18px', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={22} />
            <span>Employment Eligibility & Career Focus Areas</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
            }}
          >
            {/* NYS State Civil Service */}
            <div style={{ background: 'var(--bg-card)', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Landmark size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>NYS State Government</span>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Officially Certified NYS 55-b Candidate & NYS HELPS applicant (SG 06–18: Office Assistant, Clerical, Program Aide, Operations Specialist).
              </p>
            </div>

            {/* Federal Government */}
            <div style={{ background: 'var(--bg-card)', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <ShieldCheck size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>Federal Public Sector</span>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                2+ years federal facility experience (USPS Albany). Experienced in federal SOP compliance, data privacy, and time-sensitive operations.
              </p>
            </div>

            {/* Private Sector & Tech */}
            <div style={{ background: 'var(--bg-card)', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Building2 size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>Private Sector & Tech</span>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Proven track record at Plug Power Inc. (Quality Control logs/spreadsheets) and CLEER Security (Web App QA testing & documentation).
              </p>
            </div>

            {/* Locations & Credentials */}
            <div style={{ background: 'var(--bg-card)', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <MapPin size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>Locations & Driver License</span>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Schenectady, Albany, Saratoga, Rensselaer & Remote/Hybrid. Valid NYS Class D Driver License. US Work Authorized.
              </p>
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
