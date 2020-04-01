const resquest = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");
describe("user", () => {
  beforeAll(async () => {
   // await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.destroy();
  });
  it("cria um user", async () => {
    const response = await resquest(app)
      .post("/users")
      .send({
        name: "user de gato",
        email: "gato@user.com",
        password: "123456",
        cel: "21982456789",
        city: "Rio de Janeiro",
        uf: "RJ"
      });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
  it("busca users pelo nome", async () => {
    const response = await resquest(app).get("/users/gat");
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty("name");
      expect(response.body[0]).toHaveProperty("email");
      expect(response.body[0]).toHaveProperty("cel");
      expect(response.body[0]).toHaveProperty("city");
      expect(response.body[0]).toHaveProperty("uf");
    }
  });
  it("retorna todas as users", async () => {
    const response = await resquest(app).get("/users");
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty("id");
      expect(response.body[0]).toHaveProperty("name");
      expect(response.body[0]).toHaveProperty("email");
      expect(response.body[0]).toHaveProperty("cel");
      expect(response.body[0]).toHaveProperty("city");
      expect(response.body[0]).toHaveProperty("uf");
    }
  });
});
