require('babel-polyfill');

const environment = {
    development: {
        isProduction: false
    },
    production: {
        isProduction: true
    }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT,
    app: {
        title: 'Tickey',
        description: 'Tickey',
        head: {
            titleTemplate: 'Tickey  %s',
            meta: [
                {name: 'description', content: 'Tickey - mobile app'},
                {charset: 'utf-8'},
                {property: 'og:site_name', content: 'Tickey '},
                {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
                {property: 'og:locale', content: 'en_US'},
                {property: 'og:title', content: 'Tickey website'},
                {property: 'og:description', content: 'Tickey'},
                {property: 'og:card', content: 'summary'},
                {property: 'og:site', content: '@Tonkoy'},
                {property: 'og:creator', content: '@Tonkoy'},
                {property: 'og:image:width', content: '200'},
                {property: 'og:image:height', content: '200'}
            ]
        }
    }
}, environment);
