import { Point } from "./points";

let p : Point = new Point();
let p2 : Point = new Point(2,3);

p.setX(3);
p.setY(3);
console.log("Valor eje x: " + p.getX());
console.log("Valor eje y: " + p.getY());
console.log(p.toString());

console.log("La distancia es : " + p.distanceTolOrigin());
console.log("La distancia entre (" + p.getX() + "," + p.getY() + ") y (" + p2.getX() + "," + p2.getY() + ") es: " + p.calculateDistance(p2));



