#Класс для ячейки нашего поля.
class Cell
	constructor: (config)->
		@setConfig config
	isFree: ->
	isOccupied: ->
	getConfig: ->
		{ x: @x, y:@y, status:@status }
	setConfig: (config)->
		@x = config.x
		@y = config.y
		@status = config.status
		return