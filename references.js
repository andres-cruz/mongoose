var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo_2');

// Post
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Post = mongoose.model('Post', postSchema);

// User
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

const User = mongoose.model('User', userSchema);

// Post.create({
//     title: 'About travels and life',
//     content: 'blah bla blah'
// }, (err, post) => {
//     if(err) {
//         console.log(err);
//     } else {
//         User.findOne({email: 'bob@gmail.com'}, (err, foundUser) => {
//             if(err) {
//                 console.log(err);
//             } else {
//                 foundUser.posts.push(post);
//                 foundUser.save((err, data) => {
//                     if(err) {
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                     }
//                 });
//             }
//         });
//     }
// });

// User.create({
//     email: 'bob@gmail.com',
//     name: 'Bob Belcher'
// });

User.findOne({email: 'bob@gmail.com'}).populate('posts').exec((err, user) => {
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    }
});
 