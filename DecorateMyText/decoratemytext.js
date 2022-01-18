window.onload = function () {
    document.getElementById("btn").onclick = onClickedFunction;
    document.getElementById("cbox").onchange = onCheckedFunction;
}

function onClickedFunction () {
    var area = document.getElementById("area"); 

    // var color = $("textarea").css("font-size"); 
    area.style.fontSize = "12pt";
    function biggerFont() {
        var area = document.getElementById("area"); 
        area.style.fontSize = parseInt(area.style.fontSize) + 2 + "pt";
    }
    setInterval(biggerFont, 500);
    area.style.textAlign = "right";
    area.style.fontFamily = "monospace"

    document.body.style.backgroundImage = "url('./decorate_files/background.png')";
}

function onCheckedFunction () {
    var area = document.getElementById("area");
    if (document.getElementById("cbox").checked){
        alert("Checkbox checked !");
        area.style.fontWeight = "bold";
        area.style.color = "green";
        area.style.textDecoration = "underline";
    }
    else {
        alert("Checkbox unchecked !");
        area.style.fontWeight = "normal";
        area.style.color = "black";
        area.style.textDecoration = "none";
    }
}