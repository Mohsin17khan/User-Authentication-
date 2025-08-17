const express = require('express')
const router = express.Router()
const userModel = require('./users')
const postModel = require('./post')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//FOR THE FORM ROUTE--
router.get('/', function (req, res) {
    res.render('form');
})

//FOR THE PROFILE ROUTE-- 
router.get('/profile', isLoggedIn, async function (req, res) {
    let user = await userModel.findOne({ email: req.user.email })
    await user.populate('posts')
    res.render('profile', { user })
})


//FOR THE REGISTER ROUTE--
router.post('/register', async function (req, res) {
    const { username, age, name, password, email } = req.body
    let user = await userModel.findOne({ email })
    if (user) return res.redirect('/profile')

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            let user = await userModel.create({
                username,
                name,
                age,
                password: hash,
                email
            });
            let token = jwt.sign({ email: email, userid: user._id }, "shhhhhhhhhh");
            res.cookie('token', token)
            res.redirect('/profile')

        })
    })
});

//FOR THE LOGIN FORM ROUTE--
router.get('/login', function (req, res) {
    res.render('login')
});

//FOR THE LOGIN ROUTE--
router.post('/login', async function (req, res) {
    const { email, password } = req.body
    let user = await userModel.findOne({ email })
    if (!user) return res.redirect("/")

    bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
            let token = jwt.sign({ email }, "shhhhhhhhhh");
            res.cookie('token', token)
            res.redirect('/profile')
        }
        else {
            res.redirect('/login')
        }
    })


})

//FOR THE LOGOUT ROUTE--
router.get('/logout', function (req, res) {
    res.cookie('token', "")
    res.redirect('/')
})


router.post('/post', isLoggedIn, async function (req, res) {
    const { content } = req.body
    let user = await userModel.findOne({ email: req.user.email })
    let post = await postModel.create({
        user: user._id,
        content: content
    });
    user.posts.push(post._id)
    await user.save()
    res.redirect('/profile')
})



router.get('/like/:id',isLoggedIn, async function (req, res) {
    let post = await postModel.findOne({ _id: req.params.id }).populate('user')
    if (post.likes.indexOf(req.user.userid) === -1) {
        post.likes.push(req.user.userid)
    }
    else{
        post.likes.splice(post.likes.indexOf(req.user.userid),1)
    }
    await post.save()
    res.redirect('/profile')

})
router.get('/edit/:id',isLoggedIn, async function (req, res) {
    let post = await postModel.findOne({ _id: req.params.id }).populate('user')
    res.render('edit',{post})
});

router.post('/update/:id',isLoggedIn, async function (req, res) {
    let post = await postModel.findOneAndUpdate({ _id: req.params.id },{ content:req.body.content})
    res.redirect('/profile')
});

router.get('/delete/:id',isLoggedIn, async function (req, res) {
    let post = await postModel.findOneAndDelete({ _id: req.params.id })
    res.redirect('/profile')
});


//FOR THE PROTECTED ROUTE--
function isLoggedIn(req, res, next) {
    if (!req.cookies.token || req.cookies.token === '') {
        return res.redirect('/login')
    }
    else {
        let data = jwt.verify(req.cookies.token, "shhhhhhhhhh")
        req.user = data
    }
    next()

}
module.exports = router
