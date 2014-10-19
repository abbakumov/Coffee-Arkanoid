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
			39: 1  # right
			37: -1 # left
			68: 1  # D
			65: -1 # A

		document.addEventListener 'keydown', (event) =>
			mapped = map[event.which]
			if mapped
				do event.preventDefault
				@run 'move', mapped
			if event.which == 32
				@run 'start'
