export const printPares = (n) => {
    
    for (let i = 0; i <= n; i++){
        //console.log(n);
        if (i % 2 != 0){
            console.log(i);
        }
    }
}

export function revertirArray (arr : number[]) : number[] {
    let arrReverse : number[] = [];

    for (let i = (arr.length - 1); i >= 0; i--){
        
        arrReverse.push(arr[i]);

    }

    return arrReverse;
}

export const arcoiris = (arr : string[]) => {

    let colorArcoiris : string[] = ["rojo","naranja","amarillo","verde","azul","indigo","violeta"];

    for (let i = 0; i < arr.length; i++){

        if (colorArcoiris[i] == (arr[i])){
            
            console.log(arr[i]);
        }

    }
}

export function sumaCaracteres (arr : string[]) : number {
    
    let result = 0;

    for (let i = 0; i < arr.length; i++){

        result += arr[i].length;
    }

    return result;
}

