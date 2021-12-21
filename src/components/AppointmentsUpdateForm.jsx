import React, { useState } from 'react'

export default function AppointmentsUpdateForm() {

    const [appointmentsIDs, setAppointmentsIDs] = useState([])
    const [patientsIDs, setPatientsIDs] = useState([])

    // Parámetros HTTP
    const DENTALINK_KEY = process.env.REACT_APP_DENTALINK_KEY


    // Funciones Recursivas

    const downloadWA = async (patients, retryLimit = 50, retryCount = 0, index = 0) => {
        const url = 'https://api.dentalink.healthatom.com/api/v1/pacientes/'
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Token ${DENTALINK_KEY}`);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        if (index === patients.length) {
            console.log('Finalizado');
            return
        }
        else {
            return fetch(`${url}${patients[index]}`, requestOptions)
                .then(async (res) => {
                    const data = await res.json()
                    console.log(data)
                    if (data.data) {
                        console.log(data.data.celular)
                        setTimeout(() => {
                            return downloadWA(patients, retryLimit, retryCount, index)
                        }, 1000);
                        index++
                    } else {
                        switch (data.error.code) {
                            case 400:
                                console.log(`Error ${data.error.code}, pasando al siguiente`);
                                index++
                                setTimeout(() => {
                                    return downloadWA(patients, retryLimit, retryCount, index);
                                }, 1000);
                                break;
                            case 405:
                                console.log(`Error ${data.error.code}, pasando al siguiente`);
                                index++
                                setTimeout(() => {
                                    return downloadWA(patients, retryLimit, retryCount, index);
                                }, 1000);
                                break;
                            default:
                                console.log(`Error ${data.error.code}, reintentando en unos segundos`);
                                setTimeout(() => {
                                    return downloadWA(patients, retryLimit, retryCount + 1, index);
                                }, 5000);
                                break;
                        }
                    }
                })
        }
    }


    const updateAppointment = async (appointments, retryLimit = 50, retryCount = 0, index = 0) => {
        const url = 'https://api.dentalink.healthatom.com/api/v1/citas/'
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Token ${DENTALINK_KEY}`);
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "id_estado": 24
        });
        const requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        if (index === appointments.length) {
            console.log('Finalizado');
            return
        }
        else {
            return fetch(`${url}${appointments[index]}`, requestOptions)
                .then(async (res) => {
                    const data = await res.json()
                    console.log(data)
                    if (data.data) {
                        setTimeout(() => {
                            return updateAppointment(appointments, retryLimit, retryCount, index)
                        }, 1000);
                        index++
                    } else {
                        switch (data.error.code) {
                            case 400:
                                console.log(`Error ${data.error.code}, pasando al siguiente`);
                                index++
                                setTimeout(() => {
                                    return updateAppointment(appointments, retryLimit, retryCount, index);
                                }, 1000);
                                break;
                            case 405:
                                console.log(`Error ${data.error.code}, pasando al siguiente`);
                                index++
                                setTimeout(() => {
                                    return updateAppointment(appointments, retryLimit, retryCount, index);
                                }, 1000);
                                break;
                            default:
                                console.log(`Error ${data.error.code}, reintentando en unos segundos`);
                                setTimeout(() => {
                                    return updateAppointment(appointments, retryLimit, retryCount + 1, index);
                                }, 5000);
                                break;
                        }
                    }
                })
        }
    }

    // const dentalinkAppointmentsDownload = () => {
    //     console.log(appointmentsIDs);
    //     downloadAppointments(appointmentsIDs, 10)
    // }
    const dentalinkWADownloads = () => {
        console.log(patientsIDs);
        downloadWA(patientsIDs, 10)
    }
    const dentalinkStateUpdate = () => {
        console.log(appointmentsIDs);
        updateAppointment(appointmentsIDs, 10)
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
