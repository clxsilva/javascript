/**
 * Eventos de Intervalo
 * @author Claudio Silva
 */

function piscar() {
    let ligada = false
    // função nativa do JS para gerar intervalos
    // 1000 (1000ms = 1s)
    setInterval(()=> {
        if (ligada === false) { // ligar se estiver igual a false = deligada
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
        ligada = !ligada //! NOT
    },1000)
}