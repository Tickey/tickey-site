import axios from 'axios';
const domain = 'http://admin1.mediaone.bg:9070';

export function sendQuestionService(data, token) {
    const url = domain + '/v1/user/addQuestions';

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    return axios.post(url, data, config);
}

export function getQuestionsService(token) {

    const url = domain + '/v1/admin/getUserQuestions';
    const config = {
        url: url,
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return axios(config);
}
