let temp = 0
basic.showLeds(`
    # . . . .
    . # . . #
    . . # . .
    # . . # .
    . . . . #
    `)
basic.forever(function () {
    temp = 300 * (pins.analogReadPin(AnalogPin.P2) / 1023)
    serial.writeLine("temp")
    serial.writeNumber(temp)
    serial.writeLine("C")
    basic.showNumber(temp)
    basic.pause(15000)
})
