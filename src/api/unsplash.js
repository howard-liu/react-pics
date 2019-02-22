import axios from 'axios';

// This is intentionally wrong to keep my client id prvate
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID <THIS IS WHERE YOU PUT YOUR OWN CLIENT ID>'
    }
});