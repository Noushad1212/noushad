const express = require('express');
const booksRouter = express.Router();
   const Bookdata=require('../model/Bookdata');
   
    booksRouter.route('/')
        .get((req,res)=>{
            Bookdata.find()
            .then(function(books){
                res.render('books',{title:"Library",books});
            })
        
        });    
        booksRouter.route('/add').get((req,res)=>{
            res.render('addbook',
            {
                title:"Library"
            });
        });
        booksRouter.route('/save').get((req,res)=>{
            var item={
                title:req.param("title"),
                author:req.param("author"),
                genre:req.param("genre")
            }
            console.log(item);
            var book =new Bookdata(item);
            book.save();
            res.redirect('/books');
            
        });
    booksRouter.route('/:id').get((req,res)=>{
            const id = req.params.id; 
            Bookdata.findOne({_id:id})
            .then(function(book){
                res.render(
                    'book',
                    {
                        title:"Library",
                        book
                    }
                );
            })     
            
        });
    
        
module.exports = booksRouter;



