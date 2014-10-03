# Класс для манипуляции DOM-ом в любом виде.
class Field
	constructor: (@size) ->
		do @initCells

	initCells: ->
		#generate cells
		@cells = [] 
		for y in [0...@size.y]
			for x in [0...@size.x]
				@cells.push new Cell({y: y, x: x, status: 0})

	getCell: (position)	->
		@cells[(position.y * @size.x) + position.x]