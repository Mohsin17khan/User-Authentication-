// var express = require('express');
// var router = express.Router();



// const userModel=require("./users")
/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index');
// });

// FOR CREATE-- WITH THE HELP  OF MONGODB 
// router.get('/create', async function(req, res) {
// const createUser=await userModel.create({
// username:"Mohsin Khan",
// name:"Azar Khan",
// age:19
// });
// res.send(createUser)
// });


// FOR FIND ALL USERS DETAILS IN THE DATABASE
// router.get('/find',async function (req,res) {
// const findUser=await userModel.find()
// res.send(findUser)
// });

// FOR FIND ONE DETAILS IN THE DATABASE
// router.get('/findOne',async function(req,res) {
// const findUserOne=await userModel.findOne({
// username:'Mohsin Khan'
// });
// res.send(findUserOne);
// });

// FOR THE DELETE THE USER--
// router.get('/delete',async function (req,res) {
// const deleteUser=await userModel.findOneAndDelete({
// username:'Mohsin Khan'
// });
// res.send(deleteUser)
// });

// module.exports = router;







// FOR THE CREATE THE DATA IN THE DOCUMENTS OF THE COLLECTION AND FIND THE PARTICULAR DATA 
// const userDatas=require('./users')
// router.get('/',function(req,res){
//   res.send("welcome")
// });

// router.get('/create',async function (req,res) {
//   let userInfo=await userDatas.create({
//     username:"Azar Ali khan",
//     age:50,
//     description:'Hey,✋i m Azar Ali khan pursuing BCA from Meerut University ',
//     categories:['Software Engineer']

//   });
//   res.send(userInfo)

// });


// router.get('/find',async function (req,res) {
// AGR HAM FIND KAR RAHE HO OR SMALL ,CAPITAL LETTER S SEARCH KARE TO OUTPUT NHI AAIGA KYU KI FIND CASE 
//SENSITIVE HAI IS LIYE RegExp  KA USE KARTE HAI TAKI SEARCH HO SAKE BINA KI CONFILICT K--
//  OR JO YE HAI ^ KA MTLB SURU AISA HONA CHAHIYE OR $ KA MATLAB KHTM AISA HONA CHAHIYE--
//  let regex=new RegExp("^azar Ali khan$",'i')
//   let findUser=await userDatas.find({
//     username:regex,
//   });
//   res.send(findUser);
//   });



// FOR THE FIND ON THE BASIS OF categories $all means sab k sab data mein dekho
// router.get('/findCategory',async function (req,res) {
//   let category=await userDatas.find({categories: {$all:['cloud engineer']}})
//   res.send(category);

// });

// FOR THE FIND DATA ON THE BASIS OF DATES-- $gte means greater then or equal to , $lte means less then or equal to---
// router.get('/findDate',async function (req,res) {
//   var date1=new Date('2025-7-27')
//   var date2=new Date('2025-7-28')
//   let date=await userDatas.find({dateCreated:{$gte:date1,$lte:date2}});
//   res.send(date);
// });
// module.exports=router





// FOR THE REGISTER , LOGIN ,LOGOUT KAR NA WITH THE HELP OF SOME PACKAGE AND CODES 
// YE TARIKA HAI PASSPORT.JS S KARNE KA EK DUSRA TARIKA BI HAI AUTHENTICATION VALA...
// var express = require('express');
// var router = express.Router();
// const userModel = require('./users')
// const passport = require('passport')
// const localStrategy = require('passport-local')

// passport.use(new localStrategy(userModel.authenticate()));

// router.get('/', function (req, res) {
//   res.render('index')
// });

// router.get('/profile', isLoggedIn, function (req, res) {
//   res.render('profile')
// });

// router.post('/register', function (req, res) {
//   var userData = new userModel({
//     username: req.body.username,
//     secret: req.body.secret
//   });
//   userModel.register(userData, req.body.password)
//     .then(function (registereduser) {
//       passport.authenticate("local")(req, res, function () {
//         res.redirect('/profile')
//       });
//     })
// });


// router.post('/login', passport.authenticate('local', {
//   successRedirect: '/profile',
//   failureRedirect: '/'
// }), function (req, res) { })

// router.get('/logout', function (req, res, next) {
//   req.logout(function (err) {
//     if (err) return next(err)
//     res.redirect('/')
//   });
// });

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next()
//   }
//   res.redirect('/')
// }
// module.exports = router;








//   FOR THE DATA ASSOCIATION USER OR POST KO PATA RAHYE KI UNHE KISNE BANAYA HAI ,,POST KO PATA RAHE KI 
// KONSE USER N USHE BANAYA HAI , OR USER KO PATA RAHE USNE KONSI POST BANAI HAI ,---LIKE THE INSTAGRAM...
// const express=require('express')
// const router=express.Router()
// const userModel=require('./users')
// const postModel=require('./post');
// const post = require('./post');


// router.get('/',function(req,res){
//   res.send('WELCOME')
// });

// router.get('/create', async function(req,res){
// const createdUser=await  userModel.create({
//     username: 'harsh '  ,
//     password: 'khan',
//     posts: [],
//     email: 'mk3128@gmail.com',
//     fullName: 'Azar ali khan'
//   });
//   res.send(createdUser)

// });


