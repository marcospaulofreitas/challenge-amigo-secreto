# Amigo Secreto

Este projeto simula um sorteio de amigo secreto, onde você pode adicionar nomes à lista de amigos e, ao clicar no botão, realizar o sorteio aleatório de um amigo para presenteá-lo. A lista de amigos é exibida dinamicamente, e o sorteio pode ser feito quando houver pelo menos 2 nomes.

## Funcionalidades

- **Adicionar Amigos**: Você pode adicionar os nomes dos seus amigos a uma lista.
- **Sorteio Aleatório**: Realiza o sorteio de um amigo secreto aleatoriamente.
- **Exibição da Lista**: A lista de amigos é atualizada dinamicamente a cada nome inserido.
- **Validação**: A função de sorteio só é habilitada quando houver pelo menos dois nomes na lista.

## Como Usar

### 1. Adicionar Amigos
   - Digite o nome de um amigo no campo de entrada.
   - Clique no botão "Adicionar" para incluir o nome na lista.
   
### 2. Sorteio
   - Após adicionar pelo menos dois nomes, clique no botão "Sortear amigo" para realizar o sorteio.
   - O nome do amigo sorteado será exibido na tela e também no console para teste.

## Estrutura do Código

### HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Amigo Secreto</title>
</head>
<body>
    <main class="main-content">
        <header class="header-banner">
            <h1 class="main-title">Amigo Secreto</h1>
        </header>

        <section class="input-section">
            <h2 class="section-title">Digite o nome dos seus amigos</h2>
            <div class="input-wrapper">
                <input type="text" id="amigo" class="input-name" placeholder="Digite um nome">
                <button class="button-add" onclick="adicionarAmigo()">Adicionar</button>
            </div>
           
            <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>

            <div class="button-container">
                <button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
                    Sortear amigo
                </button>
            </div>
        </section>
    </main>
    <script src="app.js" defer></script>
</body>
</html>



---

Esse `README.md` utiliza Markdown para a formatação, mas também inclui blocos de código HTML e JavaScript com a sintaxe adequada. Se você precisar de algo mais específico ou de mais detalhes, posso te ajudar!
