"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var points_1 = require("./points");
var Triangle = /** @class */ (function () {
    // private vertex1 : Point;
    // private vertex2 : Point;
    // private vertex3 : Point;
    function Triangle(vertex1, vertex2, vertex3) {
        if (vertex1 === void 0) { vertex1 = new points_1.Point(0, 1); }
        if (vertex2 === void 0) { vertex2 = new points_1.Point(1, -1); }
        if (vertex3 === void 0) { vertex3 = new points_1.Point(-1, -1); }
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    Triangle.prototype.calculateLengthSides = function () {
        var lTriangles = [];
        lTriangles.push(this.vertex1.calculateDistance(this.vertex2));
        lTriangles.push(this.vertex2.calculateDistance(this.vertex3));
        lTriangles.push(this.vertex3.calculateDistance(this.vertex1));
        return lTriangles;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
