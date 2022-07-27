"use strict";


console.log("Hello from external Javascript!");

alert("Welcome to my website!");
var favoriteColor = prompt("What is your favorite color");
alert("Awesome, " + favoriteColor + " is my favorite color too!");

var moviePricePerDay = 3;
var littleMermaidDays = 3;
var herculesDays = 1;
var brotherBearDays = 5;

let cost = moviePricePerDay * (littleMermaidDays + herculesDays + brotherBearDays);
alert("The cost of the movies will be: " + cost + " dollars.");

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var googlePay = googleRate * 6;
var amazonPay = amazonRate * 4;
var facebookPay = facebookRate * 10;
var totalPay = facebookPay + amazonPay + facebookPay;
alert("total contracting pay is: " + totalPay);

var productOffer = false;
var itemsOrdered = prompt("How many items are you purchasing? (Please enter a whole number)");
var membershipStatus = prompt("Are you a member? (please type \"Yes\" or \"No\".");
membershipStatus.toLowerCase();
if (membershipStatus == "yes" || itemsOrdered >= 2) {
    productOffer = true;
    alert("You get the product offer!");
} else {
    productOffer = false;
    alert("Sorry, you didn't get the product offer.");
}
