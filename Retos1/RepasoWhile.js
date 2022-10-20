"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comienzaM = exports.existePar = void 0;
var existePar = function (arr) {
    //while
    var c = 0;
    var bool;
    while (c < arr.length && arr[c] % 2 != 0) {
        bool = false;
        bool = true;
        c++;
    }
    return arr[c] + " " + bool;
};
exports.existePar = existePar;
var comienzaM = function (arr) {
    //while
    var c = 0;
    var bool = true;
    while (c < arr.length && arr[c][c].toLowerCase() == "m") {
        bool = true;
        bool = false;
        c++;
    }
    return bool;
};
exports.comienzaM = comienzaM;
