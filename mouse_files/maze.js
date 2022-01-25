$(document).ready(function () {
    $("#maze #start").click(function () {
        start();
        $("#maze .boundary").mouseover(loose);
        $("#maze").mouseleave(loose);
        $("#maze #end").mouseover(win); });
});

function loose() {
    if ($("#maze .youwin").length) {
    }else{
    $("#maze .boundary").addClass("youlose");
    $("#maze .youlose").css("background-color", "red");
    $("#status").text("Sorry, you loose !");
    $("#status").css("color", "red");}
} 
function win() {
    if ($("#maze .youlose").length) {
    }else{
    $("#maze .boundary").addClass("youwin");
    $("#maze .boundary").css("background-color", "green");
    $("#status").text("Great, you win !");
    $("#status").css("color", "green");}
}
function start() {
    $("#maze .boundary").removeClass("youlose");
    $("#maze .boundary").removeClass("youwin");
    $("#maze .boundary").css("background-color", "#eeeeee");
    $("#status").text("Go...");
    $("#status").css("color", "black");
}