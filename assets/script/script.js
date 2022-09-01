let inputAdultos = document.getElementById("adultos");
let inputCrianca = document.getElementById("crianca");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;        
    }
    else {
        return 400;
    }
    
}

function brejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;        
    }
    else {
        return 1200;
    }
    
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;        
    }
    else {
        return 1000;
    }
    
}


function calcular(){
   

let adultos = inputAdultos.value;
let criancas = inputCrianca.value;
let duracao = inputDuracao.value;

let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
console.log(qdtTotalCarne);


let qdtTotalBreja = brejaPP(duracao) * adultos;
console.log(qdtTotalBreja);


let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
console.log(qdtTotalBebidas);



resultado.innerHTML = `<p> ${qdtTotalCarne / 1000} Kg de Carne </p>`;
resultado.innerHTML += `<p> ${Math.ceil(qdtTotalBreja / 355)} Latas de Cerveja</p>`;
resultado.innerHTML += `<p> ${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de Refrigerante </p>`;

}


