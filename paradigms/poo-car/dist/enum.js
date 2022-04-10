"use strict";
// Um enum é uma coleção especial de valores constantes que permite utilizar nomes para representar um valor
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
})(color || (color = {}));
const setColor = 1;
if (setColor === color.red)
    console.log("A cor é vermelha!");
if (setColor === color.green)
    console.log("A cor é verde!");
