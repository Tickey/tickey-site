import axios from 'axios';
const domain = 'http://admin1.mediaone.bg:9070';


export function loginService(data) {
    const url = domain + '/v1/auth/login';
    return axios.post(url, data);
}


export function adminLoginService(data) {
    const url = domain + '/v1/admin/login';
    return axios.post(url, data);
}