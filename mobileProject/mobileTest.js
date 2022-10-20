"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var m = new mobile_1.Mobile("El ladrillo", "Nokia", "3310", "Negro", 111111111);
var m2 = new mobile_1.Mobile("Asereje", "Ja", "De je", "Dejede tu dejede", 222222222);
var m3 = new mobile_1.Mobile("El boom", "Samsung", "Galaxy S6", "Explosivo", 333333333);
var arrMobiles = [m, m2, m3];
console.log(m);
/*m.setName("Asereje");
m.setTrademark("Ja")
m.setModel("De je");
m.setColor("Dejede tu dejede");
m.setPrice(111111111);
console.log(m);*/
console.log("------------------------------------------------------------");
console.log(m.print());
for (var i = 0; i < arrMobiles.length; i++) {
    console.log(arrMobiles[i].print());
}
