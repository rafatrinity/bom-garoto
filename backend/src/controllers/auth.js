const jwt = require("jsonwebtoken");
const config = require("../../auth.config.json");

module.exports = (request, response, next) => {
  const auth = request.headers.authorization;
  if (!auth) return response.status(401).json({ error: "token ausente" });
  const parts = auth.split(" ");
  if (!parts.length == 2)
    return response.status(400).json({ error: "token mal formado" });
  const [scheme, token] = parts;
  jwt.verify(token, config.secret, (error, decod) => {
    if (error) return response.status(400.9).json({ error: "token invalido" });
    request.userId = decod.id;
    return next();
  });
  
};
