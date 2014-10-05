# Class for DOM manipulations
class ViewField
	constructor: (@size) ->
		do @_initCells

	_initCells: ->
		#generate cells
		@cells = [] 
		for y in [0...@size.y]
			for x in [0...@size.x]
				loopCell = new ViewCell({y: y, x: x})
				do loopCell.deactivate
				@cells.push loopCell

	_getCell: ->
		#work with one or two arguments
		return if arguments.length > 2 || arguments.length == 0
		position = switch arguments.length
			when 1 then arguments[0]
			when 2 then { x: arguments[0], y: arguments[1] }

		return if position.x > @size.x || position.y > @size.y
		@cells[(position.y * @size.x) + position.x]

	setCellStatus: (cell, status) ->
		cell = @_getCell(cell)
		if status
			do cell.activate
		else
			do cell.deactivate

	clear: ->
		do cell.deactivate for cell in @cells

# Class for cell DOM
class ViewCell
	constructor: (position)->
		@DOMcell = document.querySelectorAll('.game-field tr')[position.y].children[position.x]

	activate: ->
		@DOMcell.className = 'active'
	deactivate: ->
		@DOMcell.className = ''