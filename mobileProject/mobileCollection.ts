import {Mobile} from "./mobile";

export class MobileCollection{
    
    //private mobiles : Mobile[];
    private totalPrice : number;

    constructor(private mobiles : Mobile[]){

        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    public setMobiles(arr : Mobile[]) : void{
        this.mobiles = arr;
    }

    public setTotalPrice(n : number) : void{
        this.totalPrice = n;
    }

    public getMobiles() : Mobile[]{

        return this.mobiles;
    }

    public getTotalPrice() : number {

        
        return this.totalPrice;
    }

    private totalPriceCalculation() : number {

        let sumaTotal : number = 0;
        for (let i = 0; i < this.mobiles.length; i++){
            sumaTotal += this.mobiles[i].getPrice();
        }

        return sumaTotal;


    }
}