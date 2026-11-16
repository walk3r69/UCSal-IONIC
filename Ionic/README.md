# Portal do Aluno UCSal - Ionic e AngularJS

Protótipo funcional de front-end para a Atividade 4, desenvolvido com Ionic Framework 1 e AngularJS. O visual usa o logo e a organização visual do portal acadêmico da UCSal: faixa institucional, barra azul-marinho, menu lateral, mural, atualização cadastral e consulta financeira. O projeto é responsivo para desktop, tablet e celular.

## Como iniciar no GitHub Codespaces

No terminal, a partir desta pasta:

```bash
npm start
```

Depois abra a aba **PORTS**, localize a porta **5500** e clique em **Open in Browser**.

## Acesso de demonstração

- Matrícula: `200029941`
- Senha: `123456`

## Arquitetura

- `www/index.html`: entrada do Ionic e carregamento do AngularJS.
- `www/lib/ionic/`: distribuição local do Ionic 1.3.5 usada pelo protótipo, para o projeto funcionar sem depender de CDN.
- `www/js/app.js`: módulo `ucsalApp`, rotas com `$stateProvider` e proteção de sessão.
- `www/js/services/`: dados mockados isolados em `AuthService`, `NoticiasService`, `AlunoService`, `FinanceiroService` e `FeedbackService`.
- `www/js/controllers/`: controllers de login, menu, mural, detalhes, perfil e financeiro.
- `www/templates/`: views do login, menu institucional, mural, detalhe, perfil e financeiro.
- `www/css/style.css`: identidade visual UCSal, cards do mural, formulário e breakpoints responsivos.
