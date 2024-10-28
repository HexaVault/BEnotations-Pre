import Decimal from "break_eternity.js";
import { Notation } from "./notation";

// The reason these have to be these unicode boxes and not their escape characters
// is beyond me. However, you can trust that these will render correctly, as they
// are part of the font found in docs/MonospaceTypewriter.ttf
const BARS = ["", "", "", "", "", "", "", ""];
const NEGATIVE_BARS = ["", "", "", "", "", "", "", ""];
const LOG8 = Math.log(8);

export class BarNotation extends Notation {
  public get name(): string {
    return "Bar";
  }

  public get negativeInfinite(): string {
    return "";
  }

  public get infinite(): string {
    return "";
  }

  public formatVerySmallNegativeDecimal(value: Decimal): string {
    return this.flipBars(this.formatDecimal(value));
  }

  public formatVerySmallDecimal(value: Decimal): string {
    return this.formatDecimal(value);
  }

  public formatNegativeUnder1000(value: number): string {
    return this.flipBars(this.formatDecimal(new Decimal(value)));
  }

  public formatUnder1000(value: number): string {
    return this.formatDecimal(new Decimal(value));
  }

  public formatNegativeDecimal(value: Decimal): string {
    return this.flipBars(this.formatDecimal(value));
  }

  public formatDecimal(value: Decimal): string {
    if (value.eq(0)) {
      return "0";
    }
    if (value.lessThan(1) && value.greaterThan(0)) {
      return `/${this.formatDecimal(Decimal.div(1, value))}`;
    }
    const log8 = Math.LN10 / LOG8 * value.exponent
    let wholeLog = Math.floor(log8);
    const decimalLog = log8 - wholeLog;
    const decimalLog64 = Math.floor(decimalLog * 64);
    const parts = [
      BARS[decimalLog64 % 8],
      BARS[Math.floor(decimalLog64 / 8)]
    ];
    while (wholeLog >= 8) {
      const remainder = wholeLog % 8;
      wholeLog = (wholeLog - remainder) / 8;
      parts.push(BARS[remainder]);
    }
    parts.push(BARS[wholeLog]);
    return parts.join("");
  }

  public flipBars(parts: string): string {
    const newParts = [];
    for (const part of parts) {
      newParts.push(NEGATIVE_BARS[BARS.indexOf(part)]);
    }
    return newParts.join("");
  }
}
