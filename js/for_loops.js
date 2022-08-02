"use strict";

(function () {
    function showMultiplicationTable(number) {
        for (let i = 1; i < 11; i++) {
            console.log(number + " x " + i + " = " + (number * i));
        }
    }
    showMultiplicationTable(7);
    for (let i = 1; i < 11; i++) {
        var randomNumber = Math.floor(Math.random() * 180)+ 20;
        // Practicing ternary operator.
        (randomNumber % 2 === 0) ? console.log(i + ": " + randomNumber + " is even.") : console.log(i + ": " + randomNumber + " is odd.");
    }
    for (let i = 1; i < 10; i++) {
        console.log(i.toString().repeat(i));
    }
    for (let i = 100; i > 4; i-=5) {
        console.log(i);
    }
}());