let A = 0
let X = 0
let Y = 5
let Z = 0
input.onButtonPressed(Button.A, function () {
    if (Z === 0){
        X += 1
        if (X >= 9) {
            X = 9
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Z === 0){
        X -= 1
        if (X <= 0) {
            X = 0
        }
    }
})
basic.forever(function () {
    console.log(A)
    if (Z === 0){
        basic.showNumber(X)
    }
    if (Z === 1){
        basic.showNumber(Y)
    }
    if (Z === 2) {
        basic.showLeds(`
        #####
        #####
        #####
        #####
        #####
        `)
    }
})
input.onButtonPressed(Button.AB, function () {
    Z = 1
    A = X
    if (A >= Y){
        Y += 2
    } else {}
    if (A <= Y){
        Y -= 1
    } else {}
    if (A === Y){
        Z = 2
    }
})