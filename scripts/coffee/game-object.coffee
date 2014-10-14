# base class for all game objects
class GameObject
	constructor: (@position, @gameField) ->
		do @spawn

	spawn: ->
		@gameField.setObjectToCell @, @position

	destroy: ->
		@gameField.clearCell @position

	move: ->
		false

	strike: ->
		false