const resquest = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");
describe("profile", () => {
  beforeAll(async () => {
    // await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.destroy();
  });
  it("retorna incidents de uma ong especifica", async () => {
    const ong = await resquest(app).get("/ongs");
    const incident = await resquest(app)
      .get("/profile")
      .set("authorization", ong.body[0].id)
      .send();
    expect(incident.status).toBe(200);
  });
});
