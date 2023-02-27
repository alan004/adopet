import {validaCampo} from "./js/validacao.js";
import { criarUsuario } from "./js/Usuario/criarUsuario.js";
import { logar } from "./js/Usuario/logar.js";

//cria array de usuarios
export const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

//define a função do submit
let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener('click', event => {
    if (window.location.pathname == '/cadastro.html'){
        criarUsuario();
    }
    else {
        logar();
    }
});


//valida formulario
const inputs= document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        validaCampo(evento.target)
    })
})
