const resquest = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");
describe("ONG", () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.destroy();
  });
  it("cria uma ong", async () => {
    const response = await resquest(app)
      .post("/ongs")
      .send({
        name: "ong de gato",
        email: "gato@ong.com",
        cel: "21982456789",
        city: "Rio de Janeiro",
        uf: "RJ"
      });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
  it("busca uma ong pelo nome", async () => {
    const response = await resquest(app).get("/ongs/gat");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("email")
    expect(response.body[0]).toHaveProperty("cel")
    expect(response.body[0]).toHaveProperty("city")
    expect(response.body[0]).toHaveProperty("uf")
  });
});
