(function () {
  'use strict';

  angular.module('ucsalApp').factory('NoticiasService', NoticiasService);

  function NoticiasService() {
    var publications = [
      {
        id: 1,
        category: 'Notícia',
        title: 'Prazo de rematrícula 2026.2',
        date: '12 de novembro de 2026',
        image: 'img/news-rematricula.svg',
        summary: 'Confira o período de rematrícula e organize sua próxima etapa acadêmica.',
        content: 'A UCSal informa que o período de rematrícula para 2026.2 está aberto. Consulte o calendário acadêmico, revise suas disciplinas e finalize a solicitação dentro do prazo divulgado pela instituição.'
      },
      {
        id: 2,
        category: 'Notícia',
        title: 'Edital de iniciação científica',
        date: '08 de novembro de 2026',
        image: 'img/news-editais.svg',
        summary: 'Oportunidade para estudantes participarem de projetos de pesquisa.',
        content: 'O novo edital de iniciação científica reúne projetos de diferentes áreas do conhecimento. Os estudantes interessados devem consultar os requisitos e conversar com um professor orientador.'
      },
      {
        id: 3,
        category: 'Evento',
        title: 'Semoc: tecnologia e impacto social',
        date: '20 de novembro de 2026',
        image: 'img/event-semock.svg',
        summary: 'Uma programação com palestras, oficinas e encontros nos campi.',
        content: 'A Semana de Mobilização Científica contará com trilhas sobre inovação, tecnologia e impacto social. A programação terá atividades no campus Pituaçu e transmissão de encontros selecionados.'
      },
      {
        id: 4,
        category: 'Evento',
        title: 'Maratona de programação UCSal',
        date: '28 de novembro de 2026',
        image: 'img/event-extensao.svg',
        summary: 'Inscrições abertas para uma experiência prática de colaboração.',
        content: 'A maratona de programação é uma atividade prática para desenvolver raciocínio lógico, colaboração e criatividade. Forme sua equipe e acompanhe as regras de participação.'
      }
    ];

    return {
      all: function () { return publications; },
      byId: function (id) {
        return publications.find(function (item) { return String(item.id) === String(id); });
      }
    };
  }
}());
