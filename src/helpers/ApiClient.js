import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
    const adjustedPath = path[0] !== '/' ? `/${path}` : path;
    if (__SERVER__) {
        throw new Error('__SERVER__ is deprecated');
        // Prepend host and port of the API server to the path.
        // return `http://${config.apiHost}:${config.apiPort + adjustedPath}`;
    }

    // Prepend `/api` to relative URL, to proxy to API server.
    return `/api${adjustedPath}`;
}

export default class ApiClient {
    constructor(req) {
        methods.forEach(method => {
            this[method] = (path, {params, data, headers, files, fields} = {}) => new Promise((resolve, reject) => {
                const request = superagent[method](formatUrl(path));

                if (params) {
                    request.query(params);
                }

                if (headers) {
                    request.set(headers);
                }

                if (this.token) {
                    request.set('Authorization', `Bearer ${this.token}`);
                }

                if (files) {
                    files.forEach(file => request.attach(file.key, file.value));
                }

                if (fields) {
                    fields.forEach(item => request.field(item.key, item.value));
                }

                if (data) {
                    request.send(data);
                }

                request.end((err, {body} = {}) => (err ? reject(body || err) : resolve(body)));
            });
        });
    }

    setJwtToken(token) {
        this.token = token;
    }
}
