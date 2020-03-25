const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { name, email, cel, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString("HEX");
    await connection("ongs").insert({ id, name, email, cel, city, uf });
    return response.json({ id });
  },

  async selectAll(request, response){
      const ongs = await connection("ongs").select("*");
      return response.json(ongs);
  },

  async selectByName(request,response){
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  }
  
};
