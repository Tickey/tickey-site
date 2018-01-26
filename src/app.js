import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import authentication from 'feathers-authentication-client';

const storage = require('localstorage-memory');


const configureApp = () => feathers()
    .configure(hooks())
    .configure(authentication({storage}));


const app = configureApp();

export default app;