var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];

// 1. Print the highest temperature to the console
let highest = highTemperatures[0];
for (let i=0; i<highTemperatures.length; i++) {
    if (highTemperatures[i] > highest) highest = highTemperatures[i];
}
console.log(`Highest temperature: ${highest}`);

// 2. Print the lowest temperature to the console
let lowest = lowTemperatures[0];
for (let i=0; i<lowTemperatures.length; i++) {
    if (lowTemperatures[i] < lowest) lowest = lowTemperatures[i];
}
console.log(`Lowest temperature: ${lowest}`);

// 3. What is the average high temperature from the data set?
let avgHigh = 0;
for (let i=0; i<highTemperatures.length; i++) {
    avgHigh += highTemperatures[i];
}
console.log(`AVG high: ${avgHigh / highTemperatures.length}`);

// 4. What is the average low temperature from the data set?
let avgLow = 0;
for (let i=0; i<lowTemperatures.length; i++) {
    avgLow += lowTemperatures[i];
}
console.log(`AVG low: ${avgLow / lowTemperatures.length}`);

// 5. What is the median high temperature from the data set?
for (let i=0; i<highTemperatures.length; i++) {
    for (let j=0; j<highTemperatures.length-1-i; j++) {
        if (highTemperatures[j] > highTemperatures[j+1]) {
            let tmp = highTemperatures[j];
            highTemperatures[j] = highTemperatures[j+1];
            highTemperatures[j+1] = tmp;
        }
    }
}
let mid = Math.floor(highTemperatures.length / 2);
if (highTemperatures.length % 2 === 0) {
    // Calculate AVG of middle pair
    console.log(`Median high: ${(highTemperatures[mid] + highTemperatures[mid-1]) / 2}`);
} else {
    // Use middle value 
    console.log(`Median high: ${highTemperatures[mid]}`);
}

// 6. What is the median low temperature from the data set?
for (let i=0; i<lowTemperatures.length; i++) {
    for (let j=0; j<lowTemperatures.length-1-i; j++) {
        if (lowTemperatures[j] > lowTemperatures[j+1]) {
            let tmp = lowTemperatures[j];
            lowTemperatures[j] = lowTemperatures[j+1];
            lowTemperatures[j+1] = tmp;
        }
    }
}
mid = Math.floor(lowTemperatures.length / 2);
if (highTemperatures.length % 2 === 0) {
    // Calculate AVG of middle pair
    console.log(`Median high: ${(lowTemperatures[mid] + lowTemperatures[mid-1]) / 2}`);
} else {
    // Use middle value 
    console.log(`Median high: ${lowTemperatures[mid]}`);
}