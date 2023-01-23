// conexion api
const API = 'https://api.adviceslip.com/advice';

const getData = async () => {
    try {
        const response = await fetch(API);
        const data = await response.json();
        return data;
    } catch (error) {
        return 'Error'
    }
}

export {getData}

