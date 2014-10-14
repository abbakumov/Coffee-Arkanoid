class Ball extends GameObject
	constructor: (@position, @gameField, @vector) ->
		super

	move: ->
		checkResult = do @_checkDirection
		if checkResult == 0
			do @step
		else
			@_attack checkResult
			@_rebound checkResult
			do @move # again

	step: (cellToMove) ->
		if not cellToMove
			cellToMove = { x: @position.x + @vector.x, y: @position.y + @vector.y }
		do @destroy
		@position = cellToMove
		do @spawn

	_checkDirection: -> # check 3 cells in the direction of vector
		checkDirections = [{ x: @vector.x, y: 0 }, { x: 0, y: @vector.y}, @vector]
		# calculate wall
		for direction in checkDirections
			cell = { x: @position.x + direction.x, y: @position.y + direction.y }
			return cell if @gameField.getCellStatus(cell) != 0
		return 0

	_rebound: (cell) ->
		wall = { x: (cell.x - @position.x), y: (cell.y - @position.y) }
		if wall.x != 0 then @vector.x *= -1
		if wall.y != 0 then @vector.y *= -1

	_attack: (cell) ->
		obj = @gameField.getCellObject(cell)
		if obj != null && obj != -1 && obj.strike
			do obj.strike