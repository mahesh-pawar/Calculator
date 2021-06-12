// https://stackoverflow.com/questions/16631064/declare-multiple-module-exports-in-node-js
var http = require('http');
const url = require('url');

//var { add, subtract, qube } = require('./Calculator');
var formula = require('./Calculator');

var server = http.createServer(function (req, res) {
    const page_url = url.parse(req.url, true).pathname
    var query_param = url.parse(req.url, true).query;
    if (page_url === '/add') {
        const sum = formula.add(query_param.number1, query_param.number2)
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`The Sum of two number is - ${sum}`)
        res.end()
    } else if (page_url === '/subtract') {
        const subtract = formula.subtract(query_param.number1, query_param.number2)
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`The Subtract of two number is - ${subtract}`)
        res.end()
    } else if (page_url === '/multiply') {
        const multiply = formula.multiply(query_param.number1, query_param.number2)
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`The Multiply of two number is - ${multiply}`)
        res.end()
    } else if (page_url === '/divide') {
        const divide = formula.divide(query_param.number1, query_param.number2)
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`The divide of two number is - ${divide}`)
        res.end()
    } else if (page_url === '/qube') {
        const qube = formula.qube(query_param.number1, query_param.number2)
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`The qube of a number is - ${qube}`)
        res.end()
    } else if (page_url === '/square') {
        const square = formula.square(query_param.number1)
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`The square of a number is - ${square}`)
        res.end()
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('Page not found!')
        res.end()
    }
});

server.listen(3000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is listning.");
    }
});
