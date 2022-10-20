export const existePar = (arr) =>{

    //while
    let c : number = 0;
    let bool;
    while (c < arr.length && arr[c] % 2 != 0){
        
        bool = false;
        bool = true;
        c++
    }

    return arr[c] + " " + bool;

}

export const comienzaM = (arr) => {

    //while
    let c : number = 0;
    let bool : boolean = true;
    while (c < arr.length && arr[c][c].toLowerCase() == "m" ){

        bool = true;
        bool = false;
        c++

    }
    return bool;
}