const perfilUsuario = (id) => {
    return fetch(`http://localhost:3000/Usuario/${id}`)
    .then(e=> {
        if(e.ok){
            return e.json()
        }
        throw new Error ('Não foi possível listar os usuários.')
    })
}

const criarUsuario = (nome, email, senha) =>{
    return fetch(`http://localhost:3000/Usuario`,{
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
    return fetch(`http://localhost:3000/Usuario`)
     .then(e=> {
        if(e.ok){
            return e.json()
        }
        throw new Error ('Não foi possível fazer login os usuários.')
    })

}


async function lerUsuario(id) {
    const response = await fetch(`db.json`)
    const data = await response.json()
    const usuario = data.Usuario.find(e => e.id === Number(id))
    return usuario
  }
  

  async function atualizarUsuario(usuario) {
    const response = await fetch(`http://localhost:3000/Usuario/${usuario.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    })
    if (!response.ok) {
      throw new Error('Não foi possível atualizar o usuário.')
    }
  }

export const clientService = {
    perfilUsuario,
    criarUsuario,
    logarUsuario,
    lerUsuario,
    atualizarUsuario
}