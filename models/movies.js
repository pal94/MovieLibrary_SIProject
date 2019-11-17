const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const MovieSchema = new Schema({

    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    amount:{
        type: Number,
        required:true
    },
    available:{
        type:Boolean,
        default:false
    }
 
});
const Movie = mongoose.model('movie',MovieSchema);
module.exports=Movie;