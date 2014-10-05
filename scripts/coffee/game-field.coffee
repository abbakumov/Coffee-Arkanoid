# Class for game field.
# Will control the field view
class GameField
	constructor: (size) ->
		@size = size || { x:12, y:16 }
		@fieldView = new FieldView @size
		@fieldControl = do @createFieldControl

	createFieldControl: ->
		for x in [0...@size.x]
			for y in [0...@size.y]
				x: x
				y: y
				status: 0