import React from 'react';
import { Zap, Activity, GitBranch, Lock } from 'lucide-react';

const features = [
    {
        icon: <Zap size={24} />,
        title: "Prism velocity",
        desc: "Track engineering throughput and release momentum.",
        color: "#6366f1"
    },
    {
        icon: <Activity size={24} />,
        title: "Pipeline intelligence",
        desc: "Bot detected a build and deployment for you.",
        color: "#ec4899"
    },
    {
        icon: <GitBranch size={24} />,
        title: "Branch previews",
        desc: "Automatic preview deployments for every PR.",
        color: "#14b8a6"
    },
    {
        icon: <Lock size={24} />,
        title: "SSO & Security",
        desc: "Enterprise-grade security built-in from day one.",
        color: "#f59e0b"
    }
];

export const Features = () => {
    return (
        <section id="features" style={{ padding: '6rem 0' }}>
            <div className="container">
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                        Precision at every scale
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
                        Connect every part of your engineering workflow in one unified platform. Track progress, catch regressions, and ship faster with confidence.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((feature, i) => (
                        <div key={i} className="glass" style={{
                            padding: '2rem',
                            borderRadius: '16px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            background: 'linear-gradient(180deg, #fff 0%, #f8fafc 100%)',
                            transition: 'transform 0.2s',
                            cursor: 'default'
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                width: 48,
                                height: 48,
                                borderRadius: 12,
                                background: `${feature.color}15`,
                                color: feature.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                                {feature.title}
                            </h3>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
