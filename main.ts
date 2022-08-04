radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        NoOption_2 += 1
        basic.showNumber(NoOption_2)
    } else {
        YesOption_1 += 1
        basic.showNumber(YesOption_1)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("No")
    basic.showNumber(NoOption_2)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    basic.showString("Yes")
    basic.showNumber(YesOption_1)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (NoOption_2 > YesOption_1) {
        for (let index = 0; index < 2; index++) {
            basic.showString("No Wins!")
            basic.showIcon(IconNames.SmallDiamond)
            basic.showIcon(IconNames.SmallSquare)
            basic.showIcon(IconNames.Diamond)
            basic.showIcon(IconNames.Square)
            for (let index = 0; index < 4; index++) {
                basic.showIcon(IconNames.Chessboard)
                basic.showLeds(`
                    # . # . #
                    . # . # .
                    # . # . #
                    . # . # .
                    # . # . #
                    `)
            }
        }
    } else if (YesOption_1 > NoOption_2) {
        for (let index = 0; index < 2; index++) {
            basic.showString("Yes Wins!")
            basic.showIcon(IconNames.SmallDiamond)
            basic.showIcon(IconNames.SmallSquare)
            basic.showIcon(IconNames.Diamond)
            basic.showIcon(IconNames.Square)
            for (let index = 0; index < 4; index++) {
                basic.showIcon(IconNames.Chessboard)
                basic.showLeds(`
                    # . # . #
                    . # . # .
                    # . # . #
                    . # . # .
                    # . # . #
                    `)
            }
        }
    } else if (NoOption_2 == YesOption_1) {
        for (let index = 0; index < 2; index++) {
            basic.showString("TIE!")
            basic.showIcon(IconNames.SmallDiamond)
            basic.showIcon(IconNames.SmallSquare)
            basic.showIcon(IconNames.Diamond)
            basic.showIcon(IconNames.Square)
            for (let index = 0; index < 4; index++) {
                basic.showIcon(IconNames.Chessboard)
                basic.showLeds(`
                    # . # . #
                    . # . # .
                    # . # . #
                    . # . # .
                    # . # . #
                    `)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (NoOption_2 > YesOption_1) {
        for (let index = 0; index < 2; index++) {
            radio.sendString("No wins!")
            radio.sendString("No(Option 2)")
            radio.sendNumber(NoOption_2)
            radio.sendString("Yes(Option 1)")
            radio.sendNumber(YesOption_1)
        }
    } else if (YesOption_1 > NoOption_2) {
        for (let index = 0; index < 2; index++) {
            radio.sendString(" Yes wins!")
            radio.sendString("No(Option 2)")
            radio.sendNumber(NoOption_2)
            radio.sendString("Yes(Option 1)")
            radio.sendNumber(YesOption_1)
        }
    } else if (NoOption_2 == YesOption_1) {
        for (let index = 0; index < 2; index++) {
            radio.sendString("TIE")
            radio.sendString("No(Option 2)")
            radio.sendNumber(NoOption_2)
            radio.sendString("Yes(Option 1)")
            radio.sendNumber(YesOption_1)
        }
    }
})
let YesOption_1 = 0
let NoOption_2 = 0
radio.setGroup(117)
NoOption_2 = 0
YesOption_1 = 0
