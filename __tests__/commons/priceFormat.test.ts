import priceFormat from "../../src/commons/priceFormat";

describe("priceFormat", () => {
  describe("with null", () => {
    it("returns 0원", () => {
      const result = priceFormat(null);

      expect(result).toBe("0원");
    });
  });

  describe("with 123", () => {
    it("returns 123원", () => {
      const result = priceFormat(123);

      expect(result).toBe("123원");
    });
  });

  describe("with 1_234", () => {
    it("returns 1,234원", () => {
      const result = priceFormat(1_234);

      expect(result).toBe("1,234원");
    });
  });

  describe("with 1_234_567", () => {
    it("returns 1,234,567원", () => {
      const result = priceFormat(1_234_567);

      expect(result).toBe("1,234,567원");
    });
  });
});
