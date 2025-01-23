let amigos = [];

function limparCampoDeEntrada() {
  nomeDigitado = document.querySelector("input");
  nomeDigitado.value = ""; // limpa o campo
}

function adicionarAmigo() {
  let nomeDigitado = document.querySelector("input").value.trim(); // Remove espaços no início e fim
  if (nomeDigitado !== "") {
    amigos.push(nomeDigitado); // Adiciona o nome ao array
    atualizarListaDeAmigos();
    limparCampoDeEntrada();
  } else {
    alert("Por favor, insira um nome."); // Exibe o alerta se o campo estiver vazio
  }
}

function atualizarListaDeAmigos() {
  // obtem o elemento da lista onde os amigos serão exibidos
  let lista = document.getElementById("listaAmigos");

  // Limpa a lista existente para evitar duplicados
  lista.innerHTML = "";

  // Percorrer o array amigos e adicionar elementos à lista
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li"); // Criar um novo elemento <li>
    li.textContent = amigos[i]; // Definir o texto do <li> com o nome do amigo
    lista.appendChild(li); // Adicionar o <li> à lista <ul>
  }
}

function sortearAmigo() {
  if (amigos.length > 1) {
      let indiceAleatorio;
      indiceAleatorio = Math.floor(Math.random() * amigos.length);
      exibirSorteado (indiceAleatorio);
  } else {
      alert("Por favor, insira pelo menos 2 nomes antes de sortear."); // Informa caso tente realizar o sorteio com 0 ou 1 pessoa
  }
}

function exibirSorteado (indice) {
      // Seleciona o amigo correspondente ao índice aleatório
      let amigoSorteado = amigos[indice];
      let campo = document.getElementById('resultado');  
      campo.innerHTML = amigoSorteado;
}
