const express = require("express")
const routes = express.Router();

routes.get('/users/:id',(request, response) => {
    const params = request.query;
    id = request.params;
    console.log(params, id);
    
    return response.send("hello world");
})

module.exports = routes;