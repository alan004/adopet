import {validaCampo} from "./js/validacao.js";
import { clientService } from "./controllerLogin.js";

//valida formulario
const inputs= document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        validaCampo(evento.target)
    })
})




//Gerencia tempo de sessão
//recupera id do cookie
const cookies = document.cookie.split(';')
const idCookie = cookies.find(cookie => cookie.trim().startsWith('id='))
const id = idCookie ? idCookie.split('=')[1] : null
//atualiza ID do usuário em todas as páginas:
if (id) {
    history.replaceState({id: id}, document.title, window.location.href.split('?')[0] + '?id=' + id)
  }
