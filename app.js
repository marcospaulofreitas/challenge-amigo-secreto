let amigos = [];

function limparCampoDeEntrada() {
      nomeDigitado = document.querySelector('input');
      nomeDigitado.value = '';
  }

function adicionarAmigo() {
      
      let nomeDigitado = document.querySelector('input').value.trim(); // Remove espaços no início e fim
      if (nomeDigitado !== "") {
          amigos.push(nomeDigitado); // Adiciona o nome ao array
          limparCampoDeEntrada();
          
          console.log(nomeDigitado); // Mostra o nome no console
      } else {
          alert("Por favor, insira um nome."); // Exibe o alerta se o campo estiver vazio
      }
  }

 

