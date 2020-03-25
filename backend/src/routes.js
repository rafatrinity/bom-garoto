const express = require("express");
const ongController = require("./controllers/ongController");
const incidentController = require("./controllers/incidentController");
const routes = express.Router();
//ongs
routes.get("/ongs", ongController.selectAll);
routes.get("/ongs/:name", ongController.selectByName);
routes.post("/ongs", ongController.create);
//incidents
routes.get("/incidents", incidentController.selectAll);
routes.post("/incidents", incidentController.create);
routes.delete("/incidents/:id", incidentController.delete);
module.exports = routes;
