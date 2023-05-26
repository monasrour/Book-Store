const mongoose =require("mongoose");

const bookSchema = new mongoose.Schema({

Name:{type:String,required:true,trim:true},
categoryId:{type:[mongoose.Schema.Types.ObjectId],required:true,ref:"category"},
AuthorId:{type:[mongoose.Schema.Types.ObjectId],required:true,ref:"author"},
shevle:{
    type:String,
    enum:['wanttoread','reading','currentlyreading'], required:true},
    image:{type:String},
    avgRating:{type:Number},
})

const bookModel=mongoose.model("book",bookSchema);
module.exports=bookModel