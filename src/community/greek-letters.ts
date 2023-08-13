import Decimal from "break_eternity.js";
import { Notation } from "../notation";

export class GreekLettersNotation extends Notation {
  public get name(): string {
    return "Greek Letters";
  }

  private get greek(): string[] {
    return "άαβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ".split("");
  }

  public formatDecimal(value: Decimal, places: number): string {
    let exp = Math.floor(value.e / 3);
    let step = this.greek.length ** Math.floor(Math.log(exp) / Math.log(this.greek.length));
    let suffix = "";
    while (step >= 1) {
      const ordinal = Math.floor(exp / step);
      suffix += this.greek[ordinal];
      exp -= step * ordinal;
      step /= this.greek.length;
    }
    const mantissa = Decimal.pow(10, (value.exponent + Math.log(Math.max(value.mantissa, 1))) % 3).toFixed(places);
    return `${mantissa} ${suffix}`;
  }
}
