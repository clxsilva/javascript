/**
 * Ficha de um aluno de academia
 * @author Claudio Silva
 */

// variáveis
let nome
let idade
let altura
let peso
let vip
let fcm
let imc

console.clear()

// entrada de dados
nome  = "Dean Winchester"
idade = 24
altura = 1.80
peso = 72
vip = true

//processamento;
fcm = 208 - (0.7 * idade)
//imc contém 3 variáveis, sendo eles:
//peso,altura, imc
imc = 72 / (1.80 * 1.80)


// saida
console.log("Ficha do aluno")
console.log("____________________")
console.log(`Nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`altura: ${altura}`)
console.log(`peso: ${peso}`)
console.log(`vip: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`) //".toFixed" formata em casas
//decimais de acordo com o seu cenário. Ex:
//.tiFixed(2)   "2" é a formatação