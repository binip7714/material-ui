import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <>
            <Typography variant="h6">Footer</Typography>
            <Typography variant="subtile1" color="textSecondary">
                Footer Text here
            </Typography>
            <Typography variant="body2">
                {`Copyright © ${new Date().getFullYear()}`}
            </Typography>
        </>
    );
};

export default Footer;