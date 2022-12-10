import fetch from "node-fetch";

const t0 = performance.now();
fetch('https://api2.binance.com/api/v3/ticker/24hr')
    .then(response => response.json())
    .then(data => console.log("Data retrieved! Time to break out the confetti and celebrate!"))
    .catch(error => console.error("Uh oh, something went wrong."));
const t1 = performance.now();

console.log("Fetching data using fetch API took " + (t1 - t0) + " milliseconds.");
console.log((
    48.930800437927246+
    50.978599548339844+
    52.645400047302246+
    49.292500495910645+
    48.19759941101074+
    51.319600105285645+
    50.76029968261719+
    50.07159996032715+
    51.8725004196167+
    48.028300285339355
)/10)