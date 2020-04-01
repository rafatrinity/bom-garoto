const connection = require("../database/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../auth.config.json");
module.exports = {
  async auth(require, response) {
    const { email, password } = require.body;
    const user = await connection("users")
      .where("email", email)
      .select("*")
      .first();

    if (!user)
      return response.status(401).json({ error: "o usuario não existe" });
    if (!(await bcrypt.compare(password, user.password)))
      return response.status(401.1).json({ error: "senha incorreta" });
    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400
    });
    user.password = undefined;
    return response.status(202).send({ user, token });
  }
};
