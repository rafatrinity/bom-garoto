const express = require("express");
const sessionController = require("../controllers/sessionController");
const { celebrate, Segments, Joi } = require("celebrate");
const freeRoutes = express.Router();
//session
freeRoutes.post("/login",celebrate({
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
