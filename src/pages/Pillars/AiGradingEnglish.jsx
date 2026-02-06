import React from 'react';
import { PillarPageTemplate } from '../PillarPageTemplate';

export const AiGradingEnglish = () => {
    const data = {
        seo: {
            title: "AI Grading for English | Educhill - Bring your Class Online",
            description: "Cut grading time by 90% with Educhill's AI grading tool for English teachers. Instant feedback on Writing and Speaking assignments.",
            canonical: "https://educhill.net/ai-grading-english"
        },
        hero: {
            title: "Automated AI Grading for English Teachers",
            subtitle: "Stop spending weekends grading papers. Let our AI handle the heavy lifting for Writing and Speaking assessments.",
            ctaText: "Try AI Grading Free"
        },
        content: {
            intro: "Grading is the #1 cause of burnout for English teachers. Educhill's advanced AI grading engine provides instant, accurate, and detailed feedback for your students.",
            features: [
                {
                    title: "Instant Writing Feedback",
                    description: "Checks grammar, vocabulary, coherence, and task achievement instantly."
                },
                {
                    title: "Speaking Assessment",
                    description: "Analyzes pronunciation, fluency, and variety of grammatical structures."
                },
                {
                    title: "Custom Rubrics",
                    description: "Configure the AI to grade based on IELTS, TOEFL, or your own custom criteria."
                },
                {
                    title: "Detailed Analytics",
                    description: "Spot class-wide trends and individual student weaknesses automatically."
                }
            ],
            body: `
                <h2>How AI Grading Works</h2>
                <p>Educhill uses state-of-the-art Large Language Models (LLMs) tuned specifically for ESL/EFL contexts. It acts as a tireless teaching assistant that mimics your grading style but works at lightning speed.</p>
                
                <h3>Beyond Just Scores</h3>
                <p>Giving a score is easy. Giving constructive feedback is hard. Our AI provides line-by-line suggestions on how to improve, explaining <em>why</em> a sentence is grammatically incorrect or suggesting better vocabulary choices.</p>

                <h3>Consistency Across Classes</h3>
                <p>Humans get tired. AI doesn't. Ensure every student gets the same high-quality, unbiased assessment whether it's the first paper you grade or the fiftieth.</p>
            `
        },
        cta: {
            title: "Reclaim Your Weekends",
            subtitle: "Start using AI grading today and focus on what you love—teaching.",
            buttonText: "Start Grading with AI"
        }
    };

    return <PillarPageTemplate {...data} />;
};
