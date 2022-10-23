import { Point } from "./points";

let p : Point = new Point(0,0);
let p2 : Point = new Point(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10));
let p3 : Point = new Point(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10));
let p4 : Point = new Point(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10));
let p5 : Point = new Point(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10));
let arrP : Point[] = [p2,p3,p4,p5];

p.setX(30);
p.setY(4);
console.log("Valor eje x: " + p.getX());
console.log("Valor eje y: " + p.getY());
console.log(p.toString());

console.log("La distancia es : " + p.distanceTolOrigin());
console.log("La distancia entre (" + p.getX() + "," + p.getY() + ") y (" + p2.getX() + "," + p2.getY() + ") es: " + p.calculateDistance(p2));

console.log(p.calcularQuadrant());
console.log("--------------------------------------------------------------------");
console.log(arrP);
console.log(p.calculateNearest(arrP));






