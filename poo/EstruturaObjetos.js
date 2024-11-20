/**
 * Estrutura de dados - objetos
 * @author Claudio Henrique
 */

console.clear()

const funcionario1 = {}
console.log(typeof(funcionario1))
// adicionar dados a estrutura
funcionario1.nome = "Claudio"
funcionario1.cargo = "Professor"
funcionario1.email = "claudio@gmail.com"
funcionario1.salario = 18900
// listar os dados da estrutura
console.log(funcionario1)
console.log(funcionario1.cargo)
// modificar os dados da estrutura
funcionario1.nome = "Claudio Silva"
console.log(funcionario1)
// excluir dados da estrutura
delete funcionario1.salario
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    emial: "brucewayne@gmail.com",
    salario: 90000000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gotham City",
    estado: "Nova Jersey",
}

console.log(endereco1)

// ... spread operator (união de 2 estruturas de dados)
const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "Mordomo",
    salario: 20000,
    ...endereco1
}

console.log(funcionario3)

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "dick@gmail.com",
    salario: 20000,
    ...endereco1
}

console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "ironm@gmail.com",
    salario: 375000,
    armadura: {
        versao: "Mark II",
        ano: 2010,
        reator: "Arc 01",
    },
    suitUp: () => {
        console.log("🤖")
    }
}

console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura)
funcionario5.suitUp() // executar a função interna da estrutura