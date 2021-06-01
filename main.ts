input.onButtonPressed(Button.A, function () {
    basic.showString("Jeon")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
