const express = require('express');
const router = express.Router();
const Moviemodel = require('../models/movies');
const mongoose = require('mongoose');

//ROUTE GET: Get list of movies
router.get('/movies',function(req,res,next){
    Moviemodel.find()
    .exec()
    .then(function(movies){
        res.status(200).json({
            movies: movies
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    })
    });

    //ROUTE POST: new list of movies
    router.post("/movies", (req, res, next) => {
        const movie = new Moviemodel({
          _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          genre: req.body.genre,
          rating: req.body.rating,
          amount: req.body.amount,
          available: req.body.available
        });
        movie
          .save()
          .then(result => {
            res.status(201).send({
                message : "Movie added successfully",
                movie:movie
            });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          });
      });

//ROUTE GET By ID: Get the movie details by id
router.get('/movies/:id', function(req, res){
    if (mongoose.Types.ObjectId.isValid(req.params.id));
    Moviemodel.findOne({_id : req.params.id}).select('name genre rating amount available _id')
    .exec()
    .then(function(movie){
        res.status(200).send({
            movie: movie
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    })
});

//ROUTE GET EDIT DATA: Get the data for movie to be edited in the form to be edited
router.get('/movies/:id/edit', function(req,res){
    if (mongoose.Types.ObjectId.isValid(req.params.id));
    Moviemodel.findOne({_id : req.params.id}).select('name genre rating amount available _id')
    .exec()
    .then(function(movie){
        res.status(200).send({
            movie: movie
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    })
});

//ROUTE PUT: Edit the details of movie
router.put('/movies/:id',function(req,res,next){
    Moviemodel.findByIdAndUpdate({_id:req.params.id},req.body).
    exec()
    .then(function(movie){
        res.status(200).send({
            movie: movie
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}); 

//ROUTE DELETE: Delete the movie
router.delete('/movies/:id',function(req,res,next){
    Moviemodel.findByIdAndRemove({_id:req.params.id}).
    exec()
    .then(function(movie){
        res.status(200).send({
            message: "movie deleted",
            movie: movie
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});

module.exports = router;