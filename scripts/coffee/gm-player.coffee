class Player extends GameObject
	constructor: (@position, @gameField, @size) ->
		super

	spawn: ->
		for i in [0..@size]
			if not @gameField.setObjectToCell @, { y: @position.y, x: @position.x + i}
				return false
		return true

	destroy: ->
		for i in [0..@size]
			@gameField.clearCell { y: @position.y, x: @position.x + i}

	move: (direction) -> # 1 or -1 (or more)
		for i in [0..@size]
			if not @gameField.checkCell { y: @position.y, x: (@position.x + i + direction)}
				return false
		do @destroy
		@position.x += direction
		do @spawn

	_moveObjectssOnPlatform: ->
		