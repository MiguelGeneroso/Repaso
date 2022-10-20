export class Mobile {

    constructor(private name : string,
                private trademark : string,
                private model : string,
                private color : string,
                private price : number){}

    public setName(t : string) : void{
    
        this.name = t;
    }

    public setTrademark(t : string) : void{
    
        this.trademark = t;
    }

    public setModel(t : string) : void{
    
        this.model = t;
    }

    public setColor(t : string) : void{
    
        this.color = t;
    }

    public setPrice(n : number) : void{
    
        this.price = n;
    }

    public getName() : string{

        return this.name;
    }

    public getTrademark() : string{

        return this.trademark;
    }

    public getModel() : string{

        return this.model;
    }

    public getColor() : string{

        return this.color;
    }

    public getPrice() : number{

        return this.price;
    }

    public print () : string{

        return "The characteristics of the mobile name are:\n\nName:\t\t" + this.name +
                "\nTrademark:\t" + this.trademark + "\nModel:\t\t" + this.model +
                "\nColor:\t\t" + this.color + "\nPrice:\t\t" + this.price;
    }
}