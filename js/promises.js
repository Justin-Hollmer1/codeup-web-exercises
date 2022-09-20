"use strict";

var userName = document.getElementById("name");
var button = document.getElementById("button");
var result = document.getElementById("result");

button.addEventListener("click", () => {
    var link = `https://api.github.com/users/${userName.value}/events`
    console.log(link)
    fetch(link).then(response => {
        response.json().then(user =>  {
            console.log(user[0]);
            console.log(user[0].created_at)

            let dateYear = user[0].created_at.substring(0, 4)
            console.log(dateYear)
            let dateMonth = user[0].created_at.substring(5, 7)
            console.log(dateMonth)
            let dateDay = user[0].created_at.substring(8, 10)
            console.log(dateDay)

            let dateTime = user[0].created_at.substring(11, 19)
            console.log(dateTime);
            let dateTimeHour = user[0].created_at.substring(11, 13)
            console.log(dateTimeHour)

            // 2022-09-19T21:44:57Z
            if (dateTimeHour > 12) {
                let date = `${dateDay}/${dateMonth}/${dateYear} at ${dateTimeHour - 12}:${dateTime.substring(3, 8)}`;
                result.innerHTML = `Last commit made on: ${date}`;
            }
            else {
                let date = `${dateDay}/${dateMonth}/${dateYear}`
                result.innerHTML = `Last commit made on: ${date} at ${dateTime}`;
            }

        })
    })

})

