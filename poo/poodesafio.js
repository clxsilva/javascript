/**
 * Desafio POO Carro
 * @author Claudio Henrique
 */

console.clear()

// criando a classe Carro
class Carro {
    // construtor que define os atributos da classe
    constructor(modelo, ano, cor) {
        this.modelo = modelo // atributo modelo
        this.ano = ano // atributo ano (número)
        this.cor = cor // atributo cor (string)
        this.ligado = false // o carro começa desligado
    }

    // criar o carro
    criar() {
        console.log("________________________________________________________________")
        console.log(`Criando carro... Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`)
    }

    // método para ligar o carro
    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`O ${this.modelo} ${this.cor} ligou!`)
        } else {
            console.log("O carro já está ligado!")
        }
    }
    
    // método para acelerar o carro
    acelerar() {
        if (this.ligado) {
            console.log(`O ${this.modelo} acelerou!`)
        } else {
            console.log("O carro precisa estar ligado para acelerar!")
        }
    }

    // método para desligar o carro
    desligar() {
        if (this.ligado) {
            this.ligado = false
            console.log(`O ${this.modelo} foi desligado!`)
        } else {
            console.log("O carro já está desligado!")
        }
    }
}

// classe avião
class Aviao extends Carro {
    constructor(modelo, ano, cor, envergadura) {
        super(modelo, ano, cor);  // passa os parâmetros da classe Carro
        this.envergadura = envergadura; // atributo exclusivo do avião
    }

    criarAviao() {
        console.log("________________________________________________________________")
        console.log(`Criando avião... Modelo: ${this.modelo}, Cor: ${this.cor}, Envergadura: ${this.envergadura}`)
    }

    // sobrescrevendo o método acelerar() para o comportamento de um avião
    acelerar() {
        if (this.ligado) {
            console.log(`O ${this.modelo} ${this.cor} com uma envergadura de ${this.envergadura} acelerou e está decolando!`)
        } else {
            console.log("O avião precisa estar ligado para decolar!")
        }
    }

    aterrizar() {
        console.log(`O ${this.modelo} aterrizou com sucesso!`)
    }
}

// criando os objetos
const carro1 = new Carro("Civic", 2008, "Preto")
const carro2 = new Carro("Chevette", 2014, "Azul")
const aviao1 = new Aviao("Gol", 2021, "Branco", 38)  

// usando os métodos dos objetos

// civic
carro1.criar() // criar o carro
carro1.ligar() // ligar o carro
carro1.acelerar() // acelerar o carro
carro1.desligar() // desligar o carro

// chevette
carro2.criar() // criar o carro
carro2.ligar() // ligar o carro
carro2.acelerar() // acelerar o carro
carro2.desligar() // desligar o carro

// gol
aviao1.criarAviao() // criar o avião
aviao1.ligar()  // ligar o avião
aviao1.acelerar()  // acelerar o avião (decolagem)
aviao1.aterrizar()  // aterrizar
aviao1.desligar()  // desligar o avião
