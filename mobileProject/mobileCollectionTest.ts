import { MobileCollection } from "./mobileCollection";
import { Mobile } from "./mobile";

let m1 : Mobile = new Mobile("El ladrillo","Nokia","3310","Negro",300);
let m2 : Mobile = new Mobile("Asereje","Ja","De je","Dejede tu dejede",300);
let m3 : Mobile = new Mobile("El boom","Samsung","Galaxy S6","Explosivo",900);
let m4 : Mobile = new Mobile("Iphone X","Iphone","X","Azul",1000);

let mArr : Mobile[] = [m1,m2,m3,m4];
let myCollection : MobileCollection = new MobileCollection(mArr);

console.log(myCollection.getMobiles());
myCollection.setMobiles(mArr);

