const mongoose =require("mongoose");

const categorySchema=new mongoose.Schema({
    Name:{type:String,required:true,trim:true , unique: true},
    
})

const categoryModel=mongoose.model('Category', categorySchema);
module.exports=categoryModel;