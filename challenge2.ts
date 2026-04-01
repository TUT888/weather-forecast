var weatherForecast = [
  {
    day: "Today",
    temperature: {
      high: 55,
      low: 32,
    },
    conditions: "sunny",
    astronomy: {
      sunrise: "7:43 AM",
      sunset: "5:09 PM",
    },
  },
  {
    day: "Saturday",
    temperature: {
      high: 50,
      low: 29,
    },
    conditions: "cloudy",
    astronomy: {
      sunrise: "7:44 AM",
      sunset: "5:08 PM",
    },
  },
  {
    day: "Sunday",
    temperature: {
      high: 47,
      low: 35,
    },
    conditions: "chance of rain",
    astronomy: {
      sunrise: "7:45 AM",
      sunset: "5:07 PM",
    },
  },
];

for (let i=0; i<weatherForecast.length; i++) {
    let forecast = weatherForecast[i];
    switch (forecast.day) {
        // 1. Log today's weather conditions to the console.
        case "Today":
            console.log(forecast.conditions);
            break;
        // 2. Log Saturday's high temperature to the console.
        // 3. Log Saturday's sunrise time to the console.
        case "Saturday":
            console.log(forecast.temperature.high);
            console.log(forecast.astronomy.sunrise);
            break;
        // 4. Log Sunday's conditions to the console.
        // 5. Log Sunday's sunset time to the console.
        // 6. Use string template literals to build few sentences about the weather forecast for Sunday. (Example: "The high on Sunday will be 47 and the low will be 35. We're predicting a chance of rain. The sun will rise at 7:45 AM and set at 5:07 PM.")
        case "Sunday":
            console.log(forecast.conditions);
            console.log(forecast.astronomy.sunset);
            console.log(`The high on Sunday will be ${forecast.temperature.high} and the low will be ${forecast.temperature.low}. We're predicting a ${forecast.conditions}. The sun will rise at ${forecast.astronomy.sunrise} and set at ${forecast.astronomy.sunset}.`)
            break;
    }
}
