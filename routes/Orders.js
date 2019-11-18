const express = require('express');
const router = express.Router();
const OrderModel = require('../models/orders');
const mongoose = require('mongoose');

//ROUTE GET: Get list of movies
router.get('/',function(req,res,next){
    OrderModel.find()
    .exec()
    .then(function(orders){
        res.status(200).json({
            orders: orders
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
    router.post("/newOrder", (req, res, next) => {
        const order = new OrderModel({
          _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          quantity: req.body.quantity
        });
        order
          .save()
          .then(result => {
            res.status(201).send({
                message : "Movie added successfully",
                order:order
            });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          });
      });
