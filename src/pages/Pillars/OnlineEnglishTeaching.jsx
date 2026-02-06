import React from 'react';
import { PillarPageTemplate } from '../PillarPageTemplate';

export const OnlineEnglishTeaching = () => {
    const data = {
        seo: {
            title: "Tools for Teaching English Online | Manage Online Classes Effectively",
            description: "Everything you need to succeed in online English teaching. Class management, interactive whiteboards, and student tracking in one place.",
            canonical: "https://educhill.net/online-english-teaching"
        },
        hero: {
            title: "Master Online English Teaching",
            subtitle: "The comprehensive toolkit for modern online ESL teachers. Engage students, manage classes, and scale your teaching business.",
            ctaText: "Build Your Online Class"
        },
        content: {
            intro: "Teaching English online is competitive. To stand out, you need professional tools that deliver a premium learning experience to your students.",
            features: [
                {
                    title: "Interactive Classrooms",
                    description: "Move beyond static PDFs. Use interactive exercises that keep students clicked in."
                },
                {
                    title: "Student Progress Tracking",
                    description: "Visualize student growth over time with automated charts and reports."
                },
                {
                    title: "Homework Automation",
                    description: "Assign homework that auto-grades itself, keeping students practicing between lessons."
                },
                {
                    title: "Easy Scheduling",
                    description: "Manage your class calendar and reminders effortlessly."
                }
            ],
            body: `
                <h2>Scale Your Teaching Business</h2>
                <p>Whether you are a solo tutor or managing a small language center, efficiency is key. Educhill provides the infrastructure to handle 50+ students as easily as you handle 5.</p>
                
                <h3>Engagement is Key</h3>
                <p>Online students drop out when they get bored. Our platform enables gamified learning experiences and instant gratification through auto-graded exercises, keeping retention rates high.</p>
            `
        },
        cta: {
            title: "Teach Professionaly. Scale Easily.",
            subtitle: "Join the platform that powers successful online English teachers.",
            buttonText: "Get Started Free"
        }
    };

    return <PillarPageTemplate {...data} />;
};
