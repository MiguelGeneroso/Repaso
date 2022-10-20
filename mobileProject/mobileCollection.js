"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.mobiles = mobiles;
        this.totalPrice = 0;
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
        for (var i = 0; i < this.mobiles.length; i++) {
            this.totalPrice += this.mobiles[i].getPrice();
        }
        return this.totalPrice;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
