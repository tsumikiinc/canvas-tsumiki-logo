/*!
  Canvas Tsumiki logo
  License
    (c) Tsumiki inc.
*******************/

(function(exports) {
  'use strict';

  // Privata methods -------------------
  var isNumber = function(n) {
    if (typeof n !== 'number' && typeof n !== 'string') {
      return false;
    } else {
      return (n === parseFloat(n) && isFinite(n));
    } 
  };



  var TsumikiLogo = (function() {

    var defaults = {
      size: 64,

      colorList: {
        green: '#23AAA4',
        rGreen: '#5AB5B0',
        lGreen: '#78BEB2',
        purple: '#686F89',
        rRed: '#DC5D54',
        lRed: '#DD6664',
        red: '#D94142',
        rOrange: '#E78E21',
        lOrange: '#E9A21F',
        yellow: '#EDB51C'
      }
    },

    // Screen resolution
    ratio = 1;

    return function(canvas, opt) {
      this.canvas = canvas;

      if (opt && opt.isRetinaDisplay === true) {
        this.isRetinaDisplay = opt.isRetinaDisplay;

        ratio = 2;
      }

      if (opt && opt.size && isNumber(opt.size)) {
        this.size = opt.size * ratio;
      } else {
        this.size = defaults.size * ratio;
      }

      if (opt && opt.colorList) {
        this.colorList = opt.colorList;
      } else {
        this.colorList = defaults.colorList;
      }

    };

  })();

  TsumikiLogo.prototype = {

    sizing: function(size) {
      if (size && isNumber(size)) {

        this.canvas.width = size * 8;
        this.canvas.height = size * 8;

        if (this.isRetinaDisplay) {
          this.size = size * 2;

          this.canvas.style.width = (size * 4) + 'px';
          this.canvas.style.height = (size * 4) + 'px';

        } else {
          this.size = size;
        }

      }

      return this;
    },// sizing ------------------------

    coloring: function(colorList) {
      if (colorList) {
        this.colorList = colorList;
      }

      return this;
    },// coloring ----------------------

    draw: function() {
      var ctx = this.canvas.getContext('2d'),
          cList = this.colorList,
          size = this.size,
          key, i = 0,

          // @todo
          roopList = [
            [size, 0],
            [size, 0],
            [-size, size]
          ];

      this.sizing(this.size);

      ctx.scale(2, 1);

      ctx.translate(size, 0);
      ctx.moveTo(size, size);

      ctx.rotate(Math.PI / 4);

      for (key in cList) {
        if (cList.hasOwnProperty(key)) {
          ctx.translate(roopList[i][0], roopList[i][1]);
          ctx.fillStyle = cList[key];
          ctx.fillRect(0, 0, size, size);

          if (i === 2) {
            i = 0;
          } else {
            i++;
          }

        }

      }

    }// draw ---------------------------

  };

  exports.TsumikiLogo = exports.TsumikiLogo || TsumikiLogo;

})(this);
