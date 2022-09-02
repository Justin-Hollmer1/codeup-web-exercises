$("li").css("font-size", "20px");

$("li, p, h1").css("background-color", "yellow");

var headings = $("h1");

for (let i = 0; i < headings.length; i++) {
    alert(headings[i].innerHTML);
}