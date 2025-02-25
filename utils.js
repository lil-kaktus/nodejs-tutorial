const sayHello = (name) => {
    console.log(`Hello, ${name} !`)
}

module.exports.sayHello = sayHello

function addNums(a, b){
    console.log(`The sum is : ${a + b}`)
}

module.exports.addNums = addNums;

function biggestPalindromicSubstring(s){
    if(typeof(s) !== "string"){
        return new Error("Unavailable data type !")
    }
    
    const l = s.length
    
    if(l === 0){
        return null;
    }
    else if(l === 1){
        return s[0]
    }

    let biggest = "";

    for(let i = 0; i < l; i++){
        for(let j = 0; j <= 1; j++){
            let min = i;
            let max = i + j;

            while(min >= 0 && max < l && s[min] === s[max]){
                min--;
                max++;
            }
            if(max - min > biggest.length){
                biggest = s.slice(min + 1, max)
            }
        }
    }
    return biggest;
}

module.exports.biggestPalindrom = biggestPalindromicSubstring

function zigzagConvert(s, numRows) {

    if(s.length == 1){
        return s
    }

    let matrix = []
    for (let i = 1; i <= numRows; i++) {
        matrix.push("")
    }

    let l = s.length
    let y = 0;
    let index;

    for (let i = 0; i < l; i++) {

        if (y > numRows - 1) {
            index = matrix.length - (y - (numRows - 1)) - 1
        }
        else {
            index = y
        }

        matrix[index] += s[i]

        if (y < (numRows * 2) - 3) {
            y++
        }
        else {
            y = 0;
        }
    }
    return matrix.join('');
};

module.exports.zigzagConversion = zigzagConvert

function randIndex(array){
    return array[Math.round(Math.random() * (array.length - 1))]
}

module.exports.randIndex = randIndex

function shuffleArray(array){
    return array.sort((a, b) => 0.5 - Math.random());;
}

module.exports.shuffleArray = shuffleArray

function atoi(s, min, max){
    let i = 0;
    let sign = 1;
    let answer = 0;
    const MIN = min === undefined ? -(2**31) : min
    const MAX = max === undefined ? 2**31 - 1 : max

    while(s[i] === " " && i < s.length){
        i++
    }

    if((s[i] === "+" || s[i] === "-") && i < s.length){
        sign = s[i] == "-" ? -1 : 1;
        i++
    }

    while(i < s.length && s[i] >= "0" && s[i] <= "9"){
        answer = answer * 10 + (s[i].charCodeAt(0) - "0".charCodeAt(0))
        i++
    }

    if(answer * sign >= MAX) return MAX;
    if(answer * sign <= MIN) return MIN;

    return answer * sign
}

module.exports.atoi = atoi

function getSideByAngle (a,b,angle){
    return Math.sqrt(a**2 + b**2 - (2 * a * b * Math.cos(angle)))
}

module.exports.getSideByAngle = getSideByAngle