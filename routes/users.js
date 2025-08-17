// FOR MONGODB INSTALL 
// STEP 1 INSTALL MONGODB
// STEP 2 INSTALL MONGOOSE.JS IN TERMINAL
// STEP 3  MAKE SCHEMA
// STEP 4 CREATE MODEL AND EXPORT

// const mongoose=require('mongoose');
// SET UP HUA HAI .. ISKA MATLAB DATABASE MEIN CREATION HO JAYEGA --practiceKaro NAAM S DATABASE BAN JAYEIGA
// mongoose.connect('mongodb://127.0.0.1:27017/practiceKaro');


// FOR THE DOCUMENT COLLECTION K ANDAR KI DETAILS KYA KYA HONGE USME--
//  const userSchema=mongoose.Schema({
//   username:String,
//   name:String,
//   age:Number
// });

// YE BANATA HAI COLLECTION (naam)
// module.exports=mongoose.model("user",userSchema); 



//  INTERMEDIATE MONGODB--
    // 1. HOW DO I FIND DOCUMENTS WHERE AN ARRAY FILED CONTAINS ALL OF A SET OF VALUES?- index.js mein line 72 /find
    // 2. HOW CAN I SEARCH FOR DOCUMENTS WITH A SPECIFIC DATE RANGE IN MONGOOSE?-
    // 3. HOW CAN I FILTER DOCUMENTS BASED ON THE EXISTENCE OF A FIELD IN MONGOOSE?--
    // 4. HOW CAN I FILTER DOCUMENTS BASED ON A SPECIFIC FIELD'S LENGTH IN MONGOOSE?-- 
// const mongoose=require("mongoose");
// mongoose.connect('mongodb://127.0.0.1:27017/InterData');

// const mongoSchema=mongoose.Schema({
//   username:String,
//   age:Number,
//   description:String,
//   categories:{
//     type:Array,
//     default:[]
//   },
//   dateCreated:{
//     type:Date,
//     default:Date.now()
//   }
// });
// module.exports =mongoose.model("userData",mongoSchema)






// FOR THE REGISTER , LOGIN ,LOGOUT KAR NA WITH THE HELP OF SOME PACKAGE AND CODES 
// const mongoose=require('mongoose');
// const plm =require('passport-local-mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/testendgame2');
// const userSchema=mongoose.Schema({
//   username:String,
//   password:String,
//   secret:String
// });

// userSchema.plugin(plm);
// module.exports=mongoose.model('user',userSchema)







//   FOR THE DATA ASSOCIATION USER OR POST KO PATA RAHYE KI UNHE KISNE BANAYA HAI ,,POST KO PATA RAHE KI 
// KONSE USER N USHE BANAYA HAI , OR USER KO PATA RAHE USNE KONSI POST BANAI HAI ,---LIKE THE INSTAGRAM...+
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/Association')

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   posts: [{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'Post'
//   }],
//   dp: {
//     type: String, // image URL
  
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   fullName: {
//     type: String,
//     required: true
//   }
// });

// module.exports = mongoose.model('User', userSchema);



// const mongoose=require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/passportLogin')


// const userSchema= mongoose.Schema({
//   username:String,
//   email:String,
//   password:String,
//   age:Number

// });

// module.exports=mongoose.model('user',userSchema)






// FOR THE DATA ASSOCIATION --POST AND USER
// const mongoose=require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/postUser');


// const userSchema=mongoose.Schema({
  // userName:String,
//   fullName:String,
//   posts:[{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'post'
//   }],
//   date:{
//     type:Date,
//     default: Date.now()
//   },
//   age:Number
// })
// module.exports=mongoose.model('User',userSchema)











// FOR THE LOGIN,REGISTER AND LOGOUT PRACTICE--
// const mongoose=require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/learningLogin')



// const userSchema=mongoose.Schema({
//   username:String,
//   name:String,
//   age:Number,
//   email:String,
//   password:String
// });


// module.exports=mongoose.model('user',userSchema)







// MINOR PROJECT 1-

const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/project-1')

const userSchema=mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  age:Number,
  posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'post'
  }]
});


module.exports=mongoose.model('user',userSchema)