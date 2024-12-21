let v = 30;

if (v >= 0 && v < 18) {
    console.log("Insufficiente");
}else if (v >= 18 && v < 21) {
    console.log("Sufficiente");
}else if (v >= 21 && v < 24) {
    console.log("Buono");    
}else if (v >= 24 && v < 27) {
    console.log("Distinto");
}else if (v >= 27 && v <= 29) {
    console.log("Ottimo");    
}else if (v == 30) {
    console.log("Eccellente");    
}
else {
    console.log("Il voto deve essere compreso tra 0 e 30");
}

// Problema della traccia: i voti compresi tra 29 e 30 sono esclusi dalla conversione in giudizio.

let voto = 17;

switch (true) {
    case voto >= 0 && voto < 18 : console.log("Insuficiente");
    break;
    case voto >= 18 && voto < 21 : console.log("Sufficiente");
    break;
    case voto >= 21 && voto < 24 : console.log("Buono");
    break;
    case voto >= 24 && voto < 27 : console.log("Distinto");
    break;
    case voto >= 27 && voto <= 29 : console.log("Ottimo");
    break;
    case voto == 30 : console.log("Eccellente");
    break;
    default : console.log("Il voto deve essere compreso tra 0 e 30");
    break; // non obbligatorio dopo il default
}