function criarCartao(categoria, pergunta, resposta) {
   let contener = document.getElementById('container')
   let cartao = document.createElement('article')
   cartao.className = 'cartao'

    cartao.innerHTML = `
     <div class="cartao_conteudo">
          <h3>${categoria}</h3>
          <div class="cartao_conteudo_perguntas">
            <p>${pergunta}</p>
          </div>
          <div class="cartao_conteudo_respostas">
           <p>${resposta}</p>
          </div>
        </div>
      `
        ContainerRule.appendChild(cartao)
        

 let respostaEstaVisivel = false
   function viraCartao() {
     respostaEstaVisivel = !respostaEstaViosivel
     cartao.classeList.toggle('ative', respostaEstaViosivel)
 }
 cartao.addEventlistener('click', viraCartao)  

  }