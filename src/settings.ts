import Decimal from "break_eternity.js";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Settings = {
  isInfinite: (decimal: Decimal): boolean => decimal.gte(new Decimal("1e9000000000000000")),
  exponentCommas: {
    show: true,
    min: 100000,
    max: 1000000000
  },
  exponentDefaultPlaces: 3
};
