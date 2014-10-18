class InputManager
	constructor: ->
		@events = {}
		do @listen

	on: (event, callback) ->
		if !@events[event]
			@events[event] = []
		@events[event].push callback

	run: (event, data) ->
		callbacks = @events[event]
		if callbacks
			callbacks.forEach (callback) ->
				callback data

	listen: ->
		map =
			38: 0 # up
			39: 1 # right
			40: 2 # down
			37: 3 # left
			87: 0 # W
			68: 1 # D
			83: 2 # S
			65: 3 # A

		document.addEventListener 'keydown', (event) =>
			mapped = map[event.which]
			if mapped
				do event.preventDefault
				@.run 'move', mapped