function foo(b) {
    var a = 5
    return a * b + 10
    // 18 x 5 = 90
    // 90 + 10 = 100
}

function bar(x) {
    var y = 3
    return foo(x * y) // 18
}

console.log(bar(6)) // Resultado final: 100