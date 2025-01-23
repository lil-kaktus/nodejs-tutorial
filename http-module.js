const http = require('http')
const port = 3000;

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to the Home Page !')
    }
    if(req.url === '/about'){
        res.end('Hi ! My Name is (what ?) my name is (who ?) my names is (tchikitchiki slim shady)')
    }
    res.end(`<h1>Oops</h1>
    <p>It seems like this page isn't available !</p>
    <a href="/">Go back to home page</a>`)
})

server.listen(port)