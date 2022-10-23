"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
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
    Point.prototype.calcularQuadrant = function () {
        var posicion = 0;
        if (this.x == 0 && this.y == 0) {
            posicion = 0;
        }
        else if (this.x >= 0 && this.y >= 0) {
            posicion = 1;
        }
        else if (this.x < 0 && this.y >= 0) {
            posicion = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            posicion = 3;
        }
        else {
            posicion = 4;
        }
        return posicion;
    };
    Point.prototype.calculateNearest = function (points) {
        var p1 = new Point(0, 0);
        for (var i = 0; i < points.length; i++) {
            if (this.calculateDistance(points[i]) < this.calculateDistance(p1)) {
                p1 = points[i];
            }
        }
        return p1;
    };
    return Point;
}());
exports.Point = Point;
