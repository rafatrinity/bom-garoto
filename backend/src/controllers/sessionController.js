const connection = require("../database/connection");
const bcrypt = require("bcryptjs");
module.exports = {
  async auth(require, response) {
    const { email, password } = require.body;
    const user = connection("users")
      .where("email", email)
      .select("*");
    if (!user)
      return response.status(400).json({ error: "o usuario não existe" });
    if (!(await bcrypt.compare(password, user.password)))
      return response.status(400).json({ error: "senha incorreta" });
  },

  async create(request, response) {
    const { id } = request.body;
    const user = await connection("users")
      .where("id", id)
      .select("name")
      .first();
    if (!user) {
      response.status(400).json({ error: "Esta user não existe" });
    } else {
      response.status(200).json(user);
    }
  }
};
