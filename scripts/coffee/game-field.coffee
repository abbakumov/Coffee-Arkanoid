# Class for game field.
# Will control the field view
class GameField
	constructor: (size) ->
		@size = size || { x:12, y:16 } #constant size to test
		@fieldView = new ViewField @size
		@cells = do @_createCells

	_createCells: ->
		for x in [0...@size.x]
			for y in [0...@size.y]
				status: 0
				gameObject: null

	getCellStatus: (cell) ->
		if @cells[cell.x][cell.y]
			@cells[cell.x][cell.y].status
		else -1

	getCellObject: (cell) ->
		if @cells[cell.x][cell.y]
			@cells[cell.x][cell.y].gameObject
		else -1