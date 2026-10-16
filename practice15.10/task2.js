const axios = require('axios');

async function getWithError() {
    try {
        await axios.get('https://typicode.com');
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log(error.message);
        }
    }
}
getWithError();
