import React from 'react';
import { PillarPageTemplate } from '../PillarPageTemplate';

export const EnglishTeachingPlatform = () => {
    const data = {
        seo: {
            title: "Best English Teaching Platform | Educhill - Bring your Class Online",
            description: "Educhill is the all-in-one English teaching platform that automates grading, curriculum management, and student tracking. Try it free today!",
            canonical: "https://educhill.net/english-teaching-platform"
        },
        hero: {
            title: "The Ultimate English Teaching Platform",
            subtitle: "Manage classes, automate grading, and engage students with the #1 platform built specifically for English teachers.",
            ctaText: "Start Teaching Smarter"
        },
        content: {
            intro: "Are you tired of juggling multiple tools for Zoom, assignments, grading, and payments? Educhill brings widely dispersed teaching tasks into one unified English teaching platform.",
            features: [
                {
                    title: "Automated Grading",
                    description: "Save 10+ hours a week with AI that grades Writing & Speaking instantly."
                },
                {
                    title: "Class Management",
                    description: "Track student progress, attendance, and performance in one dashboard."
                },
                {
                    title: "Interactive Exercises",
                    description: "Create engaging drag-and-drop, gap-fill, and speaking exercises in minutes."
                },
                {
                    title: "PDF to Exercise",
                    description: "Convert your existing teaching materials into digital interactive lessons instantly."
                }
            ],
            body: `
                <h2>Why Choose Educhill as Your English Teaching Platform?</h2>
                <p>Teaching English online requires more than just a video conferencing tool. You need a comprehensive system that handles the "boring" parts of teaching so you can focus on your students.</p>
                
                <h3>1. Built for English Teachers, By Teachers</h3>
                <p>Unlike generic LMS platforms, Educhill is designed with language learning in mind. We support audio recording for speaking practice, rich text for writing essays, and specific feedback mechanisms for grammar and vocabulary.</p>

                <h3>2. Seamless Integration</h3>
                <p>Educhill works alongside your favorite tools. Whether you teach on Zoom, Google Meet, or Skype, our platform handles the curriculum and assessment side perfectly.</p>
            `
        },
        cta: {
            title: "Ready to Upgrade Your Teaching?",
            subtitle: "Join thousands of teachers who are saving time and earning more with Educhill.",
            buttonText: "Get Started Now"
        }
    };

    return <PillarPageTemplate {...data} />;
};
