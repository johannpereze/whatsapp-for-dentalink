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

    const updateAppointment = async (url, appointments, requestOptions, retryLimit = 50, retryCount = 0, index = 0) => {
        if (index === appointments.length) { return }
        else {
            return fetch(`${url}${appointments[index]}`, requestOptions)
                .then(async(res) => {
                    const data = await res.json()
                    console.log(data)
                    if (data.data) {
                        console.log('Se hizo el fetch correctamente');
                        setTimeout(() => {
                            return updateAppointment(url, appointments, requestOptions, retryLimit, retryCount, index)
                        }, 200);
                        index++
                    } else {
                        console.log('Se ejecuta el catch');
                        console.log("data.error.code sería: ",data.error.code);
                        console.log("retryCount", retryCount);
                        console.log("retryLimit", retryLimit);
                        if (data.error.code === 429 && retryCount < retryLimit) {
                            console.log("Error 429, reintentando en 22 segundos");
                            setTimeout(() => {
                                return updateAppointment(url, appointmentsIDs, requestOptions, retryLimit, retryCount + 1, index);
                            }, 22000);
                        } else {
                            console.log("Si veo esto es porque no lo estoy agarrando cuando es 429 ", res);
                        }
                    }


                })

        }
    }







    const handleAdd = () => {
        console.log(appointmentsIDs);

        updateAppointment(url, appointmentsIDs, requestOptions, 10)

        // appointmentsIDs.map(async (appointment) => {
        //     return setTimeout(() => {
        //         updateAppointment(url, appointment, requestOptions, 10).then(function (json) {
        //             raw = json;
        //         }).catch(function (err) {
        //             console.log(`There was a problem with the fetch operation: ${err.message}`);
        //         });
        //     }, 1500)
        // });

        //Hacer una función que llame a la siguiente en el then


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
