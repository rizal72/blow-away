let colonna = 0
let riga = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            riga = randint(0, 4)
            colonna = randint(0, 4)
            if (led.point(colonna, riga)) {
                led.unplot(colonna, riga)
                led.plot(colonna + 1, riga)
            }
        }
    }
})
