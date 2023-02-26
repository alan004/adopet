export class Usuario {
    nome;
    email;
    _senha;
    
        constructor (nome, email, senha){
            this.nome = nome;
            this.email = email;
            this._senha = senha;
        }

    get email() {
        return this.email;
    }

}
