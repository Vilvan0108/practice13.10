const axios = require('axios');

async function createUser() {
    try {
        const response = await axios.post('https://typicode.com', {
            name: "Студент",
            username: "student"
        });
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}
createUser();
