const connection = require("../database/connection");
module.exports = {
  async myProfile(request, response) {
    const user_id = request.userId;
    const incidents = await connection("incidents")
      .where("user_id", user_id)
      .select("*");
    return response.status(200).json(incidents);
  },
  async listuserIncidents(request, response) {
    const user_id = request.params.id;
    const incidents = await connection("incidents")
      .where("user_id", user_id)
      .select("*");
    return response.status(200).json(incidents);
  }
};
