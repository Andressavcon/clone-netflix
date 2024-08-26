# Projeto: Clone Netflix 🎬

**Atividade 06, Módulo 04 +praTi**
[Link aplicação - Clone Netflix](https://clonenetlix.netlify.app/)

### Objetivo 🎯

Desenvolver uma interface de usuário simplificada que emula a aparência da Netflix, utilizando React para a construção do front-end e a API do TMDB para a recuperação de dados de filmes e séries.

### Descrição da Atividade 📝

Nesta atividade, o desafio foi criar um clone do front-end da Netflix. Replicando a interface que permita aos usuários navegar por filmes e séries, visualizando detalhes e categorias, semelhante à experiência oferecida pela Netflix.

### Requisitos Funcionais ✅

- [x] **Página Inicial:** Exibir múltiplas seções categorizadas (como 'Mais Votados', 'Ação', 'Comédias', etc.), cada uma contendo uma lista horizontal de cartões de filmes ou séries.
- [x] **Barra de Navegação:** Incluir uma barra de navegação superior com o logo da Netflix (ou uma versão simplificada) e um campo de pesquisa.
- [x] **Detalhes do Filme/Série:** Ao clicar em um filme ou série, o usuário deve ser direcionado a uma nova página ou modal que mostra detalhes como sinopse, avaliação, data de lançamento e elenco.

### Instruções para Executar o Projeto 🚀

1. **Clone o repositório SSH:**

   ```bash
   git clone git@github.com:Andressavcon/clone-netflix.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd clone-netflix
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API do TMDB:**

   ```bash
   REACT_APP_TMDB_API_KEY=<sua-chave-de-api>
   ```

5. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

6. **Abra o navegador e acesse `http://localhost:5173` para visualizar a aplicação.**

### Tecnologias Utilizadas 🛠️

- [x] React para construção da interface.
- [x] React Router para roteamento.
- [x] TMDB API para recuperação de dados sobre filmes e séries.
- [x] styled-components para estilização dos componentes.
