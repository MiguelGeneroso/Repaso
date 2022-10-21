"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileCollection.prototype.setMobiles = function (arr) {
        this.mobiles = arr;
    };
    MobileCollection.prototype.setTotalPrice = function (n) {
        this.totalPrice = n;
    };
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.totalPriceCalculation = function () {
        var sumaTotal = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            sumaTotal += this.mobiles[i].getPrice();
        }
        return sumaTotal;
    };
    MobileCollection.prototype.printCollection = function () {
        for (var i = 0; i < this.mobiles.length; i++) {
            console.log("The characteristics of the mobile " + this.mobiles[i].getName() + " are:\nName:\t\t" + this.mobiles[i].getName() +
                "\nTrademark:\t" + this.mobiles[i].getTrademark() + "\nModel:\t\t" + this.mobiles[i].getModel() + "\nColor:\t\t" +
                this.mobiles[i].getColor() + "\nPrice\t\t" + this.mobiles[i].getPrice() + "\n\n");
        }
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
