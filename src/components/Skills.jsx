import React, { useState } from 'react';
import {
  Code2,
  FileCode,
  Layout,
  Palette,
  Layers,
  Server,
  Terminal,
  Database,
  Network,
  Flame,
  Brain,
  Sparkles,
  Cpu,
  Box,
  GitBranch,
  Cloud,
  Zap,
  ShieldCheck,
  Lock,
  Table,
  FileText,
  Calendar,
  Globe,
  Award,
  CheckCircle2
} from 'lucide-react';
import { skillCategories, skills } from '../data/portfolioData';

// Map icon string name to Lucide Icon component
const iconMap = {
  ShieldCheck,
  FileCode,
  Database,
  Lock,
  Layout,
  Table,
  FileText,
  Cloud,
  Calendar,
  Sparkles,
  Brain,
  Cpu,
  Layers,
  Award,
  CheckCircle2,
  Globe,
  Code2,
  Palette,
  Server,
  Terminal,
  Network,
  Flame,
  Box,
  GitBranch,
  Zap,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Competencies & Tools</span>
          <h2>Skills & Expertise</h2>
          <p>Core operational capabilities, software proficiency, and workflow automation tools.</p>
        </div>

        {/* Category Tabs (Matching Sample Pill Styling) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '48px',
          }}
        >
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
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
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={skill.name}
                className="glass-card"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        padding: '10px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-pill-active)',
                        color: 'var(--accent-primary)',
                        display: 'inline-flex',
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                      {skill.name}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Level Bar */}
                <div
                  style={{
                    width: '100%',
                    height: '8px',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-full)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: 'var(--gradient-primary)',
                      borderRadius: 'var(--radius-full)',
                      transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
