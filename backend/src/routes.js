const express = require("express");
const userController = require("./controllers/userController");
const incidentController = require("./controllers/incidentController");
const profileController = require("./controllers/profileController");
const sessionController = require("./controllers/sessionController");
const auth = require("./controllers/auth");
const {
    celebrate,
    Segments,
    Joi
} = require("celebrate");
const routes = express.Router();
const core = express.Router();
routes.use(auth);

//users
routes.get("/users", userController.selectAll);
routes.get("/users/:name", userController.selectByName);
routes.post("/users", celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6),
        cel: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), userController.create);

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
}) , profileController.listuserIncidents);

//session
routes.post("/login", celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6),
    })
}), sessionController.auth);

module.exports = routes;