const express = require("express");
const ongController = require("./controllers/ongController");
const incidentController = require("./controllers/incidentController");
const profileController = require("./controllers/profileController");
const sessionController = require("./controllers/sessionController");
const routes = express.Router();
//ongs
routes.get("/ongs", ongController.selectAll);
routes.get("/ongs/:name", ongController.selectByName);
routes.post("/ongs", ongController.create);
//incidents
routes.get("/incidents", incidentController.selectAll);
routes.post("/incidents", incidentController.create);
routes.delete("/incidents/:id", incidentController.delete);
//profile
routes.get("/profile", profileController.listOngIncidents);
//session
routes.post("/login", sessionController.create);

module.exports = routes;
