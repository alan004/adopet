import { usuarios } from "../../app.js"
import { Usuario } from "./usuario.js"
export function criarUsuario (nome, email, senha){
    nome = document.getElementById('nome').value
    email = document.getElementById('email').value
    senha = document.getElementById('senha').value
    const newUser = new Usuario(nome, email, senha)
    usuarios.push(newUser)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))   
    alert("Usuario cadastrado!") 
    window.location.href = "../../login.html"
  }
