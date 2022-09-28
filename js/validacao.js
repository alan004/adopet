export function validaCampo(input){
    const tipoInput = input.dataset.type

    if (input.validity.valid){
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoInput, input)

    }
}

const tiposDeErro = [
    'valueMissing',
    'tipeMismatch',
    'patternMismatch',
    'customError'
]


const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio'
    },
    email: {
        valueMissing: 'O campo email não pode estar vazio',
        patternMismatch: 'O email digitado não é válido'
    },
    senha: {
        valueMissing: 'O campo senha não pode estar vazio',
        patternMismatch: 'A senha deve conter 8 a 12 caracteres, um dígito e uma letra maiúscula.'
    },
    telefone: {
        valueMissing: 'O campo telefone não pode estar vazio',
        patternMismatch: 'Digite um telefone válido'
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })

    return mensagem
}