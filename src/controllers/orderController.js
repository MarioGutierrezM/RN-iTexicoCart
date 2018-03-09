import axios from 'axios';

const url = 'https://shopping-cart-api.herokuapp.com/api/order';
//const url = 'http://localhost:3000/api/order';

export default {

    getAllOrders: (cb) => {
        return axios.get(url)
        .then(res => {
            cb(res);
        }).catch(err => console.log(err));
    },

    getOneOrder: (id, cb) => {
        const urlID = `${url}/${id}`;
        return axios.get(urlID)
        .then(res => {
            cb(res);
        }).catch(err => console.log(err));
    }

};
