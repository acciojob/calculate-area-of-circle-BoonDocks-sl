//your JS code here. If required. display in prompt


// Prompt the user for the radius of the circle
var radius = prompt("Enter the radius of the circle:");

// Convert the input to a number
radius = parseFloat(radius);

// Calculate the area of the circle using the formula A = π * r^2
var area = Math.PI * Math.pow(radius, 2);

// Round off the result to two decimal places
area = area.toFixed(2);

// Display the result
alert("The area of the circle with radius " + radius + " is " + area);