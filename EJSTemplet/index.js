const express = require ('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
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

// app.get('/ig/:username', (req, res) => {
//     let follower_name =  ["ali" , "uzair" , "ahmad" , "hammad"]
//     let username = req.params.username;
//     // console.log(username)
//     res.render('instagram', {username , follower_name})
// })

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    // console.log(username);
    let instadata = require("./data.json");
    let data =instadata[username];
    console.log(data);
    if(!data){
        res.send("User not found");
    }else{
        res.render("instagram.ejs", {data})
    }
})
app.listen(port, () => {
    console.log(`This port listening at ${port}`)
})