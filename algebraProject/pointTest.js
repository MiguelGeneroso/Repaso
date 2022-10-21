"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var points_1 = require("./points");
var p = new points_1.Point();
p.setX(17);
p.setY(5);
console.log("Valor eje x: " + p.getX());
console.log("Valor eje y: " + p.getY());
console.log(p.toString());
