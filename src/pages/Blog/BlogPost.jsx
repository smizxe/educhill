import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { blogPosts } from '../../data/blogPosts';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

export const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center flex-col gap-4">
                <h1 className="text-2xl font-bold text-slate-900">Bài viết không tồn tại</h1>
                <Link to="/blog" className="text-indigo-600 hover:underline">Quay lại Blog</Link>
            </div>
        );
    }

    // JSON-LD Structured Data for BlogPosting
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "datePublished": post.date,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://educhill.net/blog/${post.slug}`
        }
    };

    return (
        <>
            <SEO
                title={`${post.title} - Educhill Blog`}
                description={post.excerpt}
                keywords={post.keywords}
                canonical={`https://educhill.net/blog/${post.slug}`}
                type="article"
            />
            {/* Inject Schema JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>

            <article className="pt-32 pb-20 min-h-screen bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8 font-medium">
                        <ArrowLeft className="w-4 h-4" /> Quay lại Blog
                    </Link>

                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
                            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-xs flex items-center gap-1">
                                <Tag className="w-3 h-3" /> {post.category}
                            </span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6 font-sans">
                            {post.title}
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-indigo-500 pl-4">
                            {post.excerpt}
                        </p>
                    </header>

                    <div
                        className="prose prose-lg prose-indigo prose-slate max-w-none font-sans"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-16 pt-8 border-t border-slate-100">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Bài viết này hữu ích?</h3>
                        <div className="flex gap-4">
                            {/* Social Share Buttons could go here */}
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};
