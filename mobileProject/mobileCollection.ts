import {Mobile} from "./mobile";

export class MobileCollection{
    
    //private mobiles : Mobile[];
    private totalPrice : number;

    constructor(private mobiles : Mobile[]){

        this.mobiles = mobiles;
        this.totalPrice = 0;
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
}

        return sumaTotal;


    }
}