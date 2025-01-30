const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


const methodoverride = require('method-override');
app.use(methodoverride('_method'));


const { v4: uuidv4 } = require('uuid');
uuidv4();

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username : 'John Doe',
        title: 'First Post',
        content: 'This is the first post',
    },
    {
        id: uuidv4(),
        username : 'Jane Doe',
        title: 'Second Post',
        content: 'This is the second post',
    },
    {
        id: uuidv4(),
        username : 'John Doe',
        title: 'Third Post',
        content: 'This is the third post',
    }
]

app.get('/post', (req, res) => {
    // res.send('Hello World!')
    res.render('post', {posts: posts});
})

app.get('/post/new', (req, res) => {
    res.render('postcreate');
})

app.get('/post/:id', (req, res) => {
    const { id } = req.params;
    // console.log(id)
    const post = posts.find(post => post.id === id);
    // console.log(post);
    res.render('postDetail', {post : post});
})

app.post('/post', (req, res) => {
    let { title, content, username } = req.body;
    let id = uuidv4();
    posts.push({id, title, content, username});
    res.redirect('/post');
})


app.patch('/post/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = posts.find(post => post.id === id);
    post.title = title;
    post.content = content;
    res.redirect('/post');
})


app.get('/post/:id/edit', (req, res) => {
    const { id } = req.params;
    const post = posts.find(post => post.id === id);
    res.render('postedit', {post : post});
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});