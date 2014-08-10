# Tsumiki Logo in JavaScript using Canvas

[http://www.tsumikiinc.com/](http://www.tsumikiinc.com/)

v0.1.0

## Demo

[https://tsumikiinc.github.io/canvas-tsumiki-logo/demo/](https://tsumikiinc.github.io/canvas-tsumiki-logo/demo/)

## Usage

### Load library

```html
<script src="canvas-tsumiki-logo.js"></script>
```

### Markup

```html
<canvas id="tsumikiLogo"></canvas>
```

### js

```javascript
var cvs = document.getElementById('tsumikiLogo');
var ctx = new TsumikiLogo(cvs);

ctx.sizing(128);
ctx.draw();
```

## Methods

### `sizing()`

Specifies the size

### `draw()`

Drawing

## Option

Custom color list

```javascript
var colorList = {
  blue: 'blue',
  rBlue: 'Aqua',
  lBlue: 'CornflowerBlue',
  Coral: 'Coral',
  rRed: '#b22222',
  lRed: '#ff00ff',
  Brown: 'Brown',
  rG: 'DarkGreen',
  lG: '#bdb76b',
  magenta: '#8b008b'
}

var cvs = document.getElementById('tsumikiLogo');
var ctx = new TsumikiLogo(cvs, colorList);
```

## Support

Modern browser and IE9+

## License

© Tsumiki inc.