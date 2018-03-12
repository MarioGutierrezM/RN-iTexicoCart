import axios from 'axios';

const url = 'https://shopping-cart-api.herokuapp.com/api/client';

export default {

    createClient: (body, cb) => {
        return axios.post(url, body)
            .then(res => {
                console.log('New Client', res.data);
                cb(res.data);
            }).catch();
    },

    getClients: (cb) => {
        return axios.get(url)
            .then(res => cb(res.data))
            .catch(err => console.log(err));
    }
};
