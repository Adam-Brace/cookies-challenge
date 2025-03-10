const express = require('express')
var cookieParser = require('cookie-parser')
const app = express()
const port = 3000

var opts = {
    maxAge: 900000,
    httpOnly: true,
    sameSite: 'strict',
  };

app.use(cookieParser({}))

app.get('/login/:name', (req, res) => {
    res.cookie('name', req.params.name, opts);
    //res.send('Hello world!!!');
    res.redirect('/hello');
})

app.get('/hello', (req, res) => {
    res.send(`Welcome ${req.cookies.name}!`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})