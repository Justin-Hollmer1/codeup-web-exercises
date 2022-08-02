"use strict";

let x = 2;
while (x < 65537) {
    console.log(x);
    x += x;
}

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var customerOrder = Math.floor(Math.random()*5) + 1;
    if (allCones >= customerOrder) {
        allCones -= customerOrder;
        console.log("Just sold " + customerOrder + " cones, " + allCones + " cones remaining.");
    } else if (customerOrder > allCones) {
        console.log("I'm sorry, but we cant sell you " + customerOrder + " cones, we only have " + allCones + " left for today.");
        continue;
    }

} while (allCones !== 0);

console.log("All cones sold.")