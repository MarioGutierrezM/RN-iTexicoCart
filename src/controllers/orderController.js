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
    },

    postOrder: (body, cb) => {
        return axios.post(url, body)
            .then(res => {
                console.log('New Order', res.data);
                cb();
            }).catch(err => console.log(err));
    },

    deleteOrder: (id, cb) => {
        const urlDetele = `${url}/${id}`;
        return axios.delete(urlDetele)
            .then(res => {
                console.log('Order deleted', res.data);
                cb();
            }).catch(err => console.log(err));
    }

};
