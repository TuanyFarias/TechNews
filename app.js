function pesquisar() {
    let section = document.getElementById("resultados-de-pesquisa"); //Puxando os itens do arquivo HTML
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); // Convertemos para minúsculo para uma comparação mais precisa
  
    //Declaração de variáveis 
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    //Condição de campo de pesquisa vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar um conteúdo!</p>"
        return }


  
    //para cada dado dentro da lista de dados 
    for (let dado of dados) {
      // Convertemos para minúsculo para uma comparação mais precisa
      let tituloMinusculo = dado.titulo.toLowerCase();
      let descricaoMinusculo = dado.descricao.toLowerCase();
      let tagsMinusculo = dado.tags.toLocaleLowerCase(); 
      //Condição de inclusão de itens do campo de pesquisa 
      if (tituloMinusculo.includes(campoPesquisa) || descricaoMinusculo.includes(campoPesquisa) || tagsMinusculo.includes(campoPesquisa)) {
        resultados += `
          <div class="item-resultado">
            <h2> 
              <a href="${dado.link}" target="_blank">${dado.titulo} </a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
          </div>
        `;
      }
    }
    // Condição de Campo de pesquisa não correspondente aos resultado
     if (!resultados) {
    section.innerHTML = "<p>Infelizmente não encontramos nada semenlhante em nossa base</p>"
    return }    
    section.innerHTML = resultados;
  }