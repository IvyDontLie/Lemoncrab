controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("Welcome to Lemoncrab! Move using the buttons. The enemy will chase you! collect as many lemons as possible until you get 100! Click B at any time to see this again")
})
info.player1.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverMessage(false, "GAME OVER!")
    game.reset()
})
music.play(music.stringPlayable("G F G A - F E D ", 120), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundColor(4)
game.splash("Welcome to Lemoncrab! Move using the buttons. The enemy will chase you! collect as many lemons as possible until you get 100! Click B at any time to see this again")
info.player1.setLife(3)
let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite)
game.setGameOverScoringType(game.ScoringType.HighScore)
mySprite.setStayInScreen(true)
let mySprite2 = sprites.create(assets.image`coin`, SpriteKind.Food)
game.setGameOverScoringType(game.ScoringType.HighScore)
let myEnemy = sprites.create(assets.image`enemy`, SpriteKind.Player)
mySprite.sayText("*go Lemoncrab, go!")
mySprite2.setPosition(randint(0, 142), randint(0, 113))
myEnemy.setPosition(76, 17)
forever(function () {
    if (mySprite.overlapsWith(myEnemy)) {
        info.changeLifeBy(-1)
        myEnemy.setPosition(randint(0, 142), randint(0, 113))
        pause(1000)
    }
})
forever(function () {
    if (info.score() == 100) {
        game.gameOver(true)
        game.setGameOverMessage(true, "GAME WON!")
        game.setGameOverEffect(true, effects.confetti)
        game.reset()
    }
})
forever(function () {
    if (mySprite.overlapsWith(mySprite2)) {
        info.changeScoreBy(1)
        mySprite2.setPosition(randint(0, 142), randint(0, 113))
    }
})
forever(function () {
    if (true) {
        myEnemy.follow(mySprite, 50)
    }
})
