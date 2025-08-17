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