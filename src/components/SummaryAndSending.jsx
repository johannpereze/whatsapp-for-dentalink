import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import ProgressBarDeterminate from './ProgressBarDeterminate'
import ProgressBarIndeterminate from './ProgressBarIndeterminate'
import { Send, ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import MessagesContainer from './MessagesContainer';

export default function SummaryAndSending() {
    const [sendingParams] = useState({
        whatsappLine: "+57300000000-placeholder",
        whatsAppTemplate: "recordatorio_placeholder",
        sendingNote: "placeholder",
        appointmentsDate: "2021-12-27-placeholder"
    })

    const { whatsappLine, whatsAppTemplate, sendingNote, appointmentsDate } = sendingParams

    const progress = 50 //este es el porcentaje de la barra de progreso

    return (
        <div>
            <Typography sx={{ mt: 2 }} variant="h6" component="h6">Resumen del Envío</Typography>
            <Typography variant='body1' component="div">
                <ul>
                    <li><b>Línea de WhatsApp:</b> {whatsappLine}</li>
                    <li><b>Plantilla:</b> {whatsAppTemplate}2</li>
                    <li><b>Nota del envío:</b> {sendingNote}</li>
                    <li><b>Fecha de las citas:</b> {appointmentsDate}</li>
                </ul>
            </Typography>
            <Typography sx={{ mt: 2 }} variant="subtitle1" component="p"><b>Citas descargadas: {"X"}</b></Typography>
            <ProgressBarIndeterminate />
            <ProgressBarDeterminate value={progress} />
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Button fullWidth variant="contained" endIcon={<ArrowCircleDown />}>
                        {'Descargar Citas'}
                    </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button fullWidth sx={{ mr: 2 }} variant="contained" endIcon={<Send />}>
                        {'Enviar Mensajes'}
                    </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button fullWidth sx={{ mr: 2 }} variant="contained" endIcon={<ArrowCircleUp />}>
                        {'Actualizar en Dentalink'}
                    </Button>
                </Grid>
            </Grid>
            <MessagesContainer />
        </div>
    )
}
