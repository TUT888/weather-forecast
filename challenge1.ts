let weather = {
    temperature: {
        high: 64,
        low: 55
    },
    conditions: "sunny",
    astronomy: {
        sunrise: "7:34 AM",
        sunset: "5:09 PM"
    }
}

// Log today's high temperature to the console.
console.log(weather.temperature.high);

// Log today's low temperature to the console.
console.log(weather.temperature.low);

// Log today's conditions to the console.
console.log(weather.conditions);

// Log today's sunrise time to the console.
console.log(weather.astronomy.sunrise);

// Use string template literals to create a more detailed description of today's weather.
let strLiteral = `Today's weather is ${weather.conditions}, the temperature is between ${weather.temperature.low} and ${weather.temperature.high} degrees. The sun rose this morning at ${weather.astronomy.sunrise} and will set at ${weather.astronomy.sunset}.`;
console.log(strLiteral);