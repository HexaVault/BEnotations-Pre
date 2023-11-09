# Antimatter Dimensions Notations - break_eternity.js Port

All the notations that are included in the current version of Antimatter Dimensions, and the upcoming Reality Update, however they have been ported to break_eternity.js

## Setup

#### CDN

The simplest way to use this package is to include these scripts in your HTML page:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/break_eternity.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/adnot-beport-small"></script>
```

You can also grab specific versions here:

- https://github.com/Patashu/break_eternity.js/releases
- https://github.com/HexaVault/BEnotations-Pre


All the notations are included inside `ADNotations` object:

```js
const scientific = new ADNotations.ScientificNotation();
```

The main method that notations provide is `format(value, places, placesUnder1000)`

- `value` can be `Decimal`, `number` or `string` which you want to format
- `places` is used to format mantissa when number is greater than 1000
- `placesUnder1000` is used to format the number when it is lesser than 1000

```js
const scientific = new ADNotations.ScientificNotation();

// Outputs "1000.00"
console.log(scientific.format(1000, 2, 2));
// Outputs "1.00e100"
console.log(scientific.format("1e100", 2, 0));
// Outputs "1e100"
console.log(scientific.format(new Decimal(1e100), 0, 0));
```

You can configure some formatting aspects via `ADNotations.Settings` object:

```js
const scientific = new ADNotations.ScientificNotation();

// Outputs "1e100,000"
console.log(scientific.format("1e100000", 2, 2));

// Outputs "1e100000"
ADNotations.Settings.exponentCommas.show = false;
console.log(scientific.format("1e100000", 2, 2));

// Outputs "Infinite"
ADNotations.Settings.isInfinite = decimal => decimal.gte(1e100);
console.log(scientific.format(1e101, 2, 2));
```

Configuration settings:

- `Settings.isInfinite` - function that determines if a `Decimal` value is infinite
(default is `decimal => decimal.gte(Decimal.MAX_VALUE)`)
- `Settings.exponentCommas.show` - show commas in formatted output
(default is **true**)  
- `Settings.exponentCommas.min` - lower bound for exponent to be formatted with
commas (default is **100000**)
- `Settings.exponentCommas.max` - upper bound for exponent to be formatted with
commas (default is **1000000000**)

## Extend

Creating your own notations is very simple! Just extend base class `Notation`
and implement the required methods `get name()` and `formatDecimal`:

```js
class SimpleNotation extends ADNotations.Notation {
  get name() {
    return "Simple";
  }

  formatDecimal(value, places) {
    return `Mantissa: ${value.mantissa.toFixed(places)}, Exponent: ${value.exponent}`;
  }
}
```

You can also extend existing notations (like `EmojiNotation` does) and override
other methods, but this is a more advanced case which you can figure out by
looking at the source code of existing notations.

## Community Notations

To use community notations, download community pack from the
[releases](https://github.com/antimatter-dimensions/notations/releases) page.
The community pack can be used **separately** from the base pack. 

If you want your notation to be publicly available via this library, you should
start by adding your notation to a `src/community` folder and making a pull
request with it.

After your PR is merged (which means that one of the maintainers decided that
it is good enough), you can reach out to AD devs about adding it to a base game.
There is no guarantee that it will be added, but all well-made notations will
be available as a community pack.

## Acknowledgements

Special thanks to the authors of notations:

- Scientific: [iblobtouch](https://github.com/iblobtouch)
- Engineering: [iblobtouch](https://github.com/iblobtouch)
- Letters: [iblobtouch](https://github.com/iblobtouch)
- Standard: [Slabdrill](https://github.com/1234abcdcba4321)
- Emoji: haha hevi screw u 😂😂😂
- Mixed Scientific: [Hevipelle](https://github.com/IvarK)
- Mixed Engineering: [Hevipelle](https://github.com/IvarK)
- Logarithm: [Hevipelle](https://github.com/IvarK)
- Brackets: [Boo](https://github.com/JCBoorgo)
- Infinity: [Omsi](https://github.com/omsi6)
- Roman: [Razenpok](https://github.com/Razenpok)
- Dots: [Garnet](https://github.com/garnet420)
- Zalgo: [SpectralFlame](https://github.com/cyip92)
- Hex: [dan-simon](https://github.com/dan-simon)
- Imperial: [Garnet](https://github.com/garnet420), [realrapidjazz](https://github.com/realrapidjazz)
- Clock: [Razenpok](https://github.com/Razenpok), [Garnet](https://github.com/garnet420)
- Prime: [Iker](https://github.com/Ikerstreamer)
- Bar: [Earth](https://github.com/earthernsence)
- Shi: [dan-simon](https://github.com/dan-simon)
- Blind: [Earth](https://github.com/earthernsence)
- ALL: [SpectralFlame](https://github.com/cyip92)

Thanks to the authors of community notations:
- Greek Letters: [cook1ee](https://github.com/cook1ee)
- Omega: [cook1ee](https://github.com/cook1ee)
- Omega (Short): [cook1ee](https://github.com/cook1ee)
- Precise Prime: Based on Prime by [Iker](https://github.com/Ikerstreamer), idea by [BlackCapCoder](https://github.com/BlackCapCoder), changes to Prime mostly by [dan-simon](https://github.com/dan-simon)
- Japanese: [Chiyozel](https://github.com/Chiyozel)
- Mixed Logarithm (Sci): [Chiyozel](https://github.com/Chiyozel)
- Tritetrated: [dan-simon](https://github.com/dan-simon)
- Flags: [Kajfik](https://github.com/kajfik000)
- YesNo: [Kaedenn](https://github.com/Kaedenn)
- Evil: [dan-simon](https://github.com/dan-simon)
- Emojier: [dan-simon](https://github.com/dan-simon)
- Chinese: [ducdat0507](https://github.com/ducdat0507)
- Binary: Suggested by [Garnet](https://github.com/garnet420), implemented by [dan-simon](https://github.com/dan-simon)
- Hexadecimal: Suggested by [Garnet](https://github.com/garnet420), implemented by [dan-simon](https://github.com/dan-simon), independently created earlier by [Aarex](https://github.com/aarextiaokhiao)
- Haha Funny: [Earth](https://github.com/earthernsence)
- Nice: [Earth](https://github.com/earthernsence)
- Long scale: [Ivan Sanchez](https://github.com/IvanSanchez)
- Infix engineering: [Ivan Sanchez](https://github.com/IvanSanchez)
- Reverse infix engineering: [Ivan Sanchez](https://github.com/IvanSanchez)
- Infix standard: [Ivan Sanchez](https://github.com/IvanSanchez)
- Infix long scale: [Ivan Sanchez](https://github.com/IvanSanchez)
- English: [ducdat0507 ](https://github.com/ducdat0507)

And a thanks to the base notations code. You can find it [here](https://www.npmjs.com/package/@antimatter-dimensions/notations), however it is intended for use with break_infinity.