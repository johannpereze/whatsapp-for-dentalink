import { httpErrorHandling } from "./httpErrorHandling";

const DENTALINK_KEY = process.env.REACT_APP_DENTALINK_KEY

export const downloadWA = async (patients, retryCount = 0, retryLimit = 10, index = 0) => {
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
    }
    else {
        return fetch(`${url}${patients[index]}`, requestOptions)
            .then(async (res) => {
                const data = await res.json()
                console.log(data)
                if (data.data) {
                    console.log(data.data.celular)
                    setTimeout(() => {
                        return downloadWA(patients, retryCount, retryLimit, index)
                    }, 1000);
                    index++
                } else {
                    httpErrorHandling(downloadWA, data, index, patients, retryCount, retryLimit)
                }
            })
    }
}