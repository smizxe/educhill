import React from 'react';
import { Button } from './ui/Button';

export const Header = () => {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                        width: '24px',
                        height: '24px',
                        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                        borderRadius: '6px'
                    }}></div>
                    <span style={{ fontWeight: 700, fontSize: '1.25rem', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
                        PRISM
                    </span>
                </div>

                {/* Nav */}
                <nav style={{ display: 'none', gap: '2rem', md: { display: 'flex' } }} className="hidden-mobile">
                    {['Features', 'Marketplace', 'Pricing', 'Blog'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} style={{
                            fontSize: '0.925rem',
                            color: 'var(--color-text-secondary)',
                            fontWeight: 500
                        }}>
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Style hack for hiding nav on mobile since I'm doing inline styles mostly */}
                <style>{`
          @media (min-width: 768px) {
            .hidden-mobile { display: flex !important; }
          }
        `}</style>

                {/* Actions */}
                <Button variant="primary" size="sm">Get Started</Button>
            </div>
        </header>
    );
};
