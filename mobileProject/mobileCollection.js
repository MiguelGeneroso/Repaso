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
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
