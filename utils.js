const sayHello = (name) => {
    console.log(`Hello, ${name} !`)
}

module.exports.sayHello = sayHello

function addNums(a, b){
    console.log(`The sum is : ${a + b}`)
}

module.exports.addNums = addNums;