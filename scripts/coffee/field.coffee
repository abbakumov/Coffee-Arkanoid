# Класс для манипуляции DOM-ом в любом виде.
class Field
	constructor: (@size) ->
		do @initCells
	initCells: ->
		@field = 
		for y in [0...@size.y]
			arr = []
			for x in [0...@size.x]
				arr.push new Cell({y: y, x: x, status: 0});
			arr