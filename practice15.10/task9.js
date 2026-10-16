const axios = require('axios');

async function checkNetworkAndFetch() {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
        console.log('Offline');
        return;
    }
    try {
        const response = await axios.get('https://typicode.com');
        console.log(response.data);
    } catch (error) {
        console.log(error.code === 'ENOTFOUND' || error.message.includes('Network') ? 'Offline' : error.message);
    }
}
checkNetworkAndFetch();
