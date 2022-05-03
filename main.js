const links = {
    facebook : 'lucasdesouzax',
    github : 'lucasdesouzax'
   }
   function substituindoLinks(){
    document.getElementById("nomeDeUsuario").textContent = 'Jhon Doe'
    for(let li of linksSociais.children){
     li.children[0].href=`https://www.facebook.com/${links.facebook}`
    }
    
    document.getElementById("iconeGit").children[1].href=`https://github.com/${links.github}`
    
    /*Elementos do ID iconeGit e suas respectivas posições, ainda não sei pegar o tipo class, o getElementByClass nao funfa
    alert(document.getElementById("iconeGit").children[0])
    alert(document.getElementById("iconeGit").children[1])*/
   }
   substituindoLinks()
   function pegandoApiGitHub(){
       const url = `https://api.github.com/users/${links.github}`
       fetch(url) //o comando fetch vai até a url especificada (nesse caso a api)e pega o arquivo json da api 
       .then(argumento => argumento.json())
       .then(dadosGit => {
        biografia.textContent = dadosGit.bio
        nomeDeUsuario.textContent = dadosGit.name
        gitLink.href = dadosGit.html_url
        nomeLinkGit.textContent = dadosGit.login
        //minhaFoto.src = dadosGit.avatar_url 
        /*ATENÇÃO ^^^^^[a foto do git nao ta no formato correto por isso comentei essa parte do código (linha de cima desse comentário), mas está completamente funcional]*/
       })
       
   }
    pegandoApiGitHub()
    
    /*o comando fetch vai até a url especificada e pega o arquivo json da api o fetch não sabe que o arquivo é um json, ele pega o arquivo da URL

promisse é um recurso do JS para pegar respostas de alguma coisa, usamos o comando .then (responde =>{})*/ 