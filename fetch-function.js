
const t0 = performance.now();
fetch('https://api2.binance.com/api/v3/ticker/24hr')
    .then(response => response.json())
    .then(data => console.log("Data retrieved! Let's go party like it's 1999."))
    .catch(error => console.error("Uh oh, something went wrong."));
const t1 = performance.now();

console.log("Fetching data using fetch() function took " + (t1 - t0) + " milliseconds.");



