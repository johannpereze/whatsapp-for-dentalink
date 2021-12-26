import React from 'react'
import { DataGrid } from '@mui/x-data-grid';


export default function ClinicsList() {

    const columns = [
        { field: 'id', headerName: 'ID'},
        { field: 'name', headerName: 'nombre', minWidth: 300},
    ];

    const rows = [
        { id: 1, name: 'Prevenga Caldas'}, 
        { id: 2, name: 'Prevenga La Ceja'}, 
        { id: 3, name: 'Prevenga Rionegro'}, 
        { id: 4, name: 'Prevenga Sabaneta'}, 
        { id: 5, name: 'Prevenga Itagui'}, 
        { id: 6, name: 'Prevenga Éxito San Antonio'}, 
        { id: 7, name: 'Prevenga La Unión'}, 
        { id: 8, name: 'Prevenga López de Mesa'}, 
        { id: 9, name: 'Prevenga San Antonio de Prado'}, 
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={25}
                hideFooterPagination
                // rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}