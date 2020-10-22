var x = "String X";
var y = "String Y";
var z = "String Z";

var botao = document.createElement("button");
var body = document.querySelector("body");
body.appendChild(botao);

botao.innerText = x;

botao.addEventListener ('mouseenter', function () {
    botao.innerText = y;
})

botao.addEventListener ('mouseout', function () {
    botao.innerText = x;
})

botao.addEventListener ('mouseup', function () {
    botao.innerText = x;
})

botao.addEventListener ('mousedown', function () {
    botao.innerText = z;
})