import * as PIXI from "pixi.js"
import { settings } from "pixi.js"
import { Button } from "./button"
import { Game } from "./game"
import { Endscreen } from "./endscreen"

export class Startscreen extends PIXI.Graphics{
    private endscreen: Endscreen
    constructor(x: number, y: number, endscreen: Endscreen) {
        super()

        console.log('startscreen!')
        this.endscreen = endscreen

        const startscreenText = new PIXI.Text("Startscreen komt hier", {
            "align": "center",
            "fontFamily": "Comic Sans MS",
            "fontSize": 50,
        })

        startscreenText.anchor.set(0.5)
        startscreenText.x = 750
        startscreenText.y = 200

        this.endscreen.pixi.stage.addChild(startscreenText)
    }
}