import React from 'react';
import { PillarPageTemplate } from '../PillarPageTemplate';

export const PdfToEnglishExercises = () => {
    const data = {
        seo: {
            title: "Convert PDF to Interactive English Exercises | AI Lesson Generator",
            description: "Instantly convert your static PDF textbooks and worksheets into interactive, auto-graded digital English exercises with AI.",
            canonical: "https://educhill.net/pdf-to-english-exercises"
        },
        hero: {
            title: "Turn PDFs into Interactive Exercises",
            subtitle: "Don't throw away your materials. Transform static PDFs into engaging, auto-graded digital lessons in seconds with AI.",
            ctaText: "Convert PDF Now"
        },
        content: {
            intro: "You have gigabytes of PDFs, worksheets, and textbooks. Instead of re-typing them, let Educhill's AI extract the content and create interactive quizzes automatically.",
            features: [
                {
                    title: "Instant Conversion",
                    description: "Upload a PDF, and our AI identifies questions, texts, and exercises instantly."
                },
                {
                    title: "Smart Digitization",
                    description: "Converts gap-fills, multiple choice, and matching exercises into clickable web formats."
                },
                {
                    title: "Edit & Customize",
                    description: "Review the generated exercises and add your own flair before assigning to students."
                },
                {
                    title: "Mobile Friendly",
                    description: "Your students can do the exercises on their phones—no more printing required."
                }
            ],
            body: `
                <h2>Revitalize Your Old Materials</h2>
                <p>We all have that folder of "Gold" resources that are stuck in PDF format. Educhill unlocks that value, turning them into modern, trackable assignments.</p>
                
                <h3>How It Works</h3>
                <ol>
                    <li><strong>Upload:</strong> Drag and drop your PDF file.</li>
                    <li><strong>AI Analysis:</strong> Our engine reads the text and identifies question structures.</li>
                    <li><strong>Generate:</strong> A fully interactive lesson is created.</li>
                    <li><strong>Assign:</strong> Send a link to your students.</li>
                </ol>
            `
        },
        cta: {
            title: "Digitize Your Curriculum",
            subtitle: "Make your teaching materials work harder for you.",
            buttonText: "Try PDF Converter"
        }
    };

    return <PillarPageTemplate {...data} />;
};
