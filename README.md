# Tsumiki Logo in JavaScript using Canvas

[http://www.tsumikiinc.com/](http://www.tsumikiinc.com/)

## Demo

[https://tsumikiinc.github.io/canvas-tsumiki-logo/demo/](https://tsumikiinc.github.io/canvas-tsumiki-logo/demo/)

## Usage

```javascript
var cvs = document.getElementById('canvas');
var ctx = new TsumikiLogo(cvs);
ctx.update();
```

### Config

**`TsumikiLogo(CanvasElement [, options ]);`**

#### options.size

size

Type: *Number*

Default: `256`

#### options.fill

color

Type: *Array*

Default:

```javascript
[
  '#23AAA4',
  '#5AB5B0',
  '#78BEB2',
  '#686F89',
  '#DC5D54',
  '#DD6664',
  '#D94142',
  '#E78E21',
  '#E9A21F',
  '#EDB51C'
]
```

#### options.fill

is fill

Type: *Bool*

Default: `true`

#### options.lineWidth

Stroke

Type: *Number*

Default: `0`

#### options.lineColor

Stroke style

Type: *String*

Default: `#333`

#### options.ratio

Screen resolution

Type: *Number*

Default: `1`

### Methods

#### `.update()`

Draw

**Returns:** `this`

#### `.setSize( Number )`

Set size

**Returns:** `this`

## Contributing

This library was developed with following things

[gulp](http://gulpjs.com/)

[CoffeeScript](http://coffeescript.org/)

```shell
npm i
```

## Support

Modern browser and IE9+

## License

© Tsumiki inc.
