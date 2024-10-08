describe('Automatização de Login na Lojinha', () => { 
  beforeEach(() => {
    cy.visit('http://165.227.93.41/lojinha-web/v2/') // Acessa a URL definida no cypress.config.js
  });

  it('Deve logar com sucesso usando credenciais válidas', () => {
    cy.visit('http://165.227.93.41/lojinha-web/v2/');
    
    // Forçando a digitação no campo de usuário
    cy.get('input#usuario')
      .should('exist')
      .type(Cypress.env('CYPRESS_USERNAME'), { force: true });
  
    // Forçando a digitação no campo de senha
    cy.get('input#senha')
      .should('exist')
      .type(Cypress.env('CYPRESS_PASSWORD'), { force: true });
  
    cy.get('button[type="submit"]').click();
    
    // Verificando a mensagem de boas vindas
    cy.contains('Boas vindas,').should('be.visible');
    
    // Espera pelo botão ou link de logout e clica nele (ajuste o seletor conforme necessário)
    cy.get('a:contains("Sair")').should('be.visible').click(); // Usa um seletor mais genérico
  });

  after(() => {
    // Fecha o navegador no Chrome
    cy.window().then(win => win.close());
  });
});


  