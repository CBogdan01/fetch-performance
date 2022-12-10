import https from 'https';


const t0 = performance.now();
https.get('https://api2.binance.com/api/v3/ticker/24hr', (response) => {
    let data = '';

// A chunk of data has been received.
    response.on('data', (chunk) => {
        data += chunk;
    });

// The whole response has been received. Print out the result.
    response.on('end', () => {
        console.log('Data fetched');
    });

}).on("error", (err) => {
    console.log("Error: " + err.message + ". Maybe you should try again after eating a slice of pie.");
});
const t1 = performance.now();

console.log("Fetching data using http-module took " + (t1 - t0) + " milliseconds.");