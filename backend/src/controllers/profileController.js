const connection = require("../database/connection");
module.exports = {
  async listuserIncidents(require, response) {
    const user_id = require.headers.from
    
    const incidents = await connection("incidents")
      .where("user_id", user_id)
      .select("*");
    return response.status(200).json(incidents);
  }
};
