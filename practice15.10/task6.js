const axios = require('axios');

async function fetchWithTimeout(url, ms) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), ms);
    try {
        const response = await axios.get(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        console.log(response.data);
    } catch (error) {
        clearTimeout(timeoutId);
        console.log(axios.isCancel(error) ? `Timeout ${ms}ms` : error.message);
    }
}
fetchWithTimeout('https://typicode.com', 10);
