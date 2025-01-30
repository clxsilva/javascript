/**
 * Assincronismo - uso de promises em API
 * @author Claudio Silva
 */

const input = require('readline-sync')
let cep, urlAPI

console.clear()
console.log("VIA CEP")
cep = input.question("Digite o CEP: ")
// console.log(cep)
// consumo da API (via cep)
urlAPI = `https://viacep.com.br/ws/${cep}/json`
// console.log(urlAPI)
// uso de promise (assincronismo) para acessar a API
fetch(urlAPI)
    .then((response) => {
        return response.json()
    })
    .then((dados) => {
        console.log(dados.logradouro)
        console.log(dados.bairro)
        console.log(dados.localidade)
        console.log(dados.estado)
        console.log(dados.uf)
    })
    .catch((error) => {
        console.log(error)
    })