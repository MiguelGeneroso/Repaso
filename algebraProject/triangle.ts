import { Point } from "./points";

export class Triangle{

    // private vertex1 : Point;
    // private vertex2 : Point;
    // private vertex3 : Point;

    constructor(private vertex1 : Point = new Point(0,1),
                private vertex2 : Point = new Point(1,-1),
                private vertex3 : Point = new Point(-1,-1)){

    }

    public calculateLengthSides() : number[]{

        let lTriangles : number [] = [];

        lTriangles.push(this.vertex1.calculateDistance(this.vertex2));
        lTriangles.push(this.vertex2.calculateDistance(this.vertex3));
        lTriangles.push(this.vertex3.calculateDistance(this.vertex1));

        return lTriangles;
    }
}