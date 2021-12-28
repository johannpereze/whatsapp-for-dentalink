import React, { useState } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'

export default function LineSelection({ componentVisibility, setComponentVisibility }) {

    const [whatsAppLine, setWhatsAppLine] = useState("")
    const [whatsAppNote, setWhatsAppNote] = useState("")

    const availableWhatsAppLines = [573137548892, 573137596945]

    const handleWhatsAppLineChange = (e) => {
        setWhatsAppLine(e.target.value)
    }

    const handleNoteChange = (e) => {
        setWhatsAppNote(e.target.value)
    }

    const saveWhatsAppAndNote = (e) => {
        console.log(e); //Creo que no necesito el evento
        console.log(whatsAppLine);
        console.log(whatsAppNote);
        setComponentVisibility({ ...componentVisibility, lineSelection: false, dateSelection: true })
    }

    return (
        <Paper>
            <Typography sx={{ mt: 2 }} variant="h6" component="h2">
                Selección de línea
            </Typography>
            <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel id="whatsapp-simple-select-label">Selecciona la Línea de WhatsApp</InputLabel>
                <Select
                    labelId="whatsapp-simple-select-label"
                    id="whatsapp-simple-select"
                    value={whatsAppLine}
                    label="Selecciona la Línea de WhatsApp"
                    onChange={handleWhatsAppLineChange}
                >
                    {availableWhatsAppLines.map((availableWHatsAppLine) => <MenuItem key={availableWHatsAppLine} value={availableWHatsAppLine}>{availableWHatsAppLine}</MenuItem>)}
                </Select>
                <TextField
                    sx={{ mt: 2 }}
                    id="outlined-textarea"
                    label="Agrega una nota de envío"
                    placeholder="Agrega una nota de envío"
                    multiline
                    value={whatsAppNote}
                    onChange={handleNoteChange}
                />
                <Button sx={{ mt: 2, width: '30%' }} variant="contained" type="submit" label="Siguiente" onClick={saveWhatsAppAndNote}>Siguiente</Button>
            </FormControl>
        </Paper>
    )
}
