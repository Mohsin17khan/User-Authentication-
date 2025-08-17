// const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema({
//   postText: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   user:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'User'
//   },
//   date: {
//     type: String,
//     default: () => new Date().toLocaleDateString('en-IN') // e.g., 28/07/2025
//   },
//   time: {
//     type: String,
//     default: () => new Date().toLocaleTimeString('en-IN') // e.g., 12:30:00 PM
//   },
//   likes: {
//     type: Array,
//     default: []
//   }
// }, 
// {
//   timestamps: true // adds createdAt and updatedAt fields
// });

// module.exports = mongoose.model('Post', postSchema);










// FOR THE DATA ASSOCIATION --POST AND USER
// const mongoose=require('mongoose')


// const postSchema=mongoose.Schema({
//   postText:String,
//   user:[{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'User'
//   }],
//   description:String,

// });

// module.exports=mongoose.model('post',postSchema)


const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    date:{
        type:Date,
        default:Date.now
    },
    content:String,
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }]
})

module.exports=mongoose.model('post',postSchema)