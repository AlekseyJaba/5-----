const http = require("http");

const HOST = '127.0.0.1';
const PORT = process.env.PORT || 5000;
var client = {}
var count = []
function err(res){
    res.writeHead(400, {'localhost':'text/plain'})
    res.end("400 Bad")
}
const server = http.createServer((req, res) =>{
    const url = req.url
    const name = req.headers['user-agent']
    const method = req.method
    switch(url){
        
        case '/':
            if(method == 'GET'){
                res.writeHead(200, {'Contant-type': 'text/plain'})
                res.end("Hello client")
            }
            else{
                err(res)
            }
            break
        case '/comments':
            if(method == 'POST'){
                res.writeHead(200, {'Contant-type': 'text/plain'})
                let body = ''
                req.on('data', chunk => {
                    body += chunk
                })
                req.on('end', () => {
                    count.push(body)
                    console.log(count)
                    res.end(JSON.stringify(count))
                })
            }
            else{
                err(res);
            }
            break
        case '/stats':
            if(method == 'GET'){
                res.writeHead(200, {'Content-type': 'text/html'})
                let body = ''
                req.on('data', chunk => {
                    body += chunk
                })
                req.on('end', () => {
                    let first_HTML=
                    '<table>'+ 
                        '<tr>' +
                            '<td>Name</td>' +
                            '<td>Count connect</td>' +
                        '</tr>';
                    let secound_HTML = ''
                    if(client[name]){
                        client[name]+=1
                    }else{
                        client[name] = 1
                    }
                    for (const key in client){
                        secound_HTML += 
                        `<tr> 
                            <td>${key}</td>
                            <td>${client[key]}</td>
                        </tr>`
                    }
                    let otvet = first_HTML + secound_HTML+'</table>'
                    res.end(otvet)
                })
            }
            else{
                err(res)
            }
            break
        default:
            err(res)
    }

});
server.listen(PORT, () =>{
    console.log(`Server is running on http://${HOST}:${PORT}`)
})

 