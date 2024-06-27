const express = require('express');
const app = express();

app.use('/users', (req, res, next)=> {
    console.log('prueba 2');
    res.send('<h1>Hello from the users page</h1>');
});

app.use('/', (req, res, next)=> {
    console.log('prueba 1');
    res.send('<h1>Hello from the main page</h1>');
});

app.listen(3000);