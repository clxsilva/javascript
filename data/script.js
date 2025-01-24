/**
 * Data automática no rodapé
 * @author Claudio Silva
 */

function obterData() {
    const data = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return `${data.toLocaleDateString('pt-BR', options)} - ${data.toLocaleTimeString('pt-BR')}`
}

function atualizarData() {
    // a linha abaixo insere na tag <p> identificada como dataAtual o retorno da função
    document.getElementById('dataAtual').innerHTML = obterData()
}

// atualizar a data a cada/hora a cada segundo
setInterval(atualizarData, 1000) //1000ms = 1s