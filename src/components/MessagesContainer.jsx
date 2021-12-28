import { Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Message from './Message'

export default function MessagesContainer() {
    const [messages] = useState([
        "Hola, NANCY ADRIANA SUAREZ. Recuerda que tienes una cita odontológica en Prevenga Éxito San Antonio el día 06/04/2022 a las 09:30:00 con el/la Dr(a). Ira del Castillo Farre Beltran. Si tienes dudas con tu cita, contáctanos por nuestro WhatsApp principal: 3137596945 o nuestras Redes Sociales. *NO RESPONDAS a este WhatsApp, es sólo de notificaciones y no recibiremos tu mensaje.*3147004042", "Hola, ESTEFANIA CANO MAYA. Recuerda que tienes una cita odontológica en Prevenga VIVA Envigado el día 06/04/2022 a las 08:00:00 con el/la Dr(a). Daniel Castaño Rendón. Si tienes dudas con tu cita, contáctanos por nuestro WhatsApp principal: 3137596945 o nuestras Redes Sociales. *NO RESPONDAS a este WhatsApp, es sólo de notificaciones y no recibiremos tu mensaje.*"
    ])
    return (
        <div>
            <Typography sx={{ mt: 2 }} variant="h6" component="h6">
                Mensajes a enviar:
            </Typography>
            <div>
                {messages.map((message) => <Message key={message} message={message} />)}
            </div>
        </div>
    )
}
