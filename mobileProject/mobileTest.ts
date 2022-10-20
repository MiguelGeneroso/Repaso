import { Mobile } from "./mobile";

let m : Mobile = new Mobile("El ladrillo","Nokia","3310","Negro",111111111);
let m2 : Mobile = new Mobile("Asereje","Ja","De je","Dejede tu dejede",222222222);
let m3 : Mobile = new Mobile("El boom","Samsung","Galaxy S6","Explosivo",333333333);
let arrMobiles : Mobile[] = [m,m2,m3];
console.log(m);
/*m.setName("Asereje");
m.setTrademark("Ja")
m.setModel("De je");
m.setColor("Dejede tu dejede");
m.setPrice(111111111);
console.log(m);*/
console.log("------------------------------------------------------------");
console.log(m.print());

for (let i = 0; i < arrMobiles.length; i++){
    console.log(arrMobiles[i].print());
}

