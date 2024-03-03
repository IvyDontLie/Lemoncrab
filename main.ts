enum ActionKind {
    Walking,
    Idle,
    Jumping
}
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
    if (true) {
        myEnemy.follow(mySprite, 50)
    }
})
forever(function () {
    if (controller.player1.isPressed(ControllerButton.Left)) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`walkright`,
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 c c 6 c . c c . . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
            c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
            c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
            c 3 3 3 3 3 c c b 5 5 5 5 c . . 
            . c 3 3 3 c 5 5 b 4 5 5 4 c . . 
            . . b b b c c 5 b b 4 4 b 5 c . 
            . b 5 4 4 4 c 4 5 5 5 b 4 4 c . 
            . c 5 c 4 4 4 c 5 5 5 c 4 5 c . 
            . c c c 4 4 4 c 5 5 5 5 c 5 c . 
            . . . . . . . c c c c c c c . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c . . . . . . . . . . 
            . . . c 3 6 c c c c . . . . . . 
            . . . c 6 3 3 3 6 6 c . . . . . 
            . . c 3 3 3 3 3 3 6 6 c . . . . 
            . c 3 3 3 3 3 3 c c 6 6 c c c b 
            . c 3 3 3 3 3 c 5 5 c 6 c 5 5 b 
            . c c 3 3 3 6 f f 5 c 6 c 5 f f 
            . c c 6 6 6 6 f f 5 c c c 5 f f 
            . c 3 3 3 3 3 3 c 5 5 3 5 5 b . 
            . c 3 3 3 3 c c c 4 5 5 5 5 c . 
            . . c 3 3 c 5 5 b 4 4 5 5 4 c . 
            . . . c b b c 5 b b 4 4 b 5 c . 
            . . . c 5 c c 5 5 5 c 4 5 c c . 
            . . . c c c c 5 5 5 5 c c . . . 
            . . . . . . c c c c c c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 6 6 c . . . . . . 
            . c 3 3 3 3 3 3 6 6 c . . . . . 
            c 3 3 3 3 3 3 c c 6 6 c c c b . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 f f 5 c c c 5 f f . 
            c 3 3 3 3 c c c 5 5 3 5 5 b . . 
            c 3 3 3 c 5 5 b 5 5 5 5 5 c . . 
            . c 3 3 c 5 b b 4 4 5 5 4 4 c . 
            . . c b 5 5 5 b 4 4 4 b 5 5 c . 
            . . b c 5 5 5 c 4 4 4 5 5 5 c . 
            . . c c 5 5 5 5 c 4 c c c c . . 
            . . c c c c c c c c c c . . . . 
            `,img`
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 c c 6 c . c c . . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
            c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
            c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
            c 3 3 3 3 3 c c 4 5 5 5 5 c c . 
            . c 3 3 3 c 5 5 c 4 5 5 4 5 5 c 
            . . c c b 5 5 5 c 4 4 4 b 4 5 b 
            . . b b c 5 5 5 c 4 4 b 5 5 4 c 
            . b 5 c c 5 5 5 5 c 4 c 5 5 5 c 
            . c 5 c c c c c c 4 c 5 5 5 5 c 
            . c c c . . . . . c c c c c c . 
            `],
        100,
        true
        )
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
