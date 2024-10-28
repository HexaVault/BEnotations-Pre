import Decimal from "break_eternity.js";
import { ScientificNotation } from "../scientific";

describe("Scientific Notation", () => {
  const notation = new ScientificNotation();

  describe("name getter", () => {
    it("should return the expected name", () => {
      expect(notation.name).toBe("Scientific");
    });
  });

  describe("infinite getter", () => {
    it("should return the default value", () => {
      expect(notation.infinite).toBe("Infinite");
    });
  });

  describe("negativeInfinite getter", () => {
    it("should return the default value", () => {
      expect(notation.negativeInfinite).toBe("-Infinite");
    });
  });

  it("should format values less than 1000", () => {
    expect(notation.format(3, 0, 0)).toBe("3");
    expect(notation.format(34, 0, 0)).toBe("34");
    expect(notation.format(345, 0, 0)).toBe("345");
  });

  it("should format values more than 1000", () => {
    expect(notation.format(3000, 0)).toBe("3e3");
    expect(notation.format(34000, 1)).toBe("3.4e4");
    expect(notation.format(345000, 2)).toBe("3.45e5");
  });

  it("should not have mantissa values show as 10", () => {
    expect(notation.format(1e4, 0)).toBe("1e4");
    expect(notation.format(new Decimal("1e254443"), 1)).toBe("1.0e254,443");
    expect(notation.format(new Decimal("1e2e6"), 2)).toBe("1.00e2,000,000");
  });

  it("should not have mantissa values show if exponent is formatted", () => {
    expect(notation.format(new Decimal("1e2e9"), 0)).toBe("e2.00e9");
    expect(notation.format(new Decimal("1e5.5e11"), 1)).toBe("e5.50e11");
    expect(notation.format(new Decimal("1e7.25e15"), 2)).toBe("e7.25e15");
  });
});
