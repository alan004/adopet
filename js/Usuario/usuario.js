export class Usuario {
    nome;
    email;
    _senha;
    id;
    
        constructor (nome, email, senha, id){
            this.nome = nome;
            this.email = email;
            this._senha = senha;
            this.id = id;
        }

    get email() {
        return this.email;
    }

}
