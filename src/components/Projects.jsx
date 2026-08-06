import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectCategories, projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Case Studies & Systems</span>
          <h2>Operations & Systems Work</h2>
          <p>Key administrative, records management, quality control, and AI research projects.</p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '48px',
          }}
        >
          {projectCategories.map((cat) => {
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

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Card Thumbnail Gradient */}
              <div
                style={{
                  height: '160px',
                  background: project.imageColor,
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                {project.featured && (
                  <span
                    style={{
                      padding: '5px 14px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(0, 0, 0, 0.45)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Sparkles size={13} style={{ color: '#ffb703' }} />
                    Key Focus
                  </span>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  aria-label="View project details"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: 'var(--text-primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 'auto',
                    transition: 'transform 0.2s ease',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <ArrowUpRight size={18} />
                </button>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>{project.title}</h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.55, flexGrow: 1 }}>
                  {project.tagline}
                </p>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--bg-pill-active)',
                        border: '1px solid rgba(240, 90, 40, 0.15)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Action Links */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>View Breakdown</span>
                    <ArrowUpRight size={15} />
                  </button>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View Details Link"
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', display: 'inline-flex' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
