const mongoose = require('mongoose')

const RatingSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: [true, 'Rating is required']
    },
    comment: {
        type: String,
        required: [true, 'Comment is required'],
        minlength: [5, 'Comment must be at least 5 characters']
    }
}, {timestamps:true}) 

const CakeSchema = new mongoose.Schema({
    baker: {
        type:String,  
        required:[true, 'baker must have a name'],
        minlength:[2, 'must be at least 2 characters']
    },   
    image: {
        type: String,
        required: [true, 'Must input an image']
    },
    ratings: [RatingSchema] 
    
}, {timestamps:true})

const Rating = mongoose.model('Rating', RatingSchema)
const Cake = mongoose.model('Cake', CakeSchema)

module.exports = {
    Cake: Cake,
    CakeSchema: CakeSchema,
    Rating: Rating,
    RatingSchema: RatingSchema
}