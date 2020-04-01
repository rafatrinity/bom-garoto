const generateUniqueId = require("../utils/generateUnicId");
const connection = require("../database/connection");
const bcrypt = require("bcryptjs");
module.exports = {
  async create(request, response) {
    let { name, email, password, cel, city, uf } = request.body;
    const id = generateUniqueId();
    const user = connection("users")
      .where("email", email)
      .select("*");
    
    if (user.id != undefined) {
      return response
        .status(401.1)
        .json({ error: "email/usuário já cadastrado" });
    }
    
    password = await bcrypt.hash(password, 10);
    await connection("users").insert({
      id,
      name,
      email,
      password,
      cel,
      city,
      uf
    });
    return response.status(201).json({ id });
  },

  async selectAll(request, response) {
    const users = await connection("users").select("*");
    return response.status(200).json(users);
  },

  async selectByName(request, response) {
    const users = await connection("users").where(
      "name",
      "like",
      "%" + request.params.name + "%"
    );
    return response.status(200).json(users);
  }
};
