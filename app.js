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

const map1 = new Map()
map1.set("hello", 1)
map1.set("goodbye", 2)

console.log(map1.set("wassup", 3))