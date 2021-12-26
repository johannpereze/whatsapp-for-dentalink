import React, { useState } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'

export default function TemplateSelection() {

    //NO HE PODIDO SETEAR LOS ESTADOS DE ESTE COMPONENTE
    const [selectedTemplateInput, setSelectedTemplateInput] = useState("")
    const [selectedTemplateObject, setSelectedTemplateObject] = useState({
        templateName: '',
        templateContent: ""
    })

    const availableWhatsAppTemplates = [
        {
            templateName: 'Notificaciones_1',
            templateContent: "Hola, 'Nombre Paciente'. Recuerda que tienes una cita odontológica en 'Sede Prevenga' el día 'Fecha de Cita' a las  'Hora de Cita' con el/la Dr(a). 'Nombre odontólogo'.  Si tienes dudas con tu cita, contáctanos por nuestro WhatsApp principal: 3137596945 o nuestras Redes Sociales. *NO RESPONDAS a este WhatsApp, es sólo de notificaciones y no recibiremos tu mensaje.*"
        },
        {
            templateName: '',
            templateContent: ""
        }
    ]

    const handleWhatsAppTemplateChange = (e) => {
        setSelectedTemplateInput(e.target.value)
        const selectedTemplate = availableWhatsAppTemplates.find(({ templateName, templateContent }) => { return { templateName: templateName, templateContent: templateContent } })
        setSelectedTemplateObject(selectedTemplate)
        console.log("Imprimos evento", e);
        console.log("Imprimos whatsAppTemplate", selectedTemplateInput);
        console.log("selectedTemplate", selectedTemplate);
        console.log("selectedTemplateObject", selectedTemplateObject);
    }

    const saveWhatsAppTemplate = () => {
        console.log(selectedTemplateInput);
        console.log("Ocultamos Componente");
    }

    return (
        <div>
            <Typography sx={{ mt: 2 }} variant="h6" component="h2">
                Selección de Plantilla
            </Typography>
            <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel id="whatsapp-simple-select-label">Selecciona la Plantilla de Envío</InputLabel>
                <Select
                    labelId="whatsapp-simple-select-label"
                    id="whatsapp-simple-select"
                    value={selectedTemplateInput}
                    label="Selecciona la Línea de WhatsApp"
                    onChange={handleWhatsAppTemplateChange}
                >
                    {availableWhatsAppTemplates.map((availableWhatsAppTemplate) => <MenuItem style={{ whiteSpace: "break-spaces" }} key={availableWhatsAppTemplate.templateName} value={availableWhatsAppTemplate.templateName}>{availableWhatsAppTemplate.templateContent}</MenuItem>)}
                </Select>

                <Button sx={{ mt: 2, width: '30%' }} variant="contained" type="submit" label="Siguiente" onClick={saveWhatsAppTemplate}>Siguiente</Button>
            </FormControl>
        </div>
    )
}
