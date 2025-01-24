/**
 * Slide Show
 * @author Claudio Silva
 */

// array(vetor) de imagens
let slides = ["banner1.jpg","banner2.jpg","banner3.jpg"]
let intervalo = 3000 //(3000ms = 3s (1s por imagem))
let indice = 0 // apoio a lógica (índice do array)

// função para troca das imagens
function show() {
    // capturar o id do banner
    const slide = document.getElementById('slide')

    // efeito de entrada
    // a estrutura abaixo verifica se foi atruibuída a classe (.slideOut') ao identificador #slide
    if(slide.classList.contains('slideOut')) {
        slide.classList.remove('slideOut')
    }
    slide.classList.add('slideIn')

    // troca de imagem
    // temporizador (nativo do JS)
    setTimeout(() => {
        // soma 1 ao índice do vetor
        indice++
        // se o último slide do vetor for atingido voltar para o zero
        if (indice >= slides.length) {
            indice = 0
        }
        // substituir a imagem no documento HTML pela próxioma imagem do vetor (img/slides[0]) (img/slides[1]) (img/slides[2])
        slide.src = `img/${slides[indice]}`
    },1000) // ajuste (sincronizar com o CSS)

    // efeito de saída
    if(slide.classList.contains('slideIn')) {
        slide.classList.remove('slideIn')
    }
    slide.classList.add('slideOut')

    // intervalo para a próxima execução (loop)
    setTimeout(show, intervalo)

}

// executar a função ao iniciar o documento js
show()