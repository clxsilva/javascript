/**
 * Encapsulamento da POO
 * Encapsulamento (segurança)
 * @author Claudio Henrique
 */

console.clear()

class User {
    // atributos
    constructor(login, senha) {
        this.login = login
        // encapsulamento (0_"underline" enjaula a váriavel)
        let _senha = senha
        this.getSenha = () => _senha // leitura
        this.setSenha = (novaSenha) => _senha = novaSenha // escrita
    }
    // método
    logar() {
        console.log("______________________________")
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === 'admin' && this.getSenha() === '123@senac') {
            console.log("Usuário autenticado")
        } else {
            console.log("Usuário e/ou senha inválido(s)")
        }
    }
}

/*** Sistema ***/
// criando um novo objeto

const user1 = new User("admin", "1234")
user1.logar()
user1.setSenha("123@senac")
user1.logar()