// CREATE A SERVER TO SEE IN BROWSER
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/ab') {
        res.end('WELCOME FROM ABOUT PAGE')
    } else if (req.url === 'ab') {
        res.end('ABOUT pg')
    }
});
server.listen(2000);

