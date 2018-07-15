const express = require('express');
const stencil = require('@stencil/core/server');

const app = express();

const { wwwDir, logger } = stencil.initApp({
  app: app,
  configPath: __dirname
});

app.use(express.static(wwwDir));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => logger.info(`server-side rendering listening on port: ${ PORT }`));

/**
 * For future usage of cookies; we will use security settings as defined here
 * https://expressjs.com/en/advanced/best-practice-security.html
 */
