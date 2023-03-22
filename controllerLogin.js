const listarUsuario = () => {
    return fetch('http://localhost:3000/Usuario')
    .then(e=> {
        if(e.ok){
            return e.json()
        }
        throw new Error ('Não foi possível listar os usuários.')
    })
}

const criarUsuario = (nome, email, senha) =>{
    return fetch('http://localhost:3000/Usuario',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })
    .then(e => {
        if(e.ok){
            return e.body
        }
        throw new Error ('Não foi possível criar o usuário')
    })

}

const logarUsuario = ()=>{
    return fetch('http://localhost:3000/Usuario')
     .then(e=> {
        if(e.ok){
            return e.json()
        }
        throw new Error ('Não foi possível fazer login os usuários.')
    })

}

export const clientService = {
    listarUsuario,
    criarUsuario,
    logarUsuario
}