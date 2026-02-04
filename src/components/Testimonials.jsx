import React from 'react';

const testimonials = [
    {
        quote: "The Status Page integration is a game changer. We can test on production with zero anxiety.",
        author: "Michael Active",
        role: "Lead Admin at Acme",
        avatar: "MA"
    },
    {
        quote: "Prism has completely transformed how we handle our CI/CD pipelines. It's incredibly intuitive.",
        author: "Sarah Jenkins",
        role: "DevOps Engineer at TechCorp",
        avatar: "SJ"
    },
    {
        quote: "The best investment we made this year. Engineering velocity increased by 40% in just two months.",
        author: "David Ross",
        role: "CTO at ScaleUp",
        avatar: "DR"
    }
];

export const Testimonials = () => {
    return (
        <section style={{
            padding: '6rem 0',
            background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.05) 0%, transparent 60%)',
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Trusted by engineering teams</h2>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap'
                }}>
                    {testimonials.map((t, i) => (
                        <div key={i} style={{
                            background: '#fff',
                            padding: '2rem',
                            borderRadius: '16px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                            maxWidth: '350px',
                            textAlign: 'left'
                        }}>
                            <div style={{ display: 'flex', gap: 2, marginBottom: '1rem', color: '#fbbf24' }}>
                                {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                            </div>
                            <p style={{ fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '1.5rem', color: '#334155' }}>
                                "{t.quote}"
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: 40,
                                    height: 40,
                                    background: '#e2e8f0',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 600,
                                    fontSize: '0.875rem'
                                }}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.author}</div>
                                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
