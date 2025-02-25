// const names = require('./names')
// const utils = require('./utils')

// utils.sayHello("Rudolf")
// utils.sayHello(names.pitbull)
// utils.sayHello(names.bob)

// utils.addNums(25, 35)

// const os = require('os')

// const user = os.userInfo()
// console.log(user)
// const currentOs = {
//     name: os.type(),
//     totalMemory: os.totalmem(),
//     freeMemory: os.freemem(),
//     release: os.release(),
//     uptime: () => console.log(`The system uptime is ${os.uptime()} seconds.`)
// }

// const path = require('path')

// const filePath = path.join('/others/','modules','module.js')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'others','modules','module.js')
// console.log(absolute)


//SYNC READ/WRITE FILE
/*const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./others/test.txt','utf-8')
const second = readFileSync('./others/other.txt','utf-8')

console.log(first,second)

writeFileSync('./others/function-result.txt', `Here are the results :
    (1st file) ${first},
    (2nd file) ${second}.\n`)*/

//ASYNC READ/WRITE FILE

// const fs = require('fs')
// const path = require('path')

// const file1path = path.resolve(__dirname, 'others','test.txt')
// const file2path = path.resolve(__dirname, 'others','other.txt')

// fs.readFile(file1path,'utf-8',(err,result) => {
//     if(err) {console.log(err); return;};
    
//     const first = result

//     fs.readFile(file2path,'utf-8',(err,result) => {
//         if (err) {console.log(err); return;}
        
//         const second = result;

//         fs.writeFile('./others/function-result.txt',
//             `first file content is : ${first}\nsecond file content : ${second}`,
//             (err,result) => {
//                 if (err) {console.log(err); return;};

//                 console.log(result)
//             }
//         )
//     })
// })

// const map1 = new Map()
// map1.set("hello", 1)
// map1.set("goodbye", 2)

const os = require('os')
// const fs = require('fs')

const begin = os.uptime()

// fs.readFile('./others/other.txt','utf-8',(err, result) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('here is the result : ' + result)
// })

process.on('exit', () => {
    console.log(`You used the program during ${os.uptime() - begin}s`)
})

//UTILS

const utils = require('./utils.js')

// console.log(utils.biggestPalindrom("abadaabcbaabdca"))
// console.log(utils.zigzagConversion("abcdefgh",3))

//SETUP PROMISES

const {readFile, writeFile, writeFileSync} = require('fs')//.promises
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

function writeBigFile() {
    for(let i = 0; i <= 1000; i++){
        writeFileSync('./others/big.txt',`Hello, ${i} !`,{ flag: "a"})
    }
}

writeBigFile()

const start = async() => {
    try{
        const first = await readFilePromise('./others/other.txt', 'utf-8')
        const second = await readFilePromise('./others/test.txt', 'utf-8')
        await writeFilePromise('./others/final.txt', `FINAL FILES : \n"${first}" ;\n"${second}".`)
    }
    catch(err){
        console.log(err)
    }
    // finally{
    //     console.log("read and write file finished !")
    // }
}

start()

// const getText = function (path){
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err,data) => {
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./others/other.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log('response received ! name : ' + name + ' ; id : ' + id)
})

customEmitter.emit('response', 'cactus', 22)

// console.log(utils.getSideByAngle(2,2,90))

// const buffer = new Buffer.from('Arthurrr','utf-8')

// const data = buffer.toJSON().data.map((x) => String.fromCharCode(x)).join('')

// console.log(buffer)
// console.log(buffer.toJSON())
// console.log(data)

//UNLINK

// const {unlink, readFileSync} = require('fs')

// const path1 = './others/test.txt';

// writeFileSync(path1, 'hello')
// console.log(readFileSync(path1,'utf-8'))

// unlink(path1,(err) => {
//     if(err)throw err;
//     console.log('succefully deleted ' + path1)
// })
// ERRORS !

const {createReadStream} = require('fs')

const stream = createReadStream('./others/big.txt')

stream.on('data', (result) => {
    console.log(result.toJSON().data.map((x) => String.fromCharCode(x)).join(''))
})