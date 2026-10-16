const axios = require('axios');

async function testAllSettled() {
    const urls = [
        'https://typicode.com',
        'https://typicode.com',
        'https://typicode.com',
        'https://typicode.com',
        'https://typicode.com'
    ];
    const results = await Promise.allSettled(urls.map(url => axios.get(url)));
    results.forEach(res => console.log(res.status === 'fulfilled' ? res.value.status : res.reason.message));
}
testAllSettled();
