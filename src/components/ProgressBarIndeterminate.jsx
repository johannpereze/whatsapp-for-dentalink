import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgressBarIndeterminate() {
    return (
        <Box sx={{ mt: 2, width: '100%' }}>
            <LinearProgress />
        </Box>
    );
}