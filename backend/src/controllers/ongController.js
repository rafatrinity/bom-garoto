const generateUniqueId = require("../utils/generateUnicId")
const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { name, email, cel, city, uf } = request.body;
    const id = generateUniqueId();
    await connection("ongs").insert({ id, name, email, cel, city, uf });
    return response.json({ id });
  },

  async selectAll(request, response){
      const ongs = await connection("ongs").select("*");
      return response.json(ongs);
  },

  async selectByName(request,response){
    const ongs = await connection("ongs").where('name', 'like', '%'+request.params.name+'%');
    return response.json(ongs);
  }

};
