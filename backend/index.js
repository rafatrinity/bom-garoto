const express = require("express")
const app = express();
app.use(express.json());

app.get('/users/:id',(request, response) => {
    const params = request.query;
    id = request.params;
    console.log(params, id);
    
    return response.send("hello world");
})

app.listen(3333);