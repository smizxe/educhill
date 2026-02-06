import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';
import { homeContent } from '../data/homeContent';

export const Footer = () => {
    const location = useLocation();
    const lang = location.pathname.startsWith('/vi') ? 'vi' : 'en';
    const content = homeContent[lang].footer;
    const isVi = lang === 'vi';

    const getLink = (path, hash) => {
        const cleanPath = path === '/' ? '' : path;
        const prefix = isVi ? '/vi' : '';
        const fullPath = `${prefix}${cleanPath}`;
        return (fullPath === '' ? '/' : fullPath) + (hash ? hash : '');
    };

    return (
        <footer className="bg-white border-t pt-10 pb-10">
            <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 pr-0 lg:pr-12 scroll-enter">
                        <Link to={getLink('/')} className="inline-flex items-center justify-start mb-6">
                            <img src="/educhill-logo-transparent.png" alt="Educhill Logo" className="h-20 w-auto" />
                        </Link>
                        <p className="text-slate-500 leading-relaxed text-base mb-8 max-w-sm font-sans font-medium">
                            {content.description}
                        </p>
                        <p className="flex items-center gap-2 text-slate-500 font-medium mb-6">
                            <Mail className="w-4 h-4" /> yangaidev@gmail.com
                        </p>
                        <div className="flex items-center gap-5">
                            <a href="https://facebook.com/smizxe" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-600 transition-colors transform hover:scale-110">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com/smizxe" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-600 transition-colors transform hover:scale-110">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com/yangai" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-600 transition-colors transform hover:scale-110">
                                <Twitter className="w-5 h-5 fill-current" />
                            </a>
                            <a href="https://linkedin.com/in/yangaidev" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-600 transition-colors transform hover:scale-110">
                                <Linkedin className="w-5 h-5 fill-current" />
                            </a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="lg:col-span-2 scroll-enter delay-100">
                        <h3 className="text-lg text-slate-900 mb-6 font-sans font-medium">{content.product}</h3>
                        <ul className="space-y-4">
                            <li><Link to={getLink('/features')} className="text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium">{content.features}</Link></li>
                            <li><Link to={getLink('/', '#pricing')} className="text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium">{content.plans}</Link></li>
                            <li><Link to={getLink('/about')} className="text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium">{content.about}</Link></li>
                            <li><Link to={getLink('/contact')} className="text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium">{content.contact}</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="lg:col-span-2 scroll-enter delay-200">
                        <h3 className="text-lg text-slate-900 mb-6 font-sans font-medium">{content.resources}</h3>
                        <ul className="space-y-4">
                            <li><Link to={getLink('/blog')} className="text-slate-600 hover:text-slate-900 transition-colors font-sans font-medium">{content.blog}</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-4 scroll-enter delay-300">
                        <div className="bg-white rounded-[1.5rem] p-8 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow">
                            <h3 className="text-xl text-slate-900 mb-3 font-sans font-medium">{content.newsletter.title}</h3>
                            <p className="text-slate-500 mb-6 text-sm leading-relaxed font-sans font-medium">
                                {content.newsletter.description}
                            </p>
                            <div className="relative group">
                                <input type="email" placeholder={content.newsletter.placeholder} className="w-full pl-6 pr-36 py-4 bg-slate-50 border border-slate-100 rounded-full text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all" />
                                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#0F172A] text-white pl-5 pr-4 rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md font-sans font-medium">
                                    {content.newsletter.button}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-slate-500">
                    <p className="font-sans font-medium">{content.designedBy}</p>
                    <p className="font-sans font-medium">{content.copyright}</p>
                </div>
            </div>
        </footer>
    );
};
