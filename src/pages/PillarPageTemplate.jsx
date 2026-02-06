import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const PillarPageTemplate = ({ seo, hero, content, cta }) => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Additional Schema for SoftwareApplication regarding this specific feature
    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": seo.title,
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": seo.description
    };


    return (
        <>
            <SEO {...seo} />
            <script type="application/ld+json">
                {JSON.stringify(softwareSchema)}
            </script>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-sans leading-tight">
                            {hero.title}
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            {hero.subtitle}
                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all hover:scale-105 shadow-xl shadow-indigo-200"
                        >
                            {hero.ctaText || "Get Started Free"} <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg prose-indigo mx-auto font-sans">
                        {content.intro && <p className="lead text-xl text-slate-600 mb-12">{content.intro}</p>}

                        {content.features && (
                            <div className="grid md:grid-cols-2 gap-8 mb-16 not-prose">
                                {content.features.map((feature, idx) => (
                                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-slate-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div dangerouslySetInnerHTML={{ __html: content.body }} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{cta.title}</h2>
                    <p className="text-indigo-200 text-lg mb-10 max-w-2xl mx-auto">{cta.subtitle}</p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 bg-white text-indigo-900 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg"
                    >
                        {cta.buttonText}
                    </button>
                </div>
            </section>
        </>
    );
};
