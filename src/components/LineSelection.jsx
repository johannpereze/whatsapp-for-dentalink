import React, { useState } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/lab'

export default function LineSelection() {

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
        console.log("Ocultamos componente");
        console.log(whatsAppLine);
        console.log(whatsAppNote);
    }

    const [value, setValue] = useState(null)

    return (
        <div>
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
            <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </div>
    )
}
