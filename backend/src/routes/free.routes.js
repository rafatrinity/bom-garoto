const express = require("express");
const sessionController = require("../controllers/sessionController");
const {
  celebrate,
  Segments,
  Joi
} = require("celebrate");
const freeRoutes = express.Router();
//session
/**
 *  @swagger
 * /login:
 *      post:
 *       description: Faz o login na aplicação e retorna um token
 *       responses:
 *           '201':
 *               description: A successful response
 */
freeRoutes.post("/login", celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string()
        .required()
        .email(),
      password: Joi.string()
        .required()
        .min(6)
    })
  }),
  sessionController.auth
);

module.exports = freeRoutes;