console.log("uu")
arr = [

    "quang",
    "hoan",
    "joker",
    "batman"
]

var m = arr.map((item, index) => {

    //console.log(index, item)
    return item
    //item
})

var n = arr.forEach((item, index) => {

    console.log(item, index + 10)
    return item
})

console.log(m)
console.log(typeof n)
console.log("this is arr", arr)

function foo() {
    var variable1

    variable1 = 5
    variable2 = 6
    return variable1 + variable2;
}
console.log(foo());     // NaN
console.log(variable2); // 6?!?!?!