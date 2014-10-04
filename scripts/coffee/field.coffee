# Class for DOM manipulations
class Field
	constructor: (@size) ->
		do @initCells

	initCells: ->
		#generate cells
		@cells = [] 
		for y in [0...@size.y]
			for x in [0...@size.x]
				@cells.push new Cell({y: y, x: x, status: 0})

	getCell: ()	->
		#work with one or two arguments
		return if arguments.length > 2 || arguments.length == 0
		position = switch arguments.length
			when 1 then arguments[0]
			when 2 then { x: arguments[0], y: arguments[1] }

		return if position.x > @size.x || position.y > @size.y
		@cells[(position.y * @size.x) + position.x]

	refreshField: ->
		cell.refreshCellView() for cell in @cells