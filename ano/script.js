/**
 * Ano automático
 * @author Claudio Silva
 */

let ano = document.getElementById('copyrightYear')

// inserindo o ano na tag <span>
let anoAtual = new Date().getFullYear()
ano.innerHTML = anoAtual