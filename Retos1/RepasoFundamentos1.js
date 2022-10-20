const signoZodiaco = (dia,mes) => {

    switch (true) {
        case (dia >= 21 && mes == 3) || (dia <= 20 && mes == 4):
            console.log("Aries");
            break;
        case (dia >= 21 && mes == 4) || (dia <= 21 && mes == 5):
            console.log("Tauro");
            break;
        case (dia >= 22 && mes == 5) || (dia <= 21 && mes == 6):
            console.log("Geminis");
            break;
        case (dia >= 22 && mes == 6) || (dia <= 22 && mes == 7):
            console.log("Cancer");
            break;
        case (dia >= 23 && mes == 7) || (dia <= 23 && mes == 8):
            console.log("Leo");
            break;
        case (dia >= 24 && mes == 8) || (dia <= 23 && mes == 9):
            console.log("Virgo");
            break;
        case (dia >= 24 && mes == 9) || (dia <= 23 && mes == 10):
            console.log("Libra");
            break;
        case (dia >= 24 && mes == 10) || (dia <= 22 && mes == 11):
            console.log("Escorpio");
            break;
        case (dia >= 23 && mes == 11) || (dia <= 21 && mes == 12):
            console.log("Sagitario");
            break;
        case (dia >= 22 && mes == 12) || (dia <= 20 && mes == 1):
            console.log("Capricornio");
            break;
        case (dia >= 21 && mes == 1) || (dia <= 18 && mes == 2):
            console.log("Acuario");
            break;
        case (dia >= 19 && mes == 2) || (dia <= 20 && mes == 3):
            console.log("Piscis");
            break;
    
        default:
            break;
    }
}

const localizar = (pais) => {
    let europa = ["España","Andorra","Baticano","Portugal","Noruega"];
    let asia = ["Japon","Taiwan","India","Tailandia","Corea"];
    let oceania = ["Nueva Zelanda","Australia","Papua Nueva Guinea","Palaos","Tonga"];
    let america = ["Argentina","Jamaica","Canada","Chile","Mexico"];
    let africa = ["Angola","Burundi","Egipto","Etiopia","Madagascar"];

    if (europa.includes(pais)){

        console.log("Europa");
    }else if(asia.includes(pais)){

        console.log("Asia");
    }
    else if(oceania.includes(pais)){
        
        console.log("Oceania");
    }
    else if(america.includes(pais)){
        
        console.log("America");
    }
    else if(africa.includes(pais)){

        console.log("Africa");
    }else{

        console.log("No se encuentra: " + pais);
    }
}

const printPares = (n) => {
    
    for (let i = 0; i <= n; i++){
        //console.log(n);
        if (i % 2 != 0){
            console.log(i);
        }
    }
}

const revertirArray = (arr) => {
    let arrReverse = [];

    for (let i = (arr.length - 1); i >= 0; i--){
        
        arrReverse.push(arr[i]);

    }

    return arrReverse;
}

const arcoiris = (arr) => {

    colorArcoiris = ["rojo","naranja","amarillo","verde","azul","indigo","violeta"];

    for (let i = 0; i < arr.length; i++){

        if (colorArcoiris.includes(arr[i])){
            
            console.log(arr[i]);
        }

    }
}

const existePar = (arr) =>{

    //while
    let existe = false;

    for (let i = 0; i < arr.length; i++){

        if(arr[i] % 2 == 0){

            existe = true;
        }
    }

    return existe;

}

const comienzaM = (arr) => {

    //while
    let todosM = true;
    let i = 0;

    while (!arr[i][0].includes("M")){

        contador++;
    }

    for (let i = 0; i < arr.length; i++){

        if (arr[i][0].includes("M")){

        }else{

            todosM = false;

        }
    }

    return todosM;
}

const sumaCaracteres = (arr) => {
    
    let result = 0;

    for (let i = 0; i < arr.length; i++){

        result += arr[i].length;
    }

    return result;
}

const esParImpar = (n) => {

    if (n % 2 == 0){

        console.log("El numero es par");
    }else{

        console.log("El numero es Impar");
    }
}

// signoZodiaco(17,1);
// localizar("Finlandia");
// printPares(100);
//console.log(revertirArray([0,1,2,3,4,5,6,7,8,9]));
//arcoiris(["morado","cyan","amarillo","granate","azul","indigo","rosa"]);
//console.log(existePar([1,3,11,15,7,89,333]));
//console.log(comienzaM(["Mario","Marina","Mariano","Maria","Monica"]));
//console.log(sumaCaracteres(["adasdasdb","aasdasdadadb","aasdasdasdb"]));
array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
array3 = ["Venezuela", "Veneno", "Voltaje"];
esParImpar(sumaCaracteres(array1));
esParImpar(sumaCaracteres(array2));
esParImpar(sumaCaracteres(array3));