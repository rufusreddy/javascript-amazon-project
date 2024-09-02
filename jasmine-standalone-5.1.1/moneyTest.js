import { formatCurrency } from "../scripts/utils/money.js";
import { loadProducts } from "../data/products.js";

describe("test suite: formatCurrency", () => {
  it("converts cents into dollars", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });

  it("works with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });
  it("round up to the nearest cent ", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
});

beforeAll((done) => {
  loadProducts(() => {
    done();
  });
});
