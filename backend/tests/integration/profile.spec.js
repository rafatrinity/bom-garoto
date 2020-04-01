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
  it("retorna incidents de uma user especifica", async () => {
    const user = await resquest(app).get("/users");
    const incident = await resquest(app)
      .get("/profile")
      .set("authorization", user.body[0].id)
      .send();
    expect(incident.status).toBe(200);
  });
});
