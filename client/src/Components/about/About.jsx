import React from 'react';
import { Box, styled, Typography, Link, Grid } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

// Full-page background image with dark overlay
const FullPageBackground = styled(Box)`
    background-image: url(/Assets/Banner/banner.jpg); /* Use your banner image here */
    margin-top: -66px;
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    position: relative;
    font-family: 'Poppins', sans-serif;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6); /* Dark overlay for better text visibility */
    }
`;

// Wrapper for the content
const ContentWrapper = styled(Box)`
    position: relative;
    z-index: 1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    animation: fadeIn 1.5s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        padding: 10px;
        & > h3 {
            font-size: 2rem; /* Smaller font size for mobile */
        }
        & > h5 {
            font-size: 1rem; /* Smaller font size for mobile */
        }
    }
`;

const Text = styled(Typography)`
    color: #fff;
    margin: 20px 0;
    animation: fadeIn 2s ease-in-out;

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        margin: 10px 0;
        font-size: 1rem; /* Smaller font size for mobile */
    }
`;

const SocialLink = styled(Link)`
    margin: 0 10px;
    color: #fff;
    transition: color 0.3s ease, transform 0.3s ease;
    &:hover {
        color: #1976d2;
        transform: scale(1.2);
    }

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        margin: 0 5px;
        & > .MuiSvgIcon-root {
            font-size: 1.5rem; /* Smaller icon size for mobile */
        }
    }
`;

const About = () => {
    return (
        <FullPageBackground>
            {/* Add Poppins font from Google Fonts */}
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <ContentWrapper>
                <Typography variant="h3" gutterBottom style={{ animation: 'fadeIn 1s ease-in-out' }}>
                    About Us
                </Typography>
                <Text variant="h5">
                    Welcome to our blogging platform! We provide a space for writers, thinkers, and creators to share their stories, ideas, and experiences with the world. Our tools make it easy to create, edit, and manage your posts, whether you're a seasoned blogger or just starting out.
                </Text>
                <Text variant="h5">
                    Feel free to connect with us on social media or reach out via email for any inquiries or support.
                </Text>
                <Grid container justifyContent="center" spacing={3} style={{ marginTop: 20 }}>
                    <Grid item>
                        <SocialLink href="https://github.com" target="_blank">
                            <GitHub fontSize="large" />
                        </SocialLink>
                    </Grid>
                    <Grid item>
                        <SocialLink href="https://www.instagram.com" target="_blank">
                            <Instagram fontSize="large" />
                        </SocialLink>
                    </Grid>
                    <Grid item>
                        <SocialLink href="mailto:guptaaryan8092@gmail.com?Subject=Inquiry" target="_blank">
                            <Email fontSize="large" />
                        </SocialLink>
                    </Grid>
                </Grid>
                <Text variant="h6" style={{ marginTop: 40, animation: 'fadeIn 2.5s ease-in-out' }}>
                    &copy; {new Date().getFullYear()} Your Blogging Platform. All rights reserved.
                </Text>
            </ContentWrapper>
        </FullPageBackground>
    );
};

export default About;