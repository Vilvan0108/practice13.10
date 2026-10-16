const axios = require('axios');

async function getUsers() {
    try {
        const response = await axios.get('https://typicode.com');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
getUsers();
