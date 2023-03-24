import { clientService } from "../../controllerLogin.js";

const pegaUrl = new URL(window.location)
const id = pegaUrl.searchParams.get('id')
const formulario = document.querySelector('[data-formPerfil]')

formulario.addEventListener('submit', async (e)=>{
    e.preventDefault()
    try{
        const inputNome = document.querySelector("[data-type='nome']")
        const inputTelefone = document.querySelector("[data-type='telefone']")
        const inputCidade = document.querySelector("[data-type='cidade']")
        const inputSobre = document.querySelector("[data-type='sobre']")
        await clientService.atualizarUsuario(id, inputNome.value, inputTelefone.value, inputCidade.value, inputSobre.value)
        window.location.reload()
    }
    catch(erro){
        console.log(erro)
    }
})