# Portal do Candidato - ENEM (Projeto Completo)

Este repositório contém o sistema completo do **Portal do Candidato do ENEM**, desenvolvido para a disciplina de Versionamento do curso de Desenvolvimento de Sistemas (M-TEC 3 DS - Grupo A).

O sistema simula o fluxo completo de um candidato, desde a criação da conta até a escolha de cursos e confirmação de inscrição.

---

## 💻 Módulos do Sistema

1. **Tela de Login (`index.html` & `login.js`)**
   - Validação de credenciais de acesso.
   - Integração com a memória do navegador (`localStorage`) para ler os dados criados na tela de cadastro.
   - Usuário padrão para testes rápidos: `teste@email.com` / `Teste1234`.

2. **Tela de Cadastro (`cadastro.html` & `cadastro.js`)**
   - Criação de novos usuários com validações em tempo de execução:
     - O e-mail precisa conter o caractere `@`.
     - A senha precisa ter no mínimo 8 caracteres e pelo menos uma letra maiúscula.
   - Armazenamento seguro dos dados no `localStorage`.

3. **Painel Principal (`painel.html`)**
   - Hub central de navegação no formato de cards responsivos.
   - Redirecionamento dinâmico para as demais seções do portal.

4. **Verificação de Cursos (`cursos.html` & `cursos.js`)**
   - Listagem dinâmica utilizando **Arrays Bidimensionais** contendo 12 cursos divididos por suas respectivas áreas de conhecimento.
   - Filtragem automatizada em tela utilizando o método obrigatório `.filter()`.

5. **Inscrição na Prova (`inscricao.html` & `inscricao.js`)**
   - Formulário interativo com escolha de língua estrangeira, estado e cidade.
   - **Campo Condicional Dinâmico:** Ao selecionar "Sim" em atendimento especializado, um novo campo de texto é exibido manipulando as classes do DOM.
   - Feedbacks visuais customizados para erros e sucessos na cor correta (sem o uso de alertas travando a tela).

---

## 🛠️ Tecnologias e Conceitos Aplicados

- **HTML5:** Estruturação semântica de formulários, menus e tabelas.
- **CSS3:** Identidade visual unificada seguindo os padrões do ENEM (azul escuro, amarelo e fundo claro) com cabeçalho e rodapé fixos.
- **JavaScript Moderno:** Manipulação de eventos (`onchange`, `onclick`), manipulação do DOM (`classList`, `innerHTML`), persistência de dados local e manipulação de arrays.
- **Git & GitHub:** Versionamento com boas práticas e mensagens de commit descritivas.

## 🧑‍🏫 Orientação
- **Professor:** Engº Sérgio Novais