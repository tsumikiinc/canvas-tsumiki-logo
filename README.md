# Tsumiki Logo in JavaScript using Canvas

[http://www.tsumikiinc.com/](http://www.tsumikiinc.com/)

v0.2.0

## Demo

[https://tsumikiinc.github.io/canvas-tsumiki-logo/demo/](https://tsumikiinc.github.io/canvas-tsumiki-logo/demo/)

## Usage

### Load this library

```html
<script src="canvas-tsumiki-logo.min.js"></script>
```

### Markup

```html
<canvas id="tsumikiLogo"></canvas>
```

### js

```javascript
var cvs = document.getElementById('tsumikiLogo');
var ctx = new TsumikiLogo(cvs);

ctx.draw();
```

## Create object

```javascript
var cvs = document.getElementById('tsumikiLogo');
var ctx = new TsumikiLogo(cvs);
```

### Parameter

**`TsumikiLogo(DOMElement [, option]);`**

**DOMElement**

Target element

Type: *Element*

**option**

Options 

Type: *Object*

---

#### `option.size`

Size

#### `option.colorList`

Color list

#### `option.isRetinaDisplay`

Will support the Retina display

```javascript
var cvs = document.getElementById('tsumikiLogo'),
    cList = {
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
    };

var ctx = new TsumikiLogo(cvs, {
  size: 32,
  colorList: cList,
  isRetinaDisplay: true
});
```

## Methods

### `.sizing( size )`

Specifies the size

**size**

Type: *Number*

**Returns:** `this`

### `.coloring( colorList )`

Custom color list

**colorList**

Type: *Object*

**Returns:** `this`

### `.draw()`

Drawing

## Example

Use methods

```javascript
var cvs = document.getElementById('tsumikiLogo');
var ctx = new TsumikiLogo(cvs);

ctx.sizing(96);
ctx.coloring({
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
});
ctx.draw();
```

Method chain

```javascript
var cvs = document.getElementById('tsumikiLogo');
var ctx = new TsumikiLogo(cvs);

var colors = {
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
};

ctx.sizing(32).coloring(colors).draw();
```

## Support

Modern browser and IE9+

## License

© Tsumiki inc.