const express = require("express");
const ongController = require("./controllers/ongController");
const incidentController = require("./controllers/incidentController");
const profileController = require("./controllers/profileController");
const sessionController = require("./controllers/sessionController");
const {
    celebrate,
    Segments,
    Joi
} = require("celebrate");
const routes = express.Router();

//ongs
routes.get("/ongs", ongController.selectAll);
routes.get("/ongs/:name", ongController.selectByName);
routes.post("/ongs", celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        cel: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), ongController.create);

//incidents
routes.get("/incidents", celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
        limit: Joi.number()
    })
}), incidentController.selectAll);
routes.post("/incidents", incidentController.create);
routes.delete("/incidents/:id", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidentController.delete);

//profile
routes.get("/profile", celebrate({
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required()
    }).unknown()
}) , profileController.listOngIncidents);

//session
routes.post("/login", celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required().length(8)
    })
}), sessionController.create);

module.exports = routes;