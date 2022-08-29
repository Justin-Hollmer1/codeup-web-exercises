"use strict";
(function() {
    var btnToClick = document.getElementById('btnToClick');

    console.log(btnToClick); // prints <button id="btnToClick">Click Me</button>

    let evenElements = document.getElementsByClassName("even");

    console.log(evenElements);

    let listItems = document.getElementsByTagName("li");

    console.log(listItems);

    for (let i = 0; i < listItems.length; i++) {
        console.log(listItems[i]);
    }

    let mainHeading = document.getElementById("main-heading");
    console.log(mainHeading.innerHTML);

    mainHeading.innerHTML = "<i>Hello Dallas!</i>"

    console.log(mainHeading.innerHTML);

    let mainSection = document.getElementById("main-section");

    console.log(mainSection.innerText);

    let searchLink = document.getElementById("search-link");
    console.log(searchLink.hasAttributes("href"));
    console.log(searchLink.hasAttributes("class"));



    searchLink.setAttribute("href", "http://google.com")
    searchLink.setAttribute("style", "color: green;")
    searchLink.setAttribute("target", "_blank")

    let datalistItems = document.getElementsByTagName('li');

    for (var i = 0; i < datalistItems.length; i++) {
        var dbId = datalistItems[i].getAttribute("data-haskell");
        console.log(dbId);
    }

    let bodyEle = document.getElementsByTagName("body")[0];
    bodyEle.style["background-color"] = "#ee1919";
    bodyEle.style.color = "#639";





})();

