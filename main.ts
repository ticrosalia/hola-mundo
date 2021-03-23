input.onButtonPressed(Button.A, function () {
    basic.showString("Hola Mundo")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
let CuentaAtras = 9
for (let index = 0; index < 9; index++) {
    basic.showString("" + (CuentaAtras))
    CuentaAtras = CuentaAtras - 1
    basic.pause(1000)
}
basic.showString("")
