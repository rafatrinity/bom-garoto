const generateUnicId = require("../../src/utils/generateUnicId");
describe("Generate unic id", () => {
  it("gera um id unico", () => {
    const id = generateUnicId();
    expect(id).toHaveLength(8)
  });
});
