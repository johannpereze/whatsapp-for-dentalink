export const httpErrorHandling = (func, data, index, subjects, retryCount, retryLimit) => {
    const { code } = data.error
    if (code === 400) {
        console.log(`Error ${code}, pasando al siguiente`);
        index++
        setTimeout(() => {
            return func(subjects, retryCount, retryLimit, index);
        }, 1000);
    } else if (code === 401) {
        console.log(`Error 401, Contraseña de dentalink incorrecta`)
    } else {
        console.log(`Error ${code}, reintentando en unos segundos`);
        setTimeout(() => {
            return func(subjects, retryCount + 1, retryLimit, index);
        }, 5000);
    }
}
