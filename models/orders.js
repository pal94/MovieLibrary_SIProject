const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const OrderSchema = new Schema({

    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
});
const Order = mongoose.model('order',OrderSchema);
module.exports=Order;