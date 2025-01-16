const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');

const path = require('path');
app.set('views', path.join(__dirname, 'views'))


app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/roledice', (req, res) => {
    // let diceRoll = Math.floor(Math.random() * 6) + 1;
    res.render('roledice')
})

app.get('/ig/:username', (req, res) => {
    let follower_name =  ["ali" , "uzair" , "ahmad" , "hammad"]
    let username = req.params.username;
    // console.log(username)
    res.render('instagram', {username , follower_name})
})

app.listen(port, () => {
    console.log(`This port listening at ${port}`)
})