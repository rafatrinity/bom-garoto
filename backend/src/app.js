const express = require("express");
const app = express();
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes/restrict.routes");
const freeRoutes = require("./routes/free.routes");
const swaggerJs = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Bom garoto 🐾',
            description: 'O Bom garoto 🐾 é um projeto que visa a integração de clinicas veterinárias com ONGs e doadores. esse projeto faz parte da semana OmniStack, da rocketseat e com o apoio e incentivo do professor Antonio Podgorski da UniCarioca, que propôs esse projeto como APS (atividade prática supervisionada).',
            contact: {
                name: 'Rafael Trindade'
            },
            servers: ['http://localhost:3333/']
        }
    },
    apis: ['app.js']
}
const swaggerDocs = swaggerJs(swaggerOptions);
app.use(express.json());
app.use(freeRoutes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routes);
app.use(errors());
module.exports = app;