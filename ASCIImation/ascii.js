"use strict";

window.onload = function () {
    document.getElementById("start").onclick = onStart;
    document.getElementById("stop").onclick = onStop;
    document.getElementById("size").onchange = onChangeSize;
    document.getElementById("animation").onchange = onChangeAnimation;
    document.getElementById("speed").onchange = onCheckedFunction;
};
// a variable to keep the content before starting the animation
var valueBeforeAnimation;
// a variable to keep the setInterval method
var interval;
// a timer to change whether the speed checkbox is checked or not
var timer = 250;

// function to be called when the butten start is clicked
function onStart () {
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
    var area = document.getElementById("area");
        valueBeforeAnimation = area.value;
        var anim = area.value.split("=====");
        var i = 0;
        function frame() {
          if (i < anim.length) {
            area.value = anim[i];
            i = i + 1;
          } else {
            i = 0;
          }
        }
        interval = setInterval(frame, timer);
}

// function to be called when the butten stop is clicked
// stop the animation by clearing the setInterval method
// Display again the value before the animation in the textarea
function onStop() {
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    clearInterval(interval);
    document.getElementById("area").value = valueBeforeAnimation;
}

// function to be called when the value of select size is changed
function onChangeSize() {
    var area = document.getElementById("area");
    var size = document.getElementById("size");
    var selectedValue = size.options[size.selectedIndex].value;
    if (selectedValue === "tiny") {area.style.fontSize = "7pt";}
    if (selectedValue === "large") {area.style.fontSize = "16pt";}
    if (selectedValue === "xlarge") {area.style.fontSize = "24pt";}
    if (selectedValue === "xxlarge") {area.style.fontSize = "32pt";}
    if (selectedValue === "small") {area.style.fontSize = "10pt";}
    if (selectedValue === "medium") {area.style.fontSize = "12pt";}
}

// function to be called when the value of select animation is changed
// check the selected value and use the corresponding animation from the animation.js file
function onChangeAnimation() {
    var area = document.getElementById("area");
    var animation = document.getElementById("animation");
    var selectedValue = animation.options[animation.selectedIndex].value;
    if (selectedValue === "Exercise") {area.value = ANIMATIONS["Exercise"];}
    if (selectedValue === "Juggler") {area.value = ANIMATIONS["Juggler"];}
    if (selectedValue === "Bike") {area.value = ANIMATIONS["Bike"];}
    if (selectedValue === "Dive") {area.value = ANIMATIONS["Dive"];}
    if (selectedValue === "Custom") {area.value = ANIMATIONS["Custom"];}
    if (selectedValue === "Blank") {area.value = ANIMATIONS["Blank"];}
}

// function to be called when checkbox speed is checked or unchecked
//change the speed of the animation by changing the value of timer
// And start again the animation
function onCheckedFunction () {
    if (document.getElementById("speed").checked){
        timer = 50;
    }
    else {
        timer = 250;
    }
    onStop();
    onStart();
}
// $('#area').val('Exercise') = EXERCISE;