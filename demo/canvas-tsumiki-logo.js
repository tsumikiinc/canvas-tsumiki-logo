/*!
  Canvas Tsumiki logo
  License
    (c) Tsumiki inc.
*******************/

(function(exports) {
  'use strict';

  var TsumikiLogo = (function() {

    // Default Color List
    var defaultColorList = {
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
    };

    return function(canvas, colorList) {
      this.canvas = canvas;

      if (colorList) {
        this.colorList = colorList;
      } else {
        this.colorList = defaultColorList;
      }

    };

  })();

  TsumikiLogo.prototype = {

    sizing: function(size) {

      this.size = size;

      this.canvas.width = size * 8;
      this.canvas.style.width = (size * 4) + 'px';

      this.canvas.height = size * 8;
      this.canvas.style.height = (size * 4) + 'px';

      return this;
    },

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

    }

  };

  exports.TsumikiLogo = exports.TsumikiLogo || TsumikiLogo;

})(this);
