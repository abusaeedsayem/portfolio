import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: scrolled ? '14px 0' : '24px 0',
      }}
      className={scrolled ? 'glass-nav' : ''}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand / Logo */}
        <a
          href="#home"
          style={{
            fontSize: '1.45rem',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.3px',
          }}
        >
          <span>Abu Saeed</span>
          <span style={{ color: 'var(--accent-primary)' }}>.</span>
          <span>Sayem</span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
          className="desktop-nav"
        >
          <ul style={{ display: 'flex', gap: '8px', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => {
              const linkKey = link.name === 'Work' ? 'projects' : link.name.toLowerCase();
              const isActive = activeSection === linkKey;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.94rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      background: isActive ? 'var(--bg-pill-active)' : 'transparent',
                      padding: '8px 18px',
                      borderRadius: 'var(--radius-full)',
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                transition: 'all 0.2s ease',
              }}
            >
              {theme === 'dark' ? <Sun size={18} style={{ color: '#f59e0b' }} /> : <Moon size={18} style={{ color: 'var(--accent-primary)' }} />}
            </button>

            {/* Navbar CTA Button */}
            <a
              href="#contact"
              className="btn-primary"
              style={{ padding: '10px 24px', fontSize: '0.92rem' }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="mobile-only-toggle">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              padding: '8px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
            }}
          >
            {theme === 'dark' ? <Sun size={18} style={{ color: '#f59e0b' }} /> : <Moon size={18} style={{ color: 'var(--accent-primary)' }} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              padding: '8px',
              color: 'var(--text-primary)',
              display: 'inline-flex',
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-color)',
            padding: '20px 24px',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    display: 'block',
                    padding: '8px 12px',
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li style={{ paddingTop: '10px' }}>
              <a
                href="#contact"
                className="btn-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={16} />
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 821px) {
          .mobile-only-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
