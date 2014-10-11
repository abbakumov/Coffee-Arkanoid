# class for game field.
# will control the field view
class GameField
	constructor: (size) ->
		@size = size || { x:12, y:16 } # constant size to test
		@fieldView = new ViewField @size
		@cells = do @_createCells

	_createCells: ->
		for x in [0...@size.x]
			for y in [0...@size.y]
				status: 0
				gameObject: null

	getCellStatus: (position) ->
		if @checkCell position
			@cells[position.x][position.y].status
		else -1

	getCellObject: (position) ->
		if @checkCell position
			@cells[position.x][position.y].gameObject
		else -1

	clearCell: (position) ->
		if @checkCell position
			cell = @cells[position.x][position.y]
			cell.status = 0
			cell.gameObject = null
			@fieldView.setCellStatus {x: position.x, y: position.y}, 0
			true
		else false

	setObjectToCell: (obj, position) ->
		if @checkCell position
			cell = @cells[position.x][position.y]
			cell.status = 1
			cell.gameObject = obj
			@fieldView.setCellStatus {x: position.x, y: position.y}, 1
			true
		else false

	checkCell: (position) ->
		if @cells[position.x] && @cells[position.x][position.y] then true else false