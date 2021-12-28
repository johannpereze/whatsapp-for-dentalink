import React, { useState } from 'react'
import { downloadWA } from '../helpers/downloadWA'
import { updateAppointment } from '../helpers/updateAppointment'

export default function AppointmentsUpdateForm() {

    const [appointmentsIDs, setAppointmentsIDs] = useState([])
    const [patientsIDs, setPatientsIDs] = useState([])

    // const dentalinkAppointmentsDownload = () => {
    //     console.log(appointmentsIDs);
    //     downloadAppointments(appointmentsIDs, 10)
    // }
    const dentalinkWADownloads = () => {
        console.log(patientsIDs);
        downloadWA(patientsIDs)
    }
    const dentalinkStateUpdate = () => {
        console.log(appointmentsIDs);
        updateAppointment(appointmentsIDs)
    }

    const handleAppointmentsChange = ({ target }) => {
        setAppointmentsIDs(target.value.split("\n"))
    }
    const handlePatientsChange = ({ target }) => {
        setPatientsIDs(target.value.split("\n"))
    }

    return (
        <div>

            <textarea name="" id="" cols="30" rows="10" value={appointmentsIDs} onChange={handleAppointmentsChange}></textarea>
            <button type="button" onClick={dentalinkStateUpdate}>Actualizar en Dentalink</button>
            {/* <button type="button" onClick={dentalinkAppointmentsDownload}>Descargar citas</button> */}
            <textarea name="" id="" cols="30" rows="10" value={patientsIDs} onChange={handlePatientsChange}></textarea>
            <button type="button" onClick={dentalinkWADownloads}>Descargar WhatsApps</button>
            <ul>
                {appointmentsIDs.map((appointment) => <li key={appointment}>{appointment}</li>)}
            </ul>

        </div>
    )
}
