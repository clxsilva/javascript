/**
 * Ficha de um aluno de academia
 * @author Claudio Silva
 */

const input = require('readline-sync')
const colors = require('colors')

// variáveis
let nome, idade, altura, peso, fcm, imc, consumo

console.clear()

// entrada de dados
nome  = "Dean Winchester"
idade = 24
altura = 1.80
peso = 54
vip = true

// saida



console.log(" _     _            _      _         ______      _             _                       ")
console.log("| |   | |          | |_   | |       / _____)    | |           | |      _               ")
console.log("| |__ | | ____ ____| | |_ | | _    | /      ____| | ____ _   _| | ____| |_  ___   ____ ")
console.log("|  __)| |/ _  ) _  | |  _)| || \\   | |     / _  | |/ ___) | | | |/ _  |  _)/ _ \\ / ___)")
console.log("| |   | ( (/ ( ( | | | |__| | | |  | \____( ( | | ( (___| |_| | ( ( | | |_| |_| | |    ")
console.log("|_|   |_|\\____)_||_|_|\___) _| |_|   \\______)_||_|_|\\____)\\____|_|\\_||_|\\___)___/|_|    ")
                                                                                       
console.log("")

nome = input.question("Digite o seu nome: ")
idade = Number(input.question("Digite a sua idade: "))
altura = Number(input.question("Digite a sua altura em metros: "))
peso= Number(input.question("Digite o seu peso em kg: "))

//processamento;
fcm = 208 - (0.7 * idade)
imc = peso / (1.80 * 1.80)
consumo = peso * 0.035

console.log("Ficha do aluno")
console.log("____________________")
console.log(`Nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`altura: ${altura}`)
console.log(`peso: ${peso}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`) //".toFixed" formata em casas
//decimais de acordo com o seu cenário. Ex:
//.tiFixed(2)   "2" é a formatação
// tabela imc
if (imc < 18.5) {
    console.log("Abaixo do peso".cyan)
} else if (imc < 25) {
    console.log("Peso normal".green)
} else if (imc < 30) {
    console.log("Levemente acima do peso".yellow)
} else if (imc < 35) {
    console.log("Obesidade Grau I".magenta)
} else if (imc < 40) {
    console.log("Obesidade grau II (severa)".red)
} else {
    console.log("Obesidade grau III (mórbida)".bgRed)
}

// consumo de água
console.log(`Consumir por dia ${consumo.toFixed(3)} litros de água`)