const fs = require('fs');
const http = require('http'); //server capabilities 
const url = require('url');

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');


////File Practice
/*
const text = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', text)


//non-blocking
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if (err) return console.log('Error!')
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2)
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            console.log(data3);
       
        fs.writeFile('.txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
            console.log('file has been written')
        })
    })
 })
})

console.log('will read file')
*/

///////////////////////////////////
///Creating a Server
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);
const server = http.createServer((req, res) => {
    console.log(req.url)
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        res.end(tempOverview)
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT')
    } else if (pathName === '/api') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        res.end(data)


        console.log('API')
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hellooo'
        });
        res.end('<h1>This page could not be found</h1>')
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on port 8000')
})