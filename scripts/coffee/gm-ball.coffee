class Ball extends GameObject
	constructor: (@position, @gameField, @vector) ->
		super

	move: ->
		cellToMove =
			x: @position.x + @vector.x
			y: @position.y + @vector.y
		if @gameField.checkCell cellToMove
			@step cellToMove
		else
			do @changeVector
			do @move # again

	changeVector: -> # method must return the ball to the right path
		# first calculate the directions to check
		checkDirections = [{ x: @vector.x, y: 0 }, { x: 0, y: @vector.y}]
		# calculate right direction
		for direction in checkDirections
			cell = { x: @position.x + direction.x, y: @position.y + direction.y }
			if @gameField.getCellStatus(cell) != 0
				# redirect vector after calculate right direction
				@_vectorRebound direction

	step: (cellToMove) ->
		do @destroy
		@position = cellToMove
		do @spawn

	_checkDirection: ->
		# check 3 cells in the direction of vector
		

	_vectorRebound: (wall) ->
		if wall.x == 0
			# y-rebound
			@vector.y *= -1
		else
			# x-rebound
			@vector.x *= -1
