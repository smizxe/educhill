import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { homeContent } from '../data/homeContent';

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const lang = location.pathname.startsWith('/vi') ? 'vi' : 'en';
    const content = homeContent[lang].header;
    const isVi = lang === 'vi';

    const getLink = (path, hash) => {
        const cleanPath = path === '/' ? '' : path;
        const prefix = isVi ? '/vi' : '';
        const fullPath = `${prefix}${cleanPath}`;
        return (fullPath === '' ? '/' : fullPath) + (hash ? hash : '');
    };

    // Helper to scroll to hash if present
    const handleNavClick = (hash) => {
        setIsMobileMenuOpen(false);
        if (hash) {
            // Check if we are on the correct home page for the language
            // Simple check: if pathname is exactly the home path (considering prefix)
            const homePath = isVi ? '/vi' : '/';
            // Also handle trailing slash if necessary, but router usually normalizes
            const isHome = location.pathname === homePath || location.pathname === `${homePath}/`;

            if (isHome) {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // Else Link will handle it
        } else {
            // If navigating to top of a page (no hash)
            window.scrollTo(0, 0);
        }
    };

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
            <div className="flex transition-all duration-300 hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)] bg-white border-white/50 border rounded-full pt-2 pr-2 pb-2 pl-2 shadow-[0_2px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl items-center justify-between aura-animate-fade-up">
                <Link to={getLink('/')} onClick={() => handleNavClick()} className="inline-flex items-center justify-center bg-transparent h-[50px] hover:opacity-80 transition-opacity">
                    <img src="/educhill-logo-transparent.png" alt="Educhill" className="h-20 w-auto pl-1" />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link to={getLink('/features')} onClick={() => handleNavClick()} className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium">{content.features}</Link>
                    <Link to={getLink('/', '#pricing')} onClick={() => handleNavClick('#pricing')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium">{content.plans}</Link>
                    <Link to={getLink('/about')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium">{content.about}</Link>
                    <Link to={getLink('/contact')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium">{content.contact}</Link>
                </div>

                {/* Demo Lesson Button with Running Border Animation */}
                <div className="hidden md:inline-flex relative group rounded-full p-[2px] overflow-hidden">
                    <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#6366f1_50%,#E2E8F0_100%)]" />
                    <Link
                        to={getLink('/contact')}
                        className="relative z-10 flex items-center gap-2 rounded-full bg-white pt-3 pr-6 pb-3 pl-6 text-sm font-medium transition-all hover:scale-[1.02] active:scale-95"
                        style={{
                            background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #818cf8 100%)',
                            boxShadow: '0 18px 35px rgba(30, 64, 175, 0.45), 0 0 0 1px rgba(191, 219, 254, 0.3)',
                            color: '#e0e7ff'
                        }}
                    >
                        <span className="text-slate-50 font-medium tracking-tight">{content.demoLink}</span>
                        <ArrowRight className="w-4 h-4 text-slate-50" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 mr-2 text-slate-600 hover:text-slate-900 transition-colors"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-xl p-6 flex flex-col gap-4">
                    <Link to={getLink('/features')} onClick={() => setIsMobileMenuOpen(false)} className="text-base text-slate-600 font-medium p-2 hover:bg-slate-50 rounded-xl transition-colors">{content.features}</Link>
                    <Link to={getLink('/about')} onClick={() => setIsMobileMenuOpen(false)} className="text-base text-slate-600 font-medium p-2 hover:bg-slate-50 rounded-xl transition-colors">{content.about}</Link>
                    <Link to={getLink('/contact')} onClick={() => setIsMobileMenuOpen(false)} className="text-base text-slate-600 font-medium p-2 hover:bg-slate-50 rounded-xl transition-colors">{content.contact}</Link>
                    <div className="h-px bg-gray-100 my-1"></div>
                    <Link to={getLink('/contact')} onClick={() => setIsMobileMenuOpen(false)} className="text-base text-center text-white bg-[#0F172A] rounded-full py-3 shadow-lg font-medium hover:bg-slate-800 transition-all">{content.getStarted}</Link>
                </div>
            )}
        </nav>
    );
};
