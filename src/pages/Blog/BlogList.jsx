import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { blogPosts } from '../../data/blogPosts';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const BlogList = () => {
    return (
        <>
            <SEO
                title="Blog | Educhill - Bring your English Class Online"
                description="Tips, tutorials, and insights for English teachers. Learn how to leverage AI grading, manage online classes effectively, and grow your teaching business."
                canonical="https://educhill.net/blog"
            />

            <section className="pt-32 pb-20 bg-slate-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-sans">
                            Educhill <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Blog</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Cập nhật xu hướng công nghệ giáo dục, mẹo giảng dạy và cách tối ưu hóa hiệu quả lớp học với AI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link key={post.id} to={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
                                <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 relative overflow-hidden">
                                    {/* Placeholder pattern or image */}
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500 via-purple-500 to-pink-500"></div>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                                        <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold">{post.category}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-600 mb-6 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                                        <span className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                                {post.author.charAt(0)}
                                            </div>
                                            {post.author}
                                        </span>
                                        <span className="text-indigo-600 font-medium text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            Đọc tiếp <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
