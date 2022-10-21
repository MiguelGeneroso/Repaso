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
}