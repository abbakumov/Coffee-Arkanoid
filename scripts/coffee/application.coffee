class Game
	constructor: ->
		do @start

	start: ->
		@gameField = new GameField()
		@ball = new Ball {x: 5, y:14}, @gameField, {x: -1, y: -1}
		@player = new Player {x: 3, y:15}, @gameField, 5
		do @initInputManager
		do @initBricks

	initBricks: ->
		for i in [0..11]
			for j in [0..6]
				new Brick {x: i, y: j}, @gameField

	initInputManager: ->
		@inputManager = new InputManager()
		@inputManager.on 'move', @move.bind(this)

	move: (direction)->
		@player.move direction


window.onload = ->
	new Game()