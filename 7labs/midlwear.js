const express = require('express'); 
const { url } = require("inspector");
const router = require('./router');


const HOST = '127.0.0.1';
const app = express();
const PORT = 5000;

express.static('publick')

app.use('/', router)
app.use(function(err,req,res,next){
    res.send(400, 'Bad Request')
})

server.listen(PORT, () =>{
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

