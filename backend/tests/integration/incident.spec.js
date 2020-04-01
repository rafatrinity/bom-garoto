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
    const user = await resquest(app).get("/users");
    const response = await resquest(app)
      .post("/incidents")
      .set("authorization", user.body[0].id)
      .send({
        title: "doguinho",
        description: "cachorrin fdp",
        value: "80"
      });
    expect(response.body).toHaveProperty("id");
    expect(response.body).toEqual(expect.anything());
  });
  it("retorna todos os incidents", async () => {
    const response = await resquest(app).get("/incidents");
    expect(response.body).toEqual(expect.anything());
  });
  it("exclui um incident por seu id", async () => {
    const user = await resquest(app).get("/users");
    const incident = await resquest(app)
      .get("/profile")
      .set("authorization", user.body[0].id)
      .send();
    const response = await resquest(app)
      .delete("/incidents/" + incident.body[0].id)
      .set("authorization", user.body[0].id)
      .send();
    expect(response.status).toBe(204);
  });
});
