describe("Calculator", function () {
  it("should add two numbers together", function () {
    expect(add(1, 2)).toBe(3);
  });

  it("should subtract two numbers", function () {
    expect(subtract(3, 2)).toBe(1);
    expect(subtract(-10, -1)).toBe(-9);
  });

  it("should multiply correctly", function () {
    expect(multiply(2, 3)).toBe(6);
  });

  it("should divide correctly", function () {
    expect(divide(10, 5)).toBe(2);
  });

  it("should return 0 when dividing by 0", function () {
    expect(divide(1, 0)).toBe(0);
  });
});