// router.get('/post', async function(req,res){
//   const createPost=await postModel.create({
//     postText:'hello everyone kaise ho sare',
//     user:'688732833f2e03e3b36cca97' // ye post is id vale user n banaai hai-
//   });
//   let user= await userModel.findOne({_id:'688732833f2e03e3b36cca97'})
//   user.posts.push(createPost._id) // post k andar user ki id dal rahe hai pata chal sake kisne banai hai post 
//   await user.save()
//   res.send('done')
// });


// // for all post show and andar ki details--
// router.get('/allUser', async function(req,res){
//   let user=await userModel
//   .findOne({_id:'688732833f2e03e3b36cca97' })
//   .populate('posts')
//   res.send(user)
// })


// module.exports=router;









//  FOR THE JWT LOGIN REGISTER AND LOGOUT ISME KYA HOTA HAI EK KEY MIL JATI HAI OR JAB JAB USER KUCH KARTA HAI TO 
// VO KEY COMPARE HOTI HAI THEN WORK HOTA HAI--
// const express=require('express')
// const router=express.Router()
// const userModel=require('./users');
// const bcrypt=require('bcrypt');
// const jwt=require('jsonwebtoken');



// router.get('/',function(req,res){
//   res.render('passport')
// });


// router.post('/create',  function(req,res){
//   let {username,email,password,age}=req.body;

//   bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash(password,salt,async (err,hash)=>{
//       createdUser=await userModel.create({
//         username,
//         email,
//         password:hash,
//         age

//       });
//       let token=jwt.sign({email},"khaaaaaaaaaaaaaaaan");
//       res.cookie('token',token)
//       res.send(createdUser)

//     })
//   });


// });

// router.get('/login', function(req,res){
//   res.render('login')
// });


// router.post('/login', async function(req,res){
// let user=await userModel.findOne({email:req.body.email})
// if(!user)return res.send("something is wrong")
// //  console.log(user.password,req.body.password)

// bcrypt.compare(req.body.password,user.password,function(err,result){
//   if(result){
//     let token=jwt.sign({email:user.email},"khaaaaaaaaaaaaaaaan");
//     res.cookie('token',token);
//     res.send("yes u can login")

//   }

// else{
//   res.send('something is wrong')
// }
//   console.log(result)
// })
// });



// router.get('/logout',function(req,res){
//   res.cookie('token','')
//   res.redirect('/')

// });
// module.exports=router








//  FOR THE DATA ASSOCIATION --USER AND POST-
// const express = require('express')
// const router = express.Router()
// const userModel = require('./users')
// const postModel = require('./post')



// router.get('/', function (req, res) {
//   res.send('hello')
// });


// router.get('/create', async function (req, res) {
//   let user = await userModel.create({
//     userName: 'azarKhan_48',
//     fullName: 'mohsin khan',
//     posts: [],
//     age: 20
//   });
//   res.send(user)
// });


// router.get('/post', async function (req, res) {
//   let post = await postModel.create({
//     postText: 'This is my new post ',
//     user: '6892f2051f95bc7119e65402',
//     description: 'hey everyone how r u',
//   });
//   let user = await userModel.findOne({ _id: '6892f2051f95bc7119e65402' })
//   user.posts.push(post._id)
//   await user.save()
//   res.send(user)
// });


// router.get('/allUser', async function (req, res) {
//   let user = await userModel
//     .findOne({ _id: '6892f2051f95bc7119e65402' })
//     .populate('posts')
//   res.send(user)
// });

// module.exports = router






// FOR THE LOGIN,REGISTER AND LOGOUT LEARNING PHASE--
// const express = require('express')
// const router = express.Router()
// const userModel = require('./users')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')


// router.get('/', function (req, res) {
//   res.render('form')
// });

// router.post('/register', function (req, res) {
//   const { username, age, name, password, email } = req.body

//   bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash(password, salt, async function (err, hash) {
//       let createdUser = await userModel.create({
//         username,
//         age,
//         name,
//         email,
//         password: hash
//       });


//       // JWT EK DIGTTAL PASS KI TARAH HOTA HAI JO SERVER TUMHE LOGIN K BAAD DETA HAI, AUR TUM HAR REQUEST KE SATH LE 
//       // JAATE HO TAAKI SERVER TUMHE PEHCHAAN SAKE..
//       // JAB TUM LOGIN KARTE HO SERVER TUMHARE LIYE EK JWT BANATA HAI ,
//       // TUM IS TOKEN KO APNE BROWSER ME SAVE KARTE HO ,AS AN COOKIE,LOCALSTROAGE.
//       let token = jwt.sign({ email }, "shhhhhhhhhh");
//       res.cookie('token', token)
//       res.send(createdUser);

//     });
//   });


// });

// router.get('/login', function (req, res) {
//   res.render('login')
// });

// router.post('/login', async function (req, res) {
//   // AGR USER LAGATT EMAIL DALEGA TO NULL HOGA ,AGR SHI HOGA TO USER MIL JAIGA
//   let user = await userModel.findOne({ email: req.body.email })
//   //  console.log(user)
//   if (!user) return res.send('404 u can not login ')


//   bcrypt.compare(req.body.password, user.password, function (err, result) {
//     if (result){
//       let token = jwt.sign({ email:user.email }, "shhhhhhhhhh");
//       res.cookie('token', token)
//       res.send("yes u can login")

//     }
//     else {
//       res.send('u can not login')
//     }
//   })

// })

// router.post('/logout', function (req, res) {
//   res.cookie('token', '')
//   res.redirect('/')
// })


// module.exports = router




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
