import React, { useState } from 'react'

export default function AppointmentsUpdateForm() {

    const [appointmentsIDs, setAppointmentsIDs] = useState([])

    /*
    const updateAppointments = (appointments = []) => {

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

        appointments.map((appointment) => {
            setTimeout(() => {
                return fetch(`${url}${appointment}`, requestOptions)
                    .then(resp => resp.json())
                    .then(result => {
                        console.log(result)
                    })
                    .catch(err => {
                        if (err.status = 429) {
                            setTimeout(() => {

                            }, 22000);
                        }
                    })
            }, 1500);
        })
    } */

    /* 
    arrayDeIds[]
    arrayDeIds.map(
        funcion que hace fetch a un solo id
        .then(mostrar respuesta)
        .catch(funcion que hace fetch a un solo id)
    )
    */

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

    const updateAppointment = async (url, appointmentID, requestOptions, retryLimit = 10, retryCount = 0) => {
        setTimeout(() => {
            return fetch(`${url}${appointmentID}`, requestOptions).then((res) => {
                console.log(res.status);
                if (res.status === 429 && retryCount < retryLimit) {
                    console.log("There was an error processing your fetch request. We are trying again.");
                    setTimeout(() => {
                        return updateAppointment(url, appointmentID, requestOptions, retryLimit, retryCount + 1);
                    }, 22000);
                } else {
                    res.json().then((resp)=>console.log(resp));
                }
            });
        }, 1500);
    }




    const handleAdd = () => {
        console.log(appointmentsIDs);
        appointmentsIDs.map((appointment) => {
            return updateAppointment(url, appointment, requestOptions, 10).then(function (json) {
                raw = json;
            }).catch(function (err) {
                console.log(`There was a problem with the fetch operation: ${err.message}`);
            });
        })

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
