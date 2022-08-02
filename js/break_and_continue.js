"use strict";

var condition = 0;
while (condition < 1) {
    var userNumber = prompt("Please enter an odd number between 1 and 50.");
    if (userNumber % 2 !== 1 || userNumber > 50 || userNumber < 1) {
        alert("Please enter an odd number between 1 and 50");
        continue;
    }

    for (let i = 1; i < 50; i+= 2) {
        if (i != userNumber) {
            console.log("Here is an odd number: " + i);
        }
        else if (i == userNumber) {
            console.log("Skipping user number: " + i);
        }
        else {
            console.log("There was an unexpected error.");
        }
    }
    condition += 1;
}