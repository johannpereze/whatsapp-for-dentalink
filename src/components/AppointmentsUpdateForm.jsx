import React, { useState } from 'react'

export default function AppointmentsUpdateForm() {

    const [appointmentsIDs, setAppointmentsIDs] = useState([])

    // Parámetros HTTP
    const DENTALINK_KEY = process.env.REACT_APP_DENTALINK_KEY
    const url = 'https://api.dentalink.healthatom.com/api/v1/citas/'
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${DENTALINK_KEY}`);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "id_estado": 24
    });
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // Función Recursiva
    const updateAppointment = async (url, appointments, requestOptions, retryLimit = 50, retryCount = 0, index = 0) => {
        if (index === appointments.length) { return }
        else {
            return fetch(`${url}${appointments[index]}`, requestOptions)
                .then(async (res) => {
                    const data = await res.json()
                    console.log(data)
                    if (data.data) {
                        setTimeout(() => {
                            return updateAppointment(url, appointments, requestOptions, retryLimit, retryCount, index)
                        }, 1000);
                        index++
                    } else {
                        if (data.error.code === 429 && retryCount < retryLimit) {
                            console.log("Error 429, reintentando en unos segundos");
                            setTimeout(() => {
                                return updateAppointment(url, appointmentsIDs, requestOptions, retryLimit, retryCount + 1, index);
                            }, 5000);
                        } else {
                            console.log("Error diferente al 429", res);
                        }
                    }
                })
        }
    }

    const handleAdd = () => {
        console.log(appointmentsIDs);
        updateAppointment(url, appointmentsIDs, requestOptions, 10)
    }

    const handleInputChange = ({ target }) => {
        setAppointmentsIDs(target.value.split("\n"))
    }

    return (
        <div>

            <textarea name="" id="" cols="30" rows="10" value={appointmentsIDs} onChange={handleInputChange}></textarea>
            <button type="button" onClick={handleAdd}>Actualizar en Dentalink</button>
            <ul>
                {appointmentsIDs.map((appointment) => <li key={appointment}>{appointment}</li>)}
            </ul>

        </div>
    )
}
