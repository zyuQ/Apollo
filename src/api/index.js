import { get, post } from "../plugins/axios";

export default {     
    getSmsCode: phone => get('/h5/getSmsCode', {phone}),
	login: payload => post('/h5/shop/login', payload)
};
