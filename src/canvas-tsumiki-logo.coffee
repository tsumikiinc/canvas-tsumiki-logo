###!
Canvas Tsumiki logo
(c) Tsumiki inc.
###

class TsumikiLogo

  # Helper -------------------------------------------------
  _extend = (out) ->
    out = out or {}
    for i in [1...arguments.length]
      unless arguments[i] then continue
      for key, val of arguments[i]
        if arguments[i].hasOwnProperty key
          out[key] = val
    return out



  @defaults =
    size: 256
    fillColor: [
      '#23AAA4'
      '#5AB5B0'
      '#78BEB2'
      '#686F89'
      '#DC5D54'
      '#DD6664'
      '#D94142'
      '#E78E21'
      '#E9A21F'
      '#EDB51C'
    ]
    fill: true
    lineWidth: 0
    lineColor: '#333'
    ratio: 1
    pieceLength: 8

  _setSize = (size) ->
    if size?
      if @options.ratio is 1
        @canvas.width = size
        @canvas.height = size
      else
        @canvas.width = size * @options.ratio
        @canvas.height = size * @options.ratio
        @canvas.style.width = "#{@options.size}px"
        @canvas.style.height = "#{@options.size}px"

  constructor: (canvas, options) ->
    @canvas = canvas
    @context = @canvas.getContext '2d'
    @options = _extend {}, TsumikiLogo.defaults, options

    _setSize.call @, @options.size

  setSize: (size) ->
    @options.size = size
    _setSize.call @, size
    return this

  update: ->
    if @options.ratio is 1
      @pieceSize = @options.size / @options.pieceLength
    else
      @pieceSize = @options.size / (@options.pieceLength / @options.ratio)

    @context.scale 2, 1

    @context.translate @pieceSize * 1.25, @pieceSize / 2
    @context.moveTo @pieceSize, @pieceSize

    @context.rotate Math.PI / 4

    # todo
    do =>
      i = 0
      _drawLoop = [
        [@pieceSize, 0]
        [@pieceSize, 0]
        [-@pieceSize, @pieceSize]
      ]

      for fill in @options.fillColor
        @context.translate _drawLoop[i][0], _drawLoop[i][1]
        if @options.fill
          @context.fillStyle = fill
          @context.fillRect(0, 0, @pieceSize, @pieceSize)

        if @options.lineWidth > 0
          @context.lineWidth = @options.lineWidth
          @context.strokeStyle = @options.lineColor
          @context.strokeRect(0, 0, @pieceSize, @pieceSize)

        if i is 2 then i = 0 else i++

    return this

window.TsumikiLogo or= TsumikiLogo