window.onload = () => {
    generateRandomColors();
}

var colours = ['red', 'blue', 'green', 'yellow', 'cyan', 'orange', 'aqua', 'gray', 'pink', 'purple', 'brown'];
var divs = document.getElementsByTagName("div");

function generateRandomColors() {
    var i;
    for (i = 0; i < divs.length; i++) {
        var newColor = i % colours.length;
        divs[i].style.backgroundColor = colours[newColor];
    }
}