const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Librarydb');
const Schema=mongoose.Schema;
var NewBookSchema=new Schema({
    title:String,
    author:String,
    genre:String
});
var BookData=mongoose.model('Book-data',NewBookSchema);
module.exports=BookData;
