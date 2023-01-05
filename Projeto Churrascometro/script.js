// cada pessoa come, Carne - 400 gr por pessoa   + de 6 horas - 650 gr de carne
// cada pessoa bebe, Cerveja - 1200 ml por Pessoa, + 6 horas,  - 2000 ml de cerveja
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

function calcular() {

    var adult = parseFloat(document.getElementById("adultos").value);
    var cri = parseFloat(document.getElementById("crianças").value);
    var time = parseFloat(document.getElementById("duração").value);

    var qtdCarne = horaschurrasco(time) * adult + (horaschurrasco(time) / 2 * cri);
    var qtdCerveja = horaCerveja(time) * adult;
    var qtdRefrigerante = horaRefrigerante(time) * adult + (horaRefrigerante(time) / 2 * cri);

    // if(document.getElementById("adultos") == " " ||cri == "" || time == ""){
    //     var vaz = document.getElementById("vazio");
    //     vaz.innerHTML = "Preencha todos os campos";
    // }else{
    //     var inputAdult = document.getElementById("carne");
    //     inputAdult.innerHTML = qtdCarne + "grama de carne";
    //     console.log("teste");
    // }
    
    var inputAdult = document.getElementById("carne");
    inputAdult.innerHTML = qtdCarne / 1000 + " KG de carne";
    var inpultCri = document.getElementById("cerveja");
    inpultCri.innerHTML = Math.ceil(qtdCerveja /355) + " Latas de cerveja";
    var inputTime = document.getElementById("bebida");
    inputTime.innerHTML = Math.ceil(qtdRefrigerante /2000) + " ml de bebida";


}

function horaschurrasco(time) {
    if (time >= 6) {
        return 650;
    } else {
        return 400;
    }

}

function horaCerveja(time) {
    if (time >= 6) {
        return 2000;

    } else {
        return 1200
    }
}

function horaRefrigerante(time) {
    if (time >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}



