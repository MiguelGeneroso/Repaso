"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    Point.prototype.distanceTolOrigin = function () {
        var distancia = 0;
        var OrigenX = 0;
        var OrigenY = 0;
        distancia = Math.sqrt(Math.pow(this.x - OrigenX, 2)) + Math.sqrt(Math.pow(this.y - OrigenY, 2));
        return distancia;
    };
    Point.prototype.calculateDistance = function (p2) {
        var distancia = 0;
        distancia = Math.sqrt(Math.pow(this.x - p2.x, 2)) + Math.sqrt(Math.pow(this.y - p2.y, 2));
        return distancia;
    };
    return Point;
}());
exports.Point = Point;
