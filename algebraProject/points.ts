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
}