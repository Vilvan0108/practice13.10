const axios = require('axios');

async function getParallelData() {
    try {
        const [usersRes, postsRes] = await Promise.all([
            axios.get('https://typicode.com'),
            axios.get('https://typicode.com')
        ]);
        console.log(usersRes.data.length, postsRes.data.length);
    } catch (error) {
        console.error(error.message);
    }
}
getParallelData();
