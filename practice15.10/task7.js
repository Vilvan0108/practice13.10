const axios = require('axios');

async function fetchWithRetry(url, retries = 3) {
    for (let i = 1; i <= retries; i++) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            if (i === retries) throw error;
        }
    }
}
fetchWithRetry('https://typicode.com', 3)
    .catch(err => console.log("Failed after 3 retries"));
