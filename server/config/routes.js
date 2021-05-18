const Cake = require('../controller/cakes')


module.exports = function(app){

    app.get('/', (req,res)=>{
        
    })

    app.get('/cakes', (req,res)=>{
        Cake.home(req,res)
    })

    app.post('/new/cake', (req,res)=>{
       Cake.createOne(req,res)
    })

    app.post('/new/rating/:id', (req,res)=>{
        Cake.addRating(req,res)
    })

    app.get('/show/:id', (req,res)=>{
        Cake.showOne(req,res)
    })

    app.get('/edit/:id', (req,res)=>{
        Cake.editOne(req,res)
    })

    app.put('/update/:id', (req,res)=>{
        Cake.editOneProcess(req,res)
    })

    app.delete('/delete/:id', (req,res)=>{
        Cake.destroyOne(req,res)
    })

}