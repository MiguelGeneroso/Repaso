"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esParImpar = exports.localizar = exports.signoZodiaco = void 0;
function signoZodiaco(dia, mes) {
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
exports.signoZodiaco = signoZodiaco;
function localizar(pais) {
    var europa = ["España", "Andorra", "Baticano", "Portugal", "Noruega"];
    var asia = ["Japon", "Taiwan", "India", "Tailandia", "Corea"];
    var oceania = ["Nueva Zelanda", "Australia", "Papua Nueva Guinea", "Palaos", "Tonga"];
    var america = ["Argentina", "Jamaica", "Canada", "Chile", "Mexico"];
    var africa = ["Angola", "Burundi", "Egipto", "Etiopia", "Madagascar"];
    if (europa[0] == pais || europa[1] == pais || europa[2] == pais || europa[3] == pais || europa[4] == pais) {
        console.log("Europa");
    }
    else if (asia[0] == pais || asia[1] == pais || asia[2] == pais || asia[3] == pais || asia[4] == pais) {
        console.log("Asia");
    }
    else if (oceania[0] == pais || oceania[1] == pais || oceania[2] == pais || oceania[3] == pais || oceania[4] == pais) {
        console.log("Oceania");
    }
    else if (america[0] == pais || america[1] == pais || america[2] == pais || america[3] == pais || america[4] == pais) {
        console.log("America");
    }
    else if (africa[0] == pais || africa[1] == pais || africa[2] == pais || africa[3] == pais || africa[4] == pais) {
        console.log("Africa");
    }
    else {
        console.log("No se encuentra: " + pais);
    }
}
exports.localizar = localizar;
function esParImpar(n) {
    if (n % 2 == 0) {
        console.log("El numero es par");
    }
    else {
        console.log("El numero es Impar");
    }
}
exports.esParImpar = esParImpar;
