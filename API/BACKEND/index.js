const express = require ('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/register', (req, res) => {
    let {name} = req.query;
    console.log(req.query);
    res.send(`get request success ${name}`);
});

app.post('/register', (req, res) => {
    let {name} = req.body;
    console.log(req.body);
    res.send(`post request success ${name} ${req.body.password}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});