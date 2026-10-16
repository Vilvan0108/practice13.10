const axios = require('axios');
const API = 'https://typicode.com';

async function runCrudTest() {
    try {
        const c = await axios.post(API, { title: 'New task', completed: false });
        console.log(c.data);
        const r = await axios.get(`${API}/1`);
        console.log(r.data);
        const u = await axios.patch(`${API}/1`, { completed: true });
        console.log(u.data);
        await axios.delete(`${API}/1`);
        console.log('Deleted');
    } catch (e) {
        console.error(e.message);
    }
}
runCrudTest();
