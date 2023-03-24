import { clientService } from "../../controllerLogin.js";
const formulario =  document.querySelector('[data-formLogin]')
formulario.addEventListener('submit', async (e)=>{
e.preventDefault()
const email = e.target.querySelector("[data-type='email']").value
const senha = e.target.querySelector("[data-type='senha']").value
try{
    const resultadoUsuarios = clientService.logarUsuario()
    await resultadoUsuarios.then((dados)=>{
        for (let index = 0; index < dados.length; index++) {
            if (dados[index].email == email && dados[index].senha == senha) {
                alert("Usuário encontrado!")
                let id = dados[index].id
                window.location.href = "../../perfil.html?id=" + id 
                break
            }
            else if (dados[index].email == email && dados[index].senha != senha) {
                alert("Senha digitada está errada")
                break
            }
            else if (index == (dados.length)-1) {
                alert("Usuario não encontrado")
            }
        }
    })
}
catch (erro){
    console.log(erro)
}
})