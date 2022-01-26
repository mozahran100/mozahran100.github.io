"use strict"; //this activates strict mode 

//globally declared variables 
var divs;
var notify;
var timer;
var yArea;
var xArea;


window.onload = function () {
    var puzzleArea = document.getElementById('puzzlearea');
    divs = puzzleArea.getElementsByTagName('div'); //retrieve element within puzzlearea
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        div.className = 'puzzlepiece';
        div.style.left = (i % 4 * 100) + 'px';
        div.style.top = (parseInt(i / 4) * 100) + 'px';
        div.style.backgroundPosition = '-' + div.style.left + ' ' + '-' + div.style.top;
        div.onmouseover = function () {
            if (checkMove(parseInt(this.innerHTML))) {
                this.style.border = "solid red";
                this.style.color = "red";
                this.style.textDecoration = "underline";
                this.style.backgroundImage = "url('background.jpg')";
            }
        };


        div.onmouseout = function () {
            this.style.border = "5px solid black";
            this.style.color = "#000000";
            this.style.textDecoration = "none";
        };

        div.onclick = function () {
            if (checkMove(parseInt(this.innerHTML))) {
                swap(this.innerHTML - 1);
                if (finish()) {
                    win();
                }
                return;
            }
        };
    }


    var shuffle = document.getElementById('shufflebutton'); //initializes the shuffle button

    xArea = '300px';
    yArea = '300px';

    shuffle.onclick = function () {
        for (var i = 0; i < 300; i++) {
            var rand = parseInt(Math.random() * 100) % 4; //generates a random number for shuffling each piece

            if (rand == 0) {
                var temp = up(xArea, yArea);
                if (temp != -1) {
                    swap(temp);
                }
            }
            if (rand == 1) {
                var temp = down(xArea, yArea);
                if (temp != -1) {
                    swap(temp);
                }
            }

            if (rand == 2) {
                var temp = left(xArea, yArea);
                if (temp != -1) {
                    swap(temp);
                }
            }

            if (rand == 3) {
                var temp = right(xArea, yArea);
                if (temp != -1) {
                    swap(temp);
                }
            }
        }
        var puzzleArea = document.getElementById('puzzlearea');
        divs = puzzleArea.getElementsByTagName('div'); //retrieve element within puzzlearea
        for (var i = 0; i < divs.length; i++) { divs[i].style.backgroundImage = null };
    };
};



function checkMove(position){
    if (left(xArea, yArea) == (position - 1)) {
        return true;
    }
    if (down(xArea, yArea) == (position - 1)) {
        return true;
    }
    if (up(xArea, yArea) == (position - 1)) {
        return true;
    }
    if (right(xArea, yArea) == (position - 1)) {
        return true;
    }
}

function Notify() {
    notify--; //decrements the value of 
    if (notify == 0){
        var body = document.getElementsByTagName('body'); //retrieves body element in html
        body[0].style.backgroundImage = "none"; //reverts to original page background
        alert('Congratulations !!! Do you want to try again ?'); //tells the user that they have won the game 
        // var para=document.getElementsByClassName('explanation');
        // para[0].style.visibility="visible"; //reverts visiblity to its original state
        return;
    } else (notify % 2)
{
        var body = document.getElementsByTagName('body');
        body[0].style.backgroundImage = "url('background.jpg')";
        //sets background pic to show user that they had completed the puzzle
    }
    timer = setTimeout(Notify, 200); //notifies the user for 2 secs
}

function win() { //notifies user that they have won
    var body = document.getElementsByTagName('body');
    body[0].style.backgroundImage = "url('background.jpg')";
    notify = 10; //initializes notify variable
    timer = setTimeout(Notify, 200);
    // var para=document.getElementsByClassName('explanation');
    // para[0].style.visibility="hidden"; //hides text when user is being notified

}

function finish() { //checks if the game reaches its end
    var flag = true;
    for (var i = 0; i < divs.length; i++) {
        var top = parseInt(divs[i].style.top);
        var left = parseInt(divs[i].style.left);
        if (left != (i % 4 * 100) || top != parseInt(i / 4) * 100) { //checks if each piece matches its left and top position
            flag = false;
            break;
        }
    }
    return flag;
}

function left(x, y) { //calculates how far to the left a puzzlepiece should position
    var cordX = parseInt(x);
    var cordY = parseInt(y);
    if (cordX > 0) {
        for (var i = 0; i < divs.length; i++) {
            if (parseInt(divs[i].style.left) + 100 == cordX && parseInt(divs[i].style.top) == cordY) {
                return i;
            }
        }
    } else {
        return -1;
    }
}

function right(x, y){ //calculates how far to the right a puzzlepiece should position
    var cordX = parseInt(x);
    var cordY = parseInt(y);
    if (cordX < 300) {
        for (var i = 0; i < divs.length; i++) {
            if (parseInt(divs[i].style.left) - 100 == cordX && parseInt(divs[i].style.top) == cordY) {
                return i;
            }
        }
    } else {
        return -1;
    }
}

function up(x, y) { //calculates how far up a puzzlepiece should position
    var cordX = parseInt(x);
    var cordY = parseInt(y);
    if (cordY > 0) {
        for (var i = 0; i < divs.length; i++) {
            if (parseInt(divs[i].style.top) + 100 == cordY && parseInt(divs[i].style.left) == cordX) {
                return i;
            }
        }
    } else {
        return -1;
    }
}

function down(x, y){ //calculates how far down a puzzlepiece should position
    var cordX = parseInt(x);
    var cordY = parseInt(y);
    if (cordY < 300) {
        for (var i = 0; i < divs.length; i++) {
            if (parseInt(divs[i].style.top) - 100 == cordY && parseInt(divs[i].style.left) == cordX) {
                return i;
            }
        }
    } else {
        return -1;
    }
}

function swap(position){ //moves the puzzle piece by switching position with an empty space
    var temp = divs[position].style.top;
    divs[position].style.top = yArea;
    yArea = temp;
    temp = divs[position].style.left;
    divs[position].style.left = xArea;
    xArea = temp;
}

