const express = require("express");
const ongController = require("./controllers/ongController")
const routes = express.Router();

routes.get("/ongs", ongController.selectAll );
routes.get("/ongs:name", ongController.selectByName );
routes.post("/ongs", ongController.create );

module.exports = routes;
