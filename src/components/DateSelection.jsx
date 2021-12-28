import React, { useState } from 'react'
import { DatePicker } from '@mui/lab'
import { Button, FormControl, Paper, TextField, Typography } from '@mui/material';
import ClinicsList from "./ClinicsList";

export default function DateSelection({ componentVisibility, setComponentVisibility }) {

    const { clinicsList } = componentVisibility

    const [appointmentsDate, setAppointmentsDate] = useState(null)

    const saveAppointmentsDate = (e) => {
        console.log(e); //Este no lo necesito por ahora
        console.log(appointmentsDate);
        setComponentVisibility({ ...componentVisibility, clinicsList: true })
    }

    return (
        <>
            <Paper >
                <Typography sx={{ mt: 2 }} variant="h6" component="h2">Selecciona la fecha de las citas</Typography>
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <DatePicker
                        label="Fecha"
                        value={appointmentsDate}
                        onChange={(newDate) => {
                            setAppointmentsDate(newDate);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <Button sx={{ mt: 2, width: '30%' }} variant="contained" type="submit" label="Siguiente" onClick={saveAppointmentsDate}>Guardar fecha</Button>

                </FormControl>
            </Paper>
            {clinicsList && <ClinicsList
                componentVisibility={componentVisibility}
                setComponentVisibility={setComponentVisibility}
            />}
        </>
    )
}