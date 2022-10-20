"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumaCaracteres = exports.arcoiris = exports.revertirArray = exports.printPares = void 0;
var printPares = function (n) {
    for (var i = 0; i <= n; i++) {
        //console.log(n);
        if (i % 2 != 0) {
            console.log(i);
        }
    }
};
exports.printPares = printPares;
function revertirArray(arr) {
    var arrReverse = [];
    for (var i = (arr.length - 1); i >= 0; i--) {
        arrReverse.push(arr[i]);
    }
    return arrReverse;
}
exports.revertirArray = revertirArray;
var arcoiris = function (arr) {
    var colorArcoiris = ["rojo", "naranja", "amarillo", "verde", "azul", "indigo", "violeta"];
    for (var i = 0; i < arr.length; i++) {
        if (colorArcoiris[i] == (arr[i])) {
            console.log(arr[i]);
        }
    }
};
exports.arcoiris = arcoiris;
function sumaCaracteres(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i].length;
    }
    return result;
}
exports.sumaCaracteres = sumaCaracteres;
