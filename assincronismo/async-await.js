/**
 * Uso de async - await (sintaxe moderna do JS para lidar com assincronismo)
 * @author Claudio Silva
 */

// biblioteca nativa do JS para trabalhar com arquivos
const fs = require('fs')
 
function criarArquivo() {
    let conteudo = "Aluno Silva\n Exemplo de uso dos novos recursos de assincronismo no JS (async - await)" // "n" é uma quebra de linha
    gravarArquivo("teste.txt", conteudo)
}

async function gravarArquivo(path, conteudo) {
    try {
        await fs.promises.writeFile(path, conteudo)
        console.log("Arquivo gravado com sucesso")
    } catch (error) {
        console.log(error)
    }
}

console.clear()
criarArquivo()