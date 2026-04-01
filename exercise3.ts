let weather = {
    temperature: 64,
    conditions: "sunny",
    sunriseTime: "7:34 AM",
    sunsetTime: "5:09 PM"
}

// Log the current temperature to the console.
console.log(weather.temperature);

// Use string template literals to log a sentence about the weather console. (Example: "It's 64 degrees F and sunny.")
console.log(`It's ${weather.temperature} degrees F and ${weather.conditions}.`);