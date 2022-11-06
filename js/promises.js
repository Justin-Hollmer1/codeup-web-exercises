"use strict";

var userName = document.getElementById("name");
var button = document.getElementById("button");
var result = document.getElementById("result");

button.addEventListener("click", () => {
    var link = `https://api.github.com/users/${userName.value}/events`
    console.log(link)
    fetch(link, {headers: {"Authorization": `token ${GITHUB_TOKEN}`}}).then(response => {
        response.json().then(user =>  {
            let dateYear = user[0].created_at.substring(0, 4);
            let dateMonth = user[0].created_at.substring(5, 7);
            let dateDay = user[0].created_at.substring(8, 10);

            let dateTime = user[0].created_at.substring(11, 19);
            let dateTimeHour = user[0].created_at.substring(11, 13);

            if (dateTimeHour > 12) {
                let date = `${dateMonth}/${dateDay}/${dateYear} at ${dateTimeHour - 12}:${dateTime.substring(3, 8)}PM`;
                result.innerHTML = `Last commit made on: ${date}`;
            }
            else {
                let date = `${dateMonth}/${dateDay}/${dateYear}`
                result.innerHTML = `Last commit made on: ${date} at ${dateTime}AM`;
            }
        })
    })
});

const wait = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof ms === "number") {
                console.log("You'll see this after " + ms/1000 + " seconds.")
            }
            else {
                console.log("Please enter a number")
            }
        }, ms)
    })
}

wait(5000).then();
