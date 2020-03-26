const connection = require("../database/connection");
module.exports = {
  async listOngIncidents(require, response) {
    const ong_id = require.headers.authorization
    console.log(ong_id);
    
    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");
    return response.status(200).json(incidents);
  }
};
