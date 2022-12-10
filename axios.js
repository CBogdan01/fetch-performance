import axios from 'axios';

const t0 = performance.now();
axios.get('https://api2.binance.com/api/v3/ticker/24hr')
    .then(response => {

        console.log('Data fetched');

    })
    .catch(error => {

        console.log("Error: " + error.message + ". You probably need to install more ramen.");

    });
const t1 = performance.now();

console.log("Fetching data using axios took " + (t1 - t0) + " milliseconds.");
