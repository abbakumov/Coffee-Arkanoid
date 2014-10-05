# Class for game field.
# Will control the field view
class GameField
	costructor: (size) ->
		@fieldView = new fieldView size || { x:12, y:16 }

