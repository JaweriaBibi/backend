const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: 1,
        username : 'John Doe',
        title: 'First Post',
        content: 'This is the first post',
    },
    {
        id: 2,
        username : 'Jane Doe',
        title: 'Second Post',
        content: 'This is the second post',
    },
    {
        id: 3,
        username : 'John Doe',
        title: 'Third Post',
        content: 'This is the third post',
    }
]

app.get('/post', (req, res) => {
    // res.send('Hello World!')
    res.render('post', {posts: posts});
})

// app.get('/post/new', (req, res) => {
//     res.render('newPost');
// })

app.get('/post/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    const post = posts.find(post => post.id === parseInt(id));
    console.log(post);
    res.render('postDetail', {post : post});
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});