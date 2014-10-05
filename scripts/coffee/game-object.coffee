# base class for all game objects
class GameObject
	constructor: (@position, @gameField) ->

	spawn: ->
		@gameField.setObjectToCell @, @position

	destroy: ->
		@gameField.clearCell @position