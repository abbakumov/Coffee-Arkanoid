class Game
	constructor: ->
		do @init
		# do @start

	init: ->
		@gameField = new GameField()
		@ball = new Ball {x: 5, y:14}, @gameField, {x: -1, y: -1}
		@player = new Player {x: 3, y:15}, @gameField, 5
		do @initInputManager
		do @initBricks

	start: (speed = 5) ->
		document.getElementsByClassName('info-block')[0].style.display = 'none';
		frameTime = 1000 / speed
		setInterval =>
			do @gameStep
		,frameTime

	gameStep: ->
		do @ball.vectorMove

	initBricks: ->
		for i in [0..11]
			for j in [0..6]
				new Brick {x: i, y: j}, @gameField

	initInputManager: ->
		@inputManager = new InputManager()
		@inputManager.on 'move', @move.bind this
		@inputManager.on 'start', @start.bind this

	move: (direction)->
		@player.move direction