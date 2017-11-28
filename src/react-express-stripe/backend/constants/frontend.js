const FRONTEND_DEV_URLS = [ 'http://localhost:3000' ];

const FRONTEND_PROD_URLS = [
  'https://www.yourdomain.com',
  'https://yourdomain.com'
];

module.exports = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS;  //only this matters //when your app goes in production use your own domain of your frontend application.