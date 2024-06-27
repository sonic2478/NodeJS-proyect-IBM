const http = require('http');

const server = http.createServer ((req,res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Username</title></head>');
        res.write('<body><h1>Write your username</h1><form action ="/create-user" method="POST"><input type="username" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Homework users</title></head>');
        res.write('<body><h1>List of users</h1></body>');
        res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
            console.log(body);
        });
        return req.on('end', () => {
            const parsedUser = Buffer.concat(body).toString();
            const user = parsedUser.split('=')[1];
            console.log(user);
            res.write('<html>');
            res.write('<head><title>User</title></head>');
            res.write(`<body><h1>Hello ${user}!</title></h1>`);
            res.write('</html>');
            return res.end();
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><h1>Hello from my first homework</title></h1>');
    res.write('</html>');
    res.end();
});
server.listen(3000);
