const { Cake } = require('../models/cake')
const { Rating } = require('../models/cake')

module.exports = {

    home: function(req,res){
        Cake.find()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>console.log(res.json(err)))
    },


    createOne: function(req,res){
        const cake = new Cake()
        cake.baker = req.body.baker 
        cake.image = req.body.image
        cake.save()
            .then(data=>{
                res.json(data)
            })
            .catch(err=>{console.log(err); res.json(err)})
    },

    addRating: function(req,res){
        const rating = new Rating()
        rating.rating = req.body.rating
        rating.comment = req.body.comment
        rating.save()
            .then(rating=>{
                Cake.findOne({_id: req.params.id})
                    .then(cake=>{
                        cake.ratings.push(rating)
                        cake.save()
                            .then(data=>{
                                res.json(data)
                            })
                            .catch(err=>{
                                res.json(err)
                            })
                    })
                    .catch(err=>{
                        res.json(err)
                    })
            })
            .catch(err=>{res.json(err)})            
    },

    showOne: function(req,res){
        Cake.findOne({_id: req.params.id})
        .then(data=>{
                res.json(data)
            })
            .catch(err=>{console.log(err); res.json(err)})
    },

    editOne: function(req,res){
        Cake.findOne({_id: req.params.id})
        .then(data =>{
            res.json(data)
        })
        .catch(err=>{console.log(err); res.json(err)})
    },

    editOneProcess: function(req,res){
        Cake.findOne({_id: req.params.id})
            .then(cake=>{
                task.title = req.body.title
                task.description = req.body.description
                task.completed = req.body.completed
                task.save()
                    .then(data=>{
                        res.json(data)
                    })
                    .catch(err=>{res.json(err)})
            })
            .catch(err=>{err})
    },

    destroyOne: function(req,res){
        Cake.findOneAndDelete({_id: req.params.id})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{res.json(err)})
            
    }
}
