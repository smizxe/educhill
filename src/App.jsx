import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { BlogList } from './pages/Blog/BlogList';
import { BlogPost } from './pages/Blog/BlogPost';
import { EnglishTeachingPlatform } from './pages/Pillars/EnglishTeachingPlatform';
import { AiGradingEnglish } from './pages/Pillars/AiGradingEnglish';
import { OnlineEnglishTeaching } from './pages/Pillars/OnlineEnglishTeaching';
import { PdfToEnglishExercises } from './pages/Pillars/PdfToEnglishExercises';
import { SpeakingWritingAssessmentAi } from './pages/Pillars/SpeakingWritingAssessmentAi';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />

                    {/* Vietnamese Routes */}
                    <Route path="/vi" element={<Home />} />
                    <Route path="/vi/about" element={<About />} />
                    <Route path="/vi/contact" element={<Contact />} />
                    <Route path="/vi/features" element={<Home />} /> {/* Fallback for features link */}
                    <Route path="features" element={<Home />} /> {/* Fallback for features link */}

                    {/* Blog Routes */}
                    <Route path="blog" element={<BlogList />} />
                    <Route path="blog/:slug" element={<BlogPost />} />

                    {/* SEO Pillar Pages */}
                    <Route path="english-teaching-platform" element={<EnglishTeachingPlatform />} />
                    <Route path="ai-grading-english" element={<AiGradingEnglish />} />
                    <Route path="online-english-teaching" element={<OnlineEnglishTeaching />} />
                    <Route path="pdf-to-english-exercises" element={<PdfToEnglishExercises />} />
                    <Route path="speaking-writing-assessment-ai" element={<SpeakingWritingAssessmentAi />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
