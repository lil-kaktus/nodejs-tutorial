const http = require('http')

const server = http.createServer((req,res) => {
    console.log("request event")
    if(req.url === "/"){
        res.end('Localhost : a new experience.')
    }
    else if(req.method === "POST" && req.url === '/save'){
        let body = ""

        req.on("data",(chunk) => {
            body += chunk
        })

        req.on("end", () => {
            res.statusCode = 200
            res.setHeader("Content-Type","text/plain")

            res.end(`Here is the user data ${body}`)
        })
    }
    else if(req.method === "GET" && req.url === '/home'){
        res.statusCode = 200
        res.setHeader("Content-Type","text/plain")
        res.end('hello, welcome to the home page !')
    }
    else if(req.url === '/about'){
        for(let i = 0; i <= 10; i++){
            for(let j = 0; j <= 10000; j++){
                console.log(`I: ${i}; J: ${j}`)
            }
        }
        res.end('task succefully done' + '\n' + 'hello, welcome to the about page !')
    }
    else{
        res.statusCode = 404
        res.end("page not found noob")
    }
}).listen(3000)