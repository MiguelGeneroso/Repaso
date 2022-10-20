"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Mobile.prototype.setName = function (t) {
        this.name = t;
    };
    Mobile.prototype.setTrademark = function (t) {
        this.trademark = t;
    };
    Mobile.prototype.setModel = function (t) {
        this.model = t;
    };
    Mobile.prototype.setColor = function (t) {
        this.color = t;
    };
    Mobile.prototype.setPrice = function (n) {
        this.price = n;
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.print = function () {
        return "The characteristics of the mobile name are:\n\nName:\t\t" + this.name +
            "\nTrademark:\t" + this.trademark + "\nModel:\t\t" + this.model +
            "\nColor:\t\t" + this.color + "\nPrice:\t\t" + this.price;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
