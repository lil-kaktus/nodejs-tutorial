const http = require('http')
const url = require('url')
const PORT = 8080

//BASIC SERVER

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;

//     if(req.url === '/'){
//         res.end(`
//             <h1>Welcome to the home page !</h1>
//             <a href=${req.url + 'about'}>About Us</a>
//             `)
//     }
//     else if(req.url === '/about'){
//         res.end("Welcome to the About page ! Bonjour je m'appelle moi.")
//     }
//     else{
//         res.statusCode = 404
//         res.end("Error " + res.statusCode + " : Page Not Found")
//     }
// })

// server.listen(PORT, () => {
//     console.log('Server is running on port ' + PORT)
// })

//QUERY PARAMETERS

const server = http.createServer((req,res) => {
    res.statusCode = 200

    const parsedUrl = url.parse(req.url, true)

    //console.log(parsedUrl)

    const pathname = parsedUrl.pathname
    const query = parsedUrl.query
    let queryList = ""

    for(let property in query){
        queryList += `"${property}" query value is ${query[property]}.\n`
    }

    if(pathname === '/'){
        res.write(`<h1>Welcome to the home page !</h1><a href=${req.url + "about"}>About Us</a>`)
    }
    else if(pathname === "/about"){
        res.write(`<h1>Welcome to the About page !</h1>`
            + "<pre>" + queryList + "</pre>")
    }
    else{
        res.statusCode = 404
        res.write('Page Not Found')
    }
})

server.listen(PORT)

server.on('request', (req,res) => {
    res.write('<p>hello ! event listener here !</p>')
    res.end()

    console.log('event listener emitted & received !')
})