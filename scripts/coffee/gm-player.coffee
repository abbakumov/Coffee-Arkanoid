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