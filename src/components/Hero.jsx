import React from 'react';
import { Button } from './ui/Button';
import { Play } from 'lucide-react';

export const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            paddingTop: '160px',
            paddingBottom: '100px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            {/* Background Gradients */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1200px',
                height: '800px',
                background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>

            {/* Floating Elements (Orbs) */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '15%',
                width: '300px',
                height: '300px',
                background: '#a5b4fc',
                filter: 'blur(100px)',
                opacity: 0.2,
                zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '250px',
                height: '250px',
                background: '#818cf8',
                filter: 'blur(90px)',
                opacity: 0.15,
                zIndex: -1
            }}></div>

            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

                {/* Badge/Date - Optional */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: 'rgba(255,255,255,0.8)',
                    borderRadius: '999px',
                    border: '1px solid rgba(0,0,0,0.05)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '1rem',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                }}>
                    <span style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%' }}></span>
                    <span>v2.0 is now live</span>
                </div>

                {/* Headline */}
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    lineHeight: 1.1,
                    maxWidth: '800px',
                    letterSpacing: '-0.03em',
                    color: '#1e293b'
                }}>
                    Design, develop, and <br />
                    <span style={{
                        background: 'linear-gradient(135deg, #4f46e5 0%, #9333ea 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontStyle: 'italic'
                    }}>deploy with precision</span>
                </h1>

                {/* Subheadline */}
                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-text-secondary)',
                    maxWidth: '600px',
                    lineHeight: 1.6
                }}>
                    The intelligent platform for engineering roadmaps, CI/CD visibility, and feature-flagged rollouts.
                </p>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <Button size="lg">Start Free Trial</Button>
                    <Button variant="outline" size="lg">
                        <Play size={16} /> Watch Source
                    </Button>
                </div>

                {/* Dashboard Preview */}
                <div style={{
                    width: '100%',
                    maxWidth: '1000px',
                    marginTop: '4rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 20px 50px -10px rgba(0,0,0,0.1)',
                    background: '#FFFFFF',
                    padding: '1rem',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Using the previously downloaded preview as a placeholder or reconstructing a mock UI */}
                    {/* Since we have preview.png, we might use it, but typically a screenshot is cleaner. 
              I'll assume I can render a mock UI or use an image. For now, a mock dashboard container. */}

                    <div style={{
                        background: '#F8FAFC',
                        borderRadius: '12px',
                        width: '100%',
                        aspectRatio: '16/9',
                        position: 'relative',
                        display: 'flex',
                        overflow: 'hidden'
                    }}>
                        {/* Simple Sidebar */}
                        <div style={{ width: '240px', borderRight: '1px solid #E2E8F0', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                <div style={{ width: 24, height: 24, background: '#e2e8f0', borderRadius: '50%' }}></div>
                                <div style={{ width: '60%', height: 12, background: '#e2e8f0', borderRadius: 4 }}></div>
                            </div>
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.6 }}>
                                    <div style={{ width: 16, height: 16, background: '#cbd5e1', borderRadius: 4 }}></div>
                                    <div style={{ width: '70%', height: 10, background: '#cbd5e1', borderRadius: 4 }}></div>
                                </div>
                            ))}
                        </div>

                        {/* Main Content Area */}
                        <div style={{ flex: 1, padding: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                <div style={{ width: '200px', height: 24, background: '#e2e8f0', borderRadius: 6 }}></div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <div style={{ width: 80, height: 32, background: '#e2e8f0', borderRadius: 6 }}></div>
                                    <div style={{ width: 32, height: 32, background: '#1e293b', borderRadius: 6 }}></div>
                                </div>
                            </div>

                            {/* Chart Mockup */}
                            <div style={{ width: '100%', height: '200px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '120px', height: 16, background: '#e2e8f0', borderRadius: 4, marginBottom: '2rem' }}></div>
                                <svg viewBox="0 0 100 40" style={{ width: '100%', height: '100px', fill: 'none', stroke: '#818cf8', strokeWidth: 0.5 }}>
                                    <path d="M0 35 C 20 35, 20 10, 40 10 C 60 10, 60 25, 80 25 C 90 25, 90 5, 100 5" />
                                </svg>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ flex: 1, height: 100, background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12 }}></div>
                                <div style={{ flex: 1, height: 100, background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12 }}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
