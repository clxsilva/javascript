Variáveis e Constantes
 
Uma constante é como uma variável, mas com uma diferença importante:
uma vez que você define o valor de uma constante, ele não pode ser
alterado durante a execução do programa.
 
Por que usar constantes?
Segurança: Se você sabe que um valor não deve ser alterado em seu
programa, usar uma constante evita erros.
Legibilidade: Quando você usa uma constante, deixa claro para quem
está lendo o código que aquele valor é fixo e importante.
Boas práticas: Em muitos casos, é recomendado usar constantes sempre
que possível para valores que não precisam mudar, facilitando a
manutenção do código.
 
Uma variável é um espaço na memória do computador onde armazenamos
dados que podem ser utilizados e modificados durante a execução de um
programa. O nome "variável" vem do fato de que o valor armazenado pode
variar ao longo do tempo, conforme o programa roda.
 
Por que usar variáveis?
Para guardar informações que você vai precisar mais tarde.
Para realizar cálculos ou tomar decisões baseadas em diferentes valores.
 
Nas linguagens de programação as variáveis são tipadas ou 
dinamicamente tipadas
 
Existem 3 tipos de variáveis:
 
String -> armazena caracteres e numeros 
Number -> armazena numeros inteiros e nao interios 
Boolean -> true | false
 
ATENÇÃO: No JavaScript uma variável pode ser criada
usando let ou var
________________________________________________________________________
Comando JavaScript (Sintaxe)
console.log() -> escrever no console 
console.clear() -> Limpar a tela do console 
const -> criar (declarar) uma constantelet -> criar(declarar) uma variavel
typeof() -> verificar o tipo de variável
Node.js — Executar o JavaScript em toda parte
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
 
/**
* Estudo de constante e variavel
* @author Claudio Silva
*/
 
console.clear()
 
// constante
const pi = 

//variaveis
let nome 
let idade 
let vip
 
nome = "Claudio Silva"
console.log(typeof(nome))
console.log(nome)
 
idade= "19"
console.log(typeof(idade))
console.log(idade)
 
vip = true 
console.log(typerof(vip))
console.log(log)
