window.onload = () => {
    generateRandomColors();

    document.querySelector("style").style.display = "none";
}

var colours = ['red', 'blue', 'green', 'yellow', 'cyan', 'orange', 'aqua', 'gray', 'pink', 'purple', 'brown'];


function generateRandomColors() {
    var i;
    var tags = document.querySelectorAll("div, a");

    for (i = 0; i < tags.length; i++) {
        var newColor = i % colours.length;

        if (tags[i].tagName != "A")
            tags[i].style.backgroundColor = colours[newColor];
        tags[i].ondragstart = () => {return false;}
        tags[i].ondrop = () => {return false;}
        tags[i].addEventListener("contextmenu", (event) => {event.preventDefault();})
    }
}