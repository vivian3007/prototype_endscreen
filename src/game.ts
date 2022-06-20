import * as PIXI from "pixi.js"
import { settings } from "pixi.js"
import { Button } from "./button"
import { Endscreen } from "./endscreen"

export class Game extends PIXI.Graphics{
    private endscreen: Endscreen

    constructor(endscreen: Endscreen) {
        super()
        this.endscreen = endscreen

        console.log('game!')
        const gameText = new PIXI.Text("De nieuwe game komt hier", {
            "align": "center",
            "fontFamily": "Comic Sans MS",
            "fontSize": 50,
        })

        gameText.anchor.set(0.5)
        gameText.x = 750
        gameText.y = 200

        this.endscreen.pixi.stage.addChild(gameText)
    }
}