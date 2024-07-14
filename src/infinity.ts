import type Decimal from "break_eternity.js";
import { Notation } from "./notation";
import { Settings } from "./settings";
import { formatWithCommas } from "./utils";

export class InfinityNotation extends Notation {
  public get name(): string {
    return "Infinity";
  }

  public formatDecimal(value: Decimal, places: number): string {
    const infinities = value.log(Number.MAX_VALUE);
    const infPlaces = infinities.lt(1000) ? 4 : 3;
    const formatted = infinities.toFixed(Math.max(infPlaces, places));
    if (Settings.exponentCommas.show) {
      return `${formatWithCommas(formatted)}∞`;
    }

    return `${formatted}∞`;
  }
}
