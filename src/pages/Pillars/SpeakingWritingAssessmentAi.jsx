import React from 'react';
import { PillarPageTemplate } from '../PillarPageTemplate';

export const SpeakingWritingAssessmentAi = () => {
    const data = {
        seo: {
            title: "AI Speaking & Writing Assessment Tool for English | Educhill",
            description: "Comprehensive AI assessment for IELTS Writing and Speaking. Get band scores, detailed corrections, and improvement plans automatically.",
            canonical: "https://educhill.net/speaking-writing-assessment-ai"
        },
        hero: {
            title: "AI-Powered Speaking & Writing Assessment",
            subtitle: "Deliver IELTS-grade assessments for Writing and Speaking tasks without the manual workload.",
            ctaText: "Assess Students Now"
        },
        content: {
            intro: "Assessing productive skills like Speaking and Writing is the most time-consuming part of language teaching. Educhill automates this with high-precision AI models.",
            features: [
                {
                    title: "IELTS & TOEIC Scoring",
                    description: "AI trained on thousands of exam papers to predict band scores accurately."
                },
                {
                    title: "Pronunciation Analysis",
                    description: "Pinpoints mispronounced words and suggests corrections."
                },
                {
                    title: "Grammar & Cohesion",
                    description: "Highlights grammatical errors and suggests cohesive devices to improve flow."
                },
                {
                    title: "Progress Tracking",
                    description: "See how a student's band score improves over weeks and months."
                }
            ],
            body: `
                <h2>Professional Assessment at Scale</h2>
                <p>Usually, detailed feedback is a luxury limited by teacher time. With AI, every student can get detailed feedback on every single assignment.</p>
                
                <h3>For Exam Preparation Centers</h3>
                <p>If you run an IELTS or TOEIC prep center, Educhill is a game-changer. Increase your mock test capacity by 10x without hiring more examiners.</p>
            `
        },
        cta: {
            title: "Upgrade Your Assessment Quality",
            subtitle: "Give your students the feedback they deserve, instantly.",
            buttonText: "Start AI Assessment"
        }
    };

    return <PillarPageTemplate {...data} />;
};
