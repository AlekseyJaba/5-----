const express = require('express');
const router = express.Router;

let client = {};
let com = [];
let test = '123456789@;,.?'

router.get('/', (req, res, next) => {
    res.send('<h1>Hello words</h1>');
    
})

router.get('/stats', (req, res) => {
    req.body = push(data)
    let first = `<table><td><tr>Name</tr><tr>Count connect</tr></td>`;
    let secound = '';
    client[name] ? client[name] += 1 : client[name] = 1;
    for(key in client){
        secound += `<td><tr>${key}</tr><tr>${client[key]}</tr></td>`;
    }
    res.send(first + secound + '</table>');
})

router.post('/comments', (req,res) => {
    req.body = push(data);
    com.push(req.body);
    console.log(com);
    res.send(JSON.stringify(com));
});



module.exports = router;
