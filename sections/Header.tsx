'use client';

import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { useViewport } from '@/lib/useViewport';
import { sections } from '@/data/content';

const { navLinks } = sections;

export function Header() {
  const { vw } = useViewport();
  const [menuOpen, setMenuOpen] = useState(false);
  const compact = vw < 900;
  const open = compact && menuOpen;

  // Close the menu when leaving the compact breakpoint.
  useEffect(() => {
    if (!compact && menuOpen) setMenuOpen(false);
  }, [compact, menuOpen]);

  const bar = (transform: string, opacity = 1): CSSProperties => ({
    display: 'block',
    width: '18px',
    height: '1.5px',
    borderRadius: '1px',
    background: '#E6EAF0',
    transition: 'transform .25s, opacity .25s',
    transform,
    opacity,
  });

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px 24px',
        margin: '0 -24px',
        padding: '14px 24px',
        background: 'rgba(8,11,16,.82)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,.06)',
      }}
    >
      <a
        href="#top"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: '#E6EAF0',
        }}
      >
        <span
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '7px',
            background: 'linear-gradient(140deg,#8AB4F8,#7DD3C0)',
            display: 'block',
          }}
        />
        <span style={{ fontWeight: 600, letterSpacing: '-.01em' }}>
          Nuwan Madhusanka
        </span>
      </a>

      {!compact && (
        <nav
          aria-label="Primary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(14px,1.8vw,26px)',
            fontSize: '14px',
          }}
        >
          {navLinks.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="contact-pill">
            Contact
          </a>
        </nav>
      )}

      {compact && (
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,.12)',
            background: 'rgba(255,255,255,.03)',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <span style={bar(open ? 'translateY(6.5px) rotate(45deg)' : 'none')} />
          <span style={bar('none', open ? 0 : 1)} />
          <span style={bar(open ? 'translateY(-6.5px) rotate(-45deg)' : 'none')} />
        </button>
      )}

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            padding: '6px 24px 22px',
            background: 'rgba(8,11,16,.97)',
            borderBottom: '1px solid rgba(255,255,255,.08)',
            boxShadow: '0 24px 40px -20px rgba(0,0,0,.8)',
          }}
        >
          {navLinks.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,.06)',
                color: '#E6EAF0',
                fontSize: '16px',
              }}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: '18px',
              padding: '13px 20px',
              borderRadius: '10px',
              background: '#E6EAF0',
              color: '#0A0E13',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
