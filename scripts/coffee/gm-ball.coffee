class Ball extends GameObject
	constructor: (@position, @gameField, @vector) ->
		@priveousPosition = @position
		super

	move: ->
		cellToMove =
			x: @position.x + @vector.x
			y: @position.y + @vector.y
		if not @gameField.checkCell cellToMove
			do @changeVector
		@step cellToMove

	changeVector: ->


	step: (cellToMove) ->
		do @destroy
		console.log 'destroyed'
		@position = cellToMove
		console.log @position
		do @spawn