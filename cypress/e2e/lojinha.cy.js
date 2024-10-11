describe('Automatização de Login na Lojinha', () => { 
  beforeEach(() => {
    cy.visit('http://165.227.93.41/lojinha-web/v2/') // Acessa a URL definida no cypress.config.js
  });

  it('Deve logar com sucesso usando credenciais válidas', () => {
    cy.get('input#usuario')
      .should('exist')
      .type(Cypress.env('CYPRESS_USERNAME'), { force: true });

    cy.get('input#senha')
      .should('exist')
      .type(Cypress.env('CYPRESS_PASSWORD'), { force: true });

    cy.get('button[type="submit"]').click();

    // Verificando a mensagem de boas-vindas
    cy.contains('Boas vindas,').should('be.visible');

    // Espera pelo botão de logout e clica nele
    cy.get('a:contains("Sair")').should('be.visible').click(); 
  });

  it('Não deve logar com credenciais inválidas', () => {
    // Fornecendo um nome de usuário inválido
    cy.get('input#usuario')
      .should('exist')
      .type('usuario_invalido', { force: true });

    // Fornecendo uma senha inválida
    cy.get('input#senha')
      .should('exist')
      .type('senha_invalida', { force: true });

    cy.get('button[type="submit"]').click();

    // Verificando a exibição da mensagem de erro
    cy.contains('Falha ao fazer o login', { timeout: 10000 }).should('be.visible');
  });

  after(() => {
    // Fecha o navegador
    cy.window().then(win => win.close());
  });
});



  