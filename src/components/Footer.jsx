import React from 'react';

export const Footer = () => {
    return (
        <footer style={{ background: '#0F172A', color: '#fff', padding: '4rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <div style={{ width: 24, height: 24, background: '#fff', borderRadius: 6 }}></div>
                            <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>PRISM</span>
                        </div>
                        <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>
                            The intelligent platform for modern engineering teams. Ship faster, sleep better.
                        </p>
                    </div>

                    {[
                        { title: 'Product', links: ['Features', 'Integrations', 'Pricing', 'Changelog'] },
                        { title: 'Resources', links: ['Documentation', 'API Reference', 'Community', 'Help Center'] },
                        { title: 'Company', links: ['About', 'Blog', 'Careers', 'Legal'] }
                    ].map((col, i) => (
                        <div key={i}>
                            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', color: '#fff' }}>{col.title}</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {col.links.map(link => (
                                    <li key={link}>
                                        <a href="#" style={{ color: '#94a3b8', fontSize: '0.9rem' }} onMouseOver={e => e.target.style.color = "#fff"} onMouseOut={e => e.target.style.color = "#94a3b8"}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{ borderTop: '1px solid #1e293b', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.875rem' }}>
                    <p>© 2024 Prism Inc. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
