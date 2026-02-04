import React from 'react';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export const Pricing = () => {
    return (
        <section id="pricing" style={{ padding: '6rem 0' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: '4rem',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Smart pricing for serious growth</h2>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem' }}>
                            One plan for collaboration, one for serious scaling.
                        </p>
                    </div>
                    <div style={{
                        background: '#f1f5f9',
                        padding: '4px',
                        borderRadius: '99px',
                        display: 'flex',
                        fontSize: '0.875rem',
                        fontWeight: 500
                    }}>
                        <button style={{ padding: '6px 16px', borderRadius: '20px', background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>Monthly</button>
                        <button style={{ padding: '6px 16px', borderRadius: '20px', color: '#64748B' }}>Yearly (-20%)</button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {/* Card 1 */}
                    <div style={{
                        background: '#fff',
                        borderRadius: '24px',
                        padding: '2.5rem',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Perfect for builders shipping side projects</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                <span style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'var(--font-serif)' }}>$29</span>
                                <span style={{ color: '#64748B' }}>/mo</span>
                            </div>
                        </div>

                        <Button style={{ width: '100%', justifyContent: 'center', marginBottom: '2rem', background: '#0F172A' }}>
                            Start building
                        </Button>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Unlimited repositories', '500 mins of build time', 'Community support', '7 day log retention'].map(item => (
                                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                    <div style={{ background: '#ecfccb', color: '#65a30d', borderRadius: '50%', padding: 2 }}>
                                        <Check size={14} />
                                    </div>
                                    <span style={{ fontSize: '0.925rem' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div style={{
                        background: '#fff',
                        borderRadius: '24px',
                        padding: '2.5rem',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '100px',
                            height: '100px',
                            background: 'linear-gradient(135deg, #e0e7ff 0%, #fae8ff 100%)',
                            filter: 'blur(40px)',
                            zIndex: 0
                        }}></div>

                        <div style={{ marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Built for scaling engineering teams</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                <span style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'var(--font-serif)' }}>$149</span>
                                <span style={{ color: '#64748B' }}>/mo</span>
                            </div>
                        </div>

                        <Button variant="outline" style={{ width: '100%', justifyContent: 'center', marginBottom: '2rem', background: '#1e293b', color: '#fff', border: 'none' }}>
                            Scale operations
                        </Button>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Unlimited collaborators', 'Advanced CI/CD analytics', 'SAML & SSO', 'Priority live chat support', '99.99% Uptime SLA'].map(item => (
                                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                    <div style={{ background: '#dbeafe', color: '#2563eb', borderRadius: '50%', padding: 2 }}>
                                        <Check size={14} />
                                    </div>
                                    <span style={{ fontSize: '0.925rem' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
