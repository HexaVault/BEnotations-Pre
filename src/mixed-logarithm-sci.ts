import Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { ScientificNotation } from "./scientific";

const scientific = new ScientificNotation();

export class MixedLogarithmSciNotation extends Notation {
  public get name(): string {
    return "Mixed Logarithm (Sci)";
  }

  public formatDecimal(value: Decimal, places: number, placesExponent: number): string {
    if (value.lt(1e33)) {
      return scientific.formatDecimal(value, places, placesExponent);
    }
    const log10 = value.exponent;
    return `e${this.formatExponent(log10, places, (n, p) => n.toFixed(p), placesExponent)}`;
  }
}
