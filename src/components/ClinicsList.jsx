import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, Paper, Typography } from '@mui/material';


export default function ClinicsList() {

    const saveSelectedClinics = () => {
        console.log('Ocultando Componente');
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'nombre', minWidth: 300 },
    ];

    const rows = [
        { id: 1, name: 'Prevenga Caldas' },
        { id: 2, name: 'Prevenga La Ceja' },
        { id: 3, name: 'Prevenga Rionegro' },
        { id: 4, name: 'Prevenga Sabaneta' },
        { id: 5, name: 'Prevenga Itagui' },
        { id: 6, name: 'Prevenga Éxito San Antonio' },
        { id: 7, name: 'Prevenga La Unión' },
        { id: 8, name: 'Prevenga López de Mesa' },
        { id: 9, name: 'Prevenga San Antonio de Prado' },
    ];

    return (
        <Paper>
            <Typography sx={{ mt: 2 }} variant="h6" component="h2">Sucursales</Typography>
            <div style={{ height: 400, width: '100%', marginTop: '20px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={25}
                    hideFooterPagination
                    // rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            </div>
            <Button sx={{ mt: 2, width: '30%' }} variant="contained" type="submit" label="Siguiente" onClick={saveSelectedClinics}>Siguiente</Button>
        </Paper>
    )
}