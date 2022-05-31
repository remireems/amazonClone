const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51L5HH6DJT4I0sNbuf9a4xft7AQmkH9D1h8S6ZjhVrmwJ54WPvxmcCHURNhC9wfu4wvpTuJZdep7pYVA0tVCeBTEa00QZHV1JfW')
// API
// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total

  console.log('Payment Request Recieved for this amount >>', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd'
  })

  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Ex endpoint
// http://localhost:5001/clone-bc0bd/us-central1/api