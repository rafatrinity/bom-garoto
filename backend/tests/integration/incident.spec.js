const resquest = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");
describe("incident", () => {
  beforeAll(async () => {
    //await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.destroy();
  });
  it("cria um incident", async () => {
    const ong = await resquest(app).get("/ongs");
    const response = await resquest(app)
      .post("/incidents")
      .set("authorization", ong.body[0].id)
      .send({
        title: "doguinho",
        description: "cachorrin fdp",
        value: "80"
      });
    expect(response.body).toHaveProperty("id");
  });
  it("retorna todos os incidents", async () => {
      
  });
  it("retorna incidents de uma ong especifica", async () => {});
  it("exclui um incident por seu id", async () => {});
});
