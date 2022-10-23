export class Point{

    private x : number;
    private y : number;

    constructor(x : number = 0, y : number = 0){

        this.x = x;
        this.y = y;
    }

    public setX(x : number) : void{
        this.x = x;
    }
    public setY(y : number) : void{
        this.y = y;
    }
    public getX() : number{
        return this.x;
    }
    public getY() : number{
        return this.y;
    }

    public toString() : string{
        return "(" + this.x + "," + this.y + ")";
    }

    public distanceTolOrigin() : number{
        let distancia : number = 0;
        let OrigenX : number = 0;
        let OrigenY : number = 0;

        distancia = Math.sqrt(Math.pow(this.x - OrigenX, 2)) + Math.sqrt(Math.pow(this.y - OrigenY, 2));

        return distancia;
    }

    public calculateDistance(p2 : Point) : number{

        let distancia : number = 0;

        distancia = Math.sqrt(Math.pow(this.x - p2.x, 2)) + Math.sqrt(Math.pow(this.y - p2.y, 2));

        return distancia;

    }

    public calcularQuadrant():number{

        let posicion : number = 0;

        if (this.x == 0 && this.y == 0){

            posicion = 0;
        }else if (this.x >= 0 && this.y >= 0){

            posicion = 1;
        }else if (this.x < 0 && this.y >= 0){

            posicion = 2;
        }else if (this.x < 0 && this.y < 0){

            posicion = 3;
        }else{

            posicion = 4;
        }

        return posicion;
    }

    public calculateNearest(points : Point[]) : Point{

        let p1 : Point = points[0];
        
        for (let i = 0; i < points.length; i++){

            if (this.calculateDistance(points[i]) < this.calculateDistance(p1)){
                
                p1 = points[i];
            }
            
            
        }

        return p1;
    }
}