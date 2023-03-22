// import { usuarios } from "../../app.js"
// import { Usuario } from "./usuario.js"
// export function criarUsuario (nome, email, senha){
//     nome = document.getElementById('nome').value
//     email = document.getElementById('email').value
//     senha = document.getElementById('senha').value
//     const newUser = new Usuario(nome, email, senha)
//     usuarios.push(newUser)
//     localStorage.setItem("usuarios", JSON.stringify(usuarios))   
//     //alert("Usuario cadastrado!") 
//     window.location.href = "../../login.html"
//   }

import { clientService } from "../../controllerLogin.js";

const formulario = document.querySelector('[data-formCadastro]')

formulario.addEventListener('submit', async (e)=> {
  e.preventDefault()
  const nome = e.target.querySelector("[data-type='nome']").value
  const email = e.target.querySelector("[data-type='email']").value
  const senha = e.target.querySelector("[data-type='senha']").value
  try{
    await clientService.criarUsuario(nome, email, senha)
    window.location.href = "../../login.html"

  }
  catch(erro){
    console.log(erro)
  }
})
