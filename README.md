# Adopet

Projeto feito para o challenge front-end, todo o código foi criado do zero. Sem dúvida a parte mais desafiadora foi o Javascript, que consegui desenvolver bem nesse projeto. Deixo os detalhe mais abaixo.
> Para conseguir logar e utilizar demais páginas, siga as instruções em [Como rodar o projeto](#como-rodar-o-projeto)

>Caso queira apenas dar uma olhada, utilize a página [Adopet no Github Pages](https://alan004.github.io/adopet/index.html) e verifique as demais páginas em [Telas do projeto](#telas-e-responsividade)

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Adopet**
| :label: Tecnologias | html, css, javascript
| :rocket: URL         | https://alan004.github.io/adopet/index.html
| :fire: Desafio     | https://www.alura.com.br/challenges/front-end-4/semana-01-criando-site-mobile-first

<!-- Inserir imagem com a #vitrinedev ao final do link -->
![AdopetcAPA](https://user-images.githubusercontent.com/17684918/209195984-a3c4e20b-4f3a-4778-b5b4-3e17556a0480.png#vitrinedev)

## Detalhes do projeto

> Status do Projeto: Finalizado  🫡  

A estrutura do projeto é feita em HTML e CSS. Utilo o Javascript para validação de fomulários e manutenção de usuários usando o JSON SERVER. Foi bem legal criar esse projeto e sem dúvida aprendi bastante sobre CSS e CRUD, as duas coisas que me tomaram mais tempo.

### Telas e responsividade
>Em breve

## Como rodar o projeto
Depois de clonar o repositório, instale o JSON server usando \
`npm install json-server`
E o browser-sync usando \
`npm install -g browser-sync`

Após isso, é possível rodar nosso db.json e dbMensagens.json pelo JSON server\
`json-server --watch db.json` \
`json-server --watch dbMensagens.json --port 3005`

E então rodar o projeto utilizando o Browsersync:\
`browser-sync start --server --file . --host --port 5000 --startPath index.html`
