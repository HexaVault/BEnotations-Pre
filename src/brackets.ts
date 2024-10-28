import type Decimal from "break_eternity.js";
import { Notation } from "./notation";

export class BracketsNotation extends Notation {
  public get name(): string {
    return "Brackets";
  }

  public formatDecimal(value: Decimal): string {
    const table = [")", "[", "{", "]", "(", "}"];
    const log6 = Math.LN10 / Math.log(6) * (value.exponent);
    let wholePartOfLog = Math.floor(log6);
    const decimalPartOfLog = log6 - wholePartOfLog;
    // Easier to convert a number between 0-35 to base 6 than messing with fractions and shit
    const decimalPartTimes36 = Math.floor(decimalPartOfLog * 36);
    let string = "";
    while (wholePartOfLog >= 6) {
      const remainder = wholePartOfLog % 6;
      wholePartOfLog -= remainder;
      wholePartOfLog /= 6;
      string = table[remainder] + string;
    }
    string = `e${table[wholePartOfLog]}${string}.`;
    string += table[Math.floor(decimalPartTimes36 / 6)];
    string += table[decimalPartTimes36 % 6];
    return string;
  }
}
