# Automação Lojinha

Este projeto tem como objetivo automatizar o teste de login na aplicação "Lojinha" utilizando o framework de testes Cypress. A automação foi implementada para garantir que o processo de login funcione conforme o esperado e para verificar a presença de elementos na interface do usuário.

## Pré-requisitos

Antes de começar, verifique se você possui os seguintes pré-requisitos instalados em sua máquina:

-   **Node.js**: [Baixe e instale o Node.js](https://nodejs.org/) 

Para instalar as dependências do Cypress, execute o seguinte comando no terminal:

`npm install` 

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

-   **Node.js**: Uma plataforma para execução de código JavaScript no lado do servidor.
-   **Visual Studio Code** [Baixar Visual Studio Code](https://code.visualstudio.com/Download)  (Nesse site, você encontrará versões para diferentes sistemas operacionais (Windows, macOS e Linux)): Um editor de código-fonte amplamente utilizado para o desenvolvimento de software.
- **[Cypress](https://www.cypress.io/)**: Uma ferramenta poderosa para testes end-to-end, que permite a automação de testes para aplicações web.

## Testes Automatizados de Login na Lojinha

Este repositório contém testes automatizados utilizando [Cypress](https://www.cypress.io/) para a funcionalidade de login na aplicação Lojinha. O objetivo é validar o comportamento do sistema ao tentar realizar login com credenciais válidas e inválidas.

Esses testes têm como objetivo garantir que a funcionalidade de login da aplicação "Lojinha" funcione conforme o esperado. Abaixo estão os casos de teste que foram automatizados:

1.  **Teste de Login com Credenciais Válidas**: Verifica se um usuário consegue logar com sucesso utilizando credenciais válidas. Ao fornecer as informações corretas, o sistema deve exibir uma mensagem de boas-vindas.
    
2.  **Teste de Login com Credenciais Inválidas**: Garante que, ao tentar logar com um nome de usuário ou senha inválidos, o usuário receba uma mensagem de erro informando que a tentativa de login falhou.
    
3.  **Teste de Presença de Campos de Login**: Confirma que os campos de entrada para usuário e senha estão presentes na página de login, assegurando que a interface do usuário seja intuitiva.
    
4.  **Teste de Logout**: Verifica se o usuário pode sair corretamente da conta após o login. Após clicar no botão de logout, o sistema deve retornar à página de login.
    
5.  **Teste de Fechamento do Navegador**: Assegura que o navegador é fechado corretamente após a execução dos testes. O código inclui um comando para fechar o navegador após a execução:

`after(() => {
    // Fecha o navegador
    cy.window().then(win => win.close());`    

Esses testes automatizados não apenas ajudam a verificar a funcionalidade de login, mas também garantem que a interface do usuário seja acessível e funcione corretamente. A automação desses testes permite uma execução mais rápida e eficiente, facilitando a detecção de regressões e problemas na aplicação.

## Explicação do Código

**package.json**: Contém informações sobre o projeto e suas dependências.

**cypress.config.js**: Configurações do Cypress, incluindo a URL base e variáveis de ambiente.

**.env**: Arquivo para variáveis de ambiente, que contém informações sensíveis como nome de usuário e senha.

**git ignore**: Certifique-se de incluir no seu arquivo `.gitignore` os seguintes arquivos, que contêm informações sensíveis:
.cypress.config.js
.env

**lojinha.cy.js**: O arquivo `lojinha.cy.js` contém os testes automatizados para a funcionalidade de login. Abaixo estão os principais comandos utilizados e suas descrições:

-   **`cy.visit()`**: Navega até a página de login do site. Este comando é essencial para iniciar o teste na URL especificada.
    
-   **`cy.get()`**: Busca o elemento pelo seletor CSS fornecido, como os campos de usuário e senha. Este comando é usado para localizar e interagir com os elementos da página.
    
-   **`cy.type()`**: Simula a digitação no campo, preenchendo os campos de entrada com as credenciais de login. Este comando utiliza variáveis de ambiente para inserir informações sensíveis.
    
-   **`cy.click()`**: Clica no botão de login após preencher os campos necessários. Este comando inicia o processo de autenticação.
    
-   **`cy.contains()`**: Valida se um texto específico está presente na página após o login. Isso é usado para verificar se a mensagem de boas-vindas aparece corretamente.
    
-   **`cy.url()`**: (caso você a utilize em outros testes) Verifica se o redirecionamento foi para a URL esperada (por exemplo, um dashboard ou página principal após o login bem-sucedido).
    
Esses comandos são fundamentais para garantir que a automação do login funcione conforme o esperado, permitindo testes rápidos e eficientes da interface do usuário. 

## Executando os Testes

### Modo Headed

No modo **headed**, os testes são executados com o navegador visível, permitindo observar a execução da aplicação. Use o seguinte comando para rodar testes:

```
npx cypress run --spec cypress/e2e/lojinha.cy.js --headed --browser chrome
```

### Modo Headless

No modo **headless**, os testes são executados sem a interface gráfica, acelerando a execução. Utilize:

```
npx cypress run
```

### Abrindo a Interface do Cypress

Para abrir a interface gráfica do Cypress, use:

```
npx cypress open
```
## Contribuições

Se você deseja contribuir para o projeto, fique à vontade para abrir uma issue ou enviar um pull request.
