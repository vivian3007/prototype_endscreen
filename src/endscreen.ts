import * as PIXI from 'pixi.js'
import { Button } from './button'
import { Game } from './game'
import { Startscreen } from './startscreen'

export class Endscreen {
    private pixiWidth = innerWidth
    private pixiHeight = innerHeight
    private buttonRestart: Button
    private buttonStop: Button
    public pixi: PIXI.Application

    constructor() {
        console.log("endscreen!")

        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight, backgroundColor: 0x00FF00 });
        document.body.appendChild(this.pixi.view)

        this.buttonRestart = new Button(
            this.pixi.screen.width/2,
            100,
            "Opnieuw spelen")
        this.pixi.stage.addChild(this.buttonRestart)

        this.buttonStop = new Button(
            this.pixi.screen.width/2,
            200,
            "Stoppen")
        this.pixi.stage.addChild(this.buttonStop)

        this.buttonRestart.on("pointerdown", () => this.onClickRestart())
        this.buttonStop.on("pointerdown", () => this.onClickStop())
    }

    private onClickRestart() {
        this.buttonRestart.destroy()
        this.buttonStop.destroy()

         // destroy game and endscreen and make a new game
         new Game(this)
    }

    private onClickStop(){
        this.buttonRestart.destroy()
        this.buttonStop.destroy()

        //destroy game and endscreen and make a new startscreen
        new Startscreen(300, 100, this)
    }
}

new Endscreen()