import React from 'react'
import { Paper, Typography, Chip, Stack } from '@mui/material'
import { InfoOutlined } from '@mui/icons-material';

export default function Message({ message }) {
    return (
        <Paper elevation={3} sx={{ p: 2, m: 2 }}>
            <Typography variant="body1" component="p">
                {message}
            </Typography>
            <hr />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <Chip icon={<InfoOutlined />} label="Sin enviar" color="warning" />
                <Chip icon={<InfoOutlined />} label="Sin actualizar en dentalink" color="warning" />
            </Stack>

        </Paper>
    )
}