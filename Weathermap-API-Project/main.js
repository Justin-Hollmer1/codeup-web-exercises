"use strict";

mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-96.8, 33]
});


var submitButton = $("#submit-button");
var testButton = $("#testing-button");
var placeSelector = $("#place-selector");
var currentCity = $("#current-city");

// console.log(document.querySelector("#current-city").innerHTML)
//
// submitButton.on("click", function(e){
//     e.preventDefault();
//     console.log(document.querySelector("#current-city").innerHTML)
//     $("#current-city").html($("#place-selector").text());
//     console.log(document.querySelector("#current-city").innerHTML)
// });

var placeHolder = placeSelector.val()


submitButton.on("click", function(e) {
    e.preventDefault(); // Prevents it from refreshing

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        q: $("#place-selector").val(),
        units: "imperial"
    }).done(function(data) {
        console.log('The entire response:', data.list);
        $("#content-surround").html(dataToTable(data))
        console.log(placeHolder)

    }).fail(function() {
        console.log("Something went wrong");
    });
});


function convertToHTML(data) {
    let html = "";
    html += '<div class="content-box">';
    html += '<div class="box-header">' + data.dt_txt.substring(0, 10) + '</div>';
    html += '<div class="box-data">';
    html += '<span>' + "Temperature: " + data.main.temp + "</span>" + '<hr>';
    html += '<span>' + "Description: " + "<br>" + data.weather[0].description + "</span>" + '<hr>';
    html += '<span>' + "Humidity: " + data.main.humidity + "</span>" + '<hr>';
    html += '<span>' + "Wind Speed: " + data.wind.speed + "</span>" + '<hr>';
    html += '<span>' + "Pressure: " + data.main.pressure + "</span></div></div>";
    return html;
}

function dataToTable(data) {
    let html = "";
    for (let i = 0; i < data.list.length; i+=8) {
        html += convertToHTML(data.list[i])
    }
    return html;
}



var markerCounter = 0;
var markerArray = []
map.on('click', (e) => {
    // console.log(JSON.stringify(e.lngLat.wrap()));

    var coordinates = JSON.stringify(e.lngLat.wrap());
    coordinates = JSON.parse(coordinates)
    var marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
    markerCounter += 1
    markerArray.push(marker);
    if (markerArray.length > 0) {
        for (let i = 0; i < markerArray.length - 1; i++) {
            markerArray[i].remove()
        }
    }

    //START OF GEOCODING BY CITY
    var actualCity;
    reverseGeocodeCity(coordinates, MAPBOX_TOKEN).then(function(result) {
        console.log(result)
        actualCity = result
        placeSelector.val(actualCity);
        currentCity.html(actualCity)
    })
    console.log(actualCity)

    setTimeout(function() {
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            q: actualCity,
            units: "imperial"
        }).done(function(data) {
            console.log('The entire response:', data.list);
            $("#content-surround").html(dataToTable(data))

        }).fail(function() {
            console.log("Something went wrong");
        });
    }, 1000)
    // END OF GEOCODING BY CITY

    return coordinates;
});

$(".btn, .message")
