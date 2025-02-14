import React from 'react';
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    border-radius: 13px;
    width: 100%;
    height: 60vh;
    margin-top: -66px; /* Adds space between navbar and banner */
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                url(/Assets/Banner/banner2.jpeg) center/cover no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    // padding: 20px;
`;

const Heading = styled(Typography)`
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
    animation: fadeIn 1s ease-in-out;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const SubHeading = styled(Typography)`
    font-size: 1.5rem;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.2);
    padding: 10px 20px;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    animation: fadeIn 1.5s ease-in-out;

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 8px 15px;
    }
`;

const Banner = () => {
    return (
        <Image>
            <Heading>Publish Your Passions</Heading>
            <SubHeading>Create a unique and beautiful blog effortlessly.</SubHeading>
        </Image>
    );
};

export default Banner;
