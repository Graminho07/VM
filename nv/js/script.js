let distancia = document.querySelector("#distancia")
let tempo = document.querySelector("#tempo")
let velocidade = document.querySelector("velocidade")
let arrayVelocidade = []

const calcular = function(){
    velocidade.value = distancia.value / tempo.toFixed(2)
    arrayVelocidade.push(["[", distancia.value, tempo.value, velocidade.value, "]",])
    resultado.value = arrayVelocidade
}