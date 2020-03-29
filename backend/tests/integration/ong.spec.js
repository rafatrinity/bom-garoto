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
  it("busca ongs pelo nome", async () => {
    const response = await resquest(app).get("/ongs/gat");
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty("name");
      expect(response.body[0]).toHaveProperty("email");
      expect(response.body[0]).toHaveProperty("cel");
      expect(response.body[0]).toHaveProperty("city");
      expect(response.body[0]).toHaveProperty("uf");
    }
  });
  it("retorna todas as ongs", async () => {
    const response = await resquest(app).get("/ongs");
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty("name");
      expect(response.body[0]).toHaveProperty("email");
      expect(response.body[0]).toHaveProperty("cel");
      expect(response.body[0]).toHaveProperty("city");
      expect(response.body[0]).toHaveProperty("uf");
    }
  });
});
