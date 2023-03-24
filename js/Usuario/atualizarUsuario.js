import { clientService } from "../../controllerLogin.js"
const formulario = document.querySelector('[data-formPerfil]') 

const pegaUrl = new URL(window.location)
const id = pegaUrl.searchParams.get('id')

formulario.addEventListener('submit', async (e) => {
  e.preventDefault()
  const inputNome = document.querySelector('[data-type="nome"]').value
  const inputTelefone = document.querySelector('[data-type="telefone"]').value
  const inputCidade = document.querySelector('[data-type="cidade"]').value
  const inputSobre = document.querySelector('[data-type="sobre"]').value

  const usuario = await clientService.lerUsuario(id)

  const camposAtualizados = {
    nome: inputNome,
    telefone: inputTelefone,
    cidade: inputCidade,
    sobre: inputSobre,
  }

  const usuarioAtualizado = Object.assign({}, usuario, camposAtualizados)
  await clientService.atualizarUsuario(usuarioAtualizado)
  window.location.reload()
})