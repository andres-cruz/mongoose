var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo');

// User
const userSchema = new mongoose.Schema({
    email: String,
    name: String
});

const User = mongoose.model('User', userSchema);

// Post
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Post = mongoose.model('Post', postSchema);

// const newUser = new User({
//     email: 'charlie@brown.edu',
//     name: 'Charlie Brown'
// });

// newUser.save((err, user) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// const newPost = new Post({
//     title: 'Reflections on Apples',
//     content: 'They are delicious'
// });

// newPost.save((err, post) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });