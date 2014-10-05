# Class for cell DOM
class ViewCell
	constructor: (position)->
		@DOMcell = document.querySelectorAll('.game-field tr')[position.y].children[position.x]

	activate: ->
		@DOMcell.className = 'active'
	deactivate: ->
		@DOMcell.className = ''