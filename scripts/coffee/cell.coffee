#Класс для ячейки нашего поля.
class Cell
	constructor: (config)->
		@setConfig config
		@DOMcell = document.querySelectorAll('.game-field tr')[@y].children[@x]
		do @refreshCellView

	getConfig: ->
		{ x: @x, y: @y, status: @status }
	setConfig: (config)->
		@x = config.x
		@y = config.y
		@status = !!config.status
		return

	isFree: ->
		@status
	isOccupied: ->
		not @status

	activate: ->
		@DOMcell.className = 'active'
	deactivate: ->
		@DOMcell.className = ''
		
	refreshCellView: ->
		if @status then do @activate else do @deactivate