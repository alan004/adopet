const enviarMensagem = (nome, telefone, animal, mensagem) => {
    return fetch(`http://localhost:3005/Mensagens`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            telefone: telefone,
            animal: animal,
            mensagem: mensagem
        })
    })
        .then(e => {
            if (e.ok) {
                return e.body
            }
            throw new Error('Nao foi possível enviar a mensagem')
        }
        )
}

export const mensagemService = {
    enviarMensagem
}