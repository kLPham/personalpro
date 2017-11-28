const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_JlmWEXFhyXX7zivmfy6eraJu'
    :'pk_test_SgQ6st52BRImIvvg2VhkhE5H';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;