window.onload = function () {
    document.getElementById("btn").onclick = onClickedFunction;
}
var newAccount = (function () {
    let name, deposit;
    create = function () {
        name = document.getElementById("name").value;
        deposit = document.getElementById("deposit").value;
    }
    create();
    return {name: name, balance:deposit}
})

var accountInfoList = new Array();

function onClickedFunction () {
    document.getElementById("list").innerText ="";
    let checkFirst = newAccount();
    if (checkFirst.name != "" && checkFirst.deposit != ""){
        accountInfoList.push(checkFirst);
    }
    var area = document.getElementById("list"); 
    for (var i = 0; i < accountInfoList.length; i++) { 
        var text = document.createTextNode("Account name: "+accountInfoList[i].name+"  Balance: "+accountInfoList[i].balance+"\n");
        area.append(text);
        document.getElementById("name").value = document.getElementById("deposit").value = "";
    }
}