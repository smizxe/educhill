import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, keywords, canonical, type = 'website', name = 'Educhill' }) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph tags (Facebook, LinkedIn) */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />
            {/* Add more OG tags as needed (image, url) */}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* Schema.org JSON-LD (Optional, can be passed as a prop or handled separately) */}
        </Helmet>
    );
};
