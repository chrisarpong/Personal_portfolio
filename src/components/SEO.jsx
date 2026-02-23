import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image }) => {
    const siteTitle = title ? `${title} | Christian Sarpong` : 'Christian Sarpong | Fullstack Developer';
    const siteDescription = description || 'Portfolio of Christian Sarpong, a Fullstack Developer specializing in React, Node.js, and high-performance web applications.';
    const siteUrl = url || 'https://christiansarpong.com'; // Adjust this to the actual domain when deploying

    // Fallback OG image (you can place an actual generated image in /public folder)
    const siteImage = image || `${siteUrl}/og-image.jpg`;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />

            {/* OpenGraph tags for Facebook & LinkedIn */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:image" content={siteImage} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={siteImage} />

            {/* Viewport and encoding */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
    );
};

export default SEO;
