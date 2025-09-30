function criarCartao(categoria, pergunta, resposta) {
   let contener = document.getElementById('container')
   let cartao = document.createElement('article')
   let respostaEstaVisivel = false
   function viraCartao(){
              respostaEstaVisivel = !respostaEstaViosivel
   }
   let respostaEstaViosivel = true 
   cartao.className = 'cartao'
   cartao.innerHTML = `
     <div class="cartao_conteudo">
          <h3>Tudo sobre Dog</h3>
          <div class="cartao_conteudo_perguntas">
            Quais perguntas devo fazer ao veterinário na primeira consulta?
          </div>
          <div class="cartao_conteudo_respostas">
            Na primeira consulta veterinária, pergunte sobre a saúde geral do seu animal, o calendário de vacinação e
            desparasitação, o protocolo de prevenção de pulgas e carrapatos, e a melhor dieta para o pet.
          </div>
        </div>
      `
        ContainerRule.appendChild(cartao)
        
        
}