import React from 'react';
import { Box, styled, Typography, Link, Grid, TextField, Button } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

// Banner with background image
const Banner = styled(Box)`
    background-image: url(/Assets/Contact/contact.gif);
    margin-top: -66px;
    width: 100%;
    height: 90vh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 48px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    animation: fadeIn 1.5s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        height: 30vh;
        font-size: 36px;
    }
`;

// Wrapper for the content
const Wrapper = styled(Box)`
    padding: 40px 20px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    animation: slideUp 1.5s ease-in-out;

    @keyframes slideUp {
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
        padding: 20px 10px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
    margin: 20px 0;
    font-family: 'Poppins', sans-serif;

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const SocialLink = styled(Link)`
    margin: 0 10px;
    color: #878787;
    transition: color 0.3s ease, transform 0.3s ease;
    &:hover {
        color: #1976d2;
        transform: scale(1.2);
    }

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        margin: 0 5px;
    }
`;

const StyledTextField = styled(TextField)`
    margin: 10px 0;
    width: 100%;
    & .MuiOutlinedInput-root {
        border-radius: 10px;
    }
`;

const StyledButton = styled(Button)`
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 10px;
    background-color: #1976d2;
    color: #fff;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #1565c0;
    }
`;

const Contact = () => {
    return (
        <Box>
            {/* Add Poppins font from Google Fonts */}
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <Banner>Contact Us</Banner>
            <Wrapper>
                <Typography variant="h3" gutterBottom style={{ fontFamily: 'Poppins', animation: 'fadeIn 1s ease-in-out' }}>
                    Getting in touch is easy!
                </Typography>
                <Text variant="h5">
                    Reach out to us on social media or send us a message using the form below.
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
                <Box component="form" style={{ marginTop: 40 }}>
                    <StyledTextField
                        label="Your Name"
                        variant="outlined"
                        fullWidth
                    />
                    <StyledTextField
                        label="Your Email"
                        variant="outlined"
                        fullWidth
                    />
                    <StyledTextField
                        label="Your Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                    />
                    <StyledButton variant="contained" fullWidth>
                        Send Message
                    </StyledButton>
                </Box>
                <Text variant="h6" style={{ marginTop: 40, animation: 'fadeIn 2.5s ease-in-out' }}>
                    &copy; {new Date().getFullYear()} Your Blogging Platform. All rights reserved.
                </Text>
            </Wrapper>
        </Box>
    );
};

export default Contact;