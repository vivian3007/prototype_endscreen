import * as PIXI from "pixi.js"
import { settings } from "pixi.js"
import { Button } from "./button"
import { Game } from "./game"

export class Startscreen extends PIXI.Graphics{
    private game: Game
    constructor(x: number, y: number, game: Game) {
        super()

        console.log('startscreen!')
        this.game = game

        const startscreenText = new PIXI.Text("Startscreen komt hier", {
            "align": "center",
            "fontFamily": "Comic Sans MS",
            "fontSize": 50,
        })

        startscreenText.anchor.set(0.5)
        startscreenText.x = 400
        startscreenText.y = 200

        this.game.pixi.stage.addChild(startscreenText)
    }
}