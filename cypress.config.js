const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://165.227.93.41/lojinha-web/v2/', // Usando a URL do .env ou padrão
    env: {
      CYPRESS_USERNAME: 'admin',  // Adicione esta linha
      CYPRESS_PASSWORD: 'admin',   // Adicione esta linha
    },
    setupNodeEvents(on, config) {
      // Implementar eventos aqui, se necessário
    },
    chromeWebSecurity: false, // Adicione essa linha se necessário
  },
});