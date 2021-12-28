import { httpErrorHandling } from "./httpErrorHandling";

const DENTALINK_KEY = process.env.REACT_APP_DENTALINK_KEY

export const updateAppointment = async (appointments, retryCount = 0, retryLimit = 10, index = 0) => {
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
                    httpErrorHandling(updateAppointment, data, index, appointments, retryCount, retryLimit)
                }
            })
    }
}
