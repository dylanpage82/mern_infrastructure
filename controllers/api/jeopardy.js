const Jeopardy = require('../../models/jeopardy')

const dataController = {

  index (req, res, next) {
    Jeopardy.find({}, (err, allJeopardys) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.jeopardys = allJeopardys
        next()
      }
    })
  },
 
  destroy (req, res, next) {
    Jeopardy.findByIdAndDelete(req.params.id, (err, deletedJeopardy) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.jeopardy = deletedJeopardy
        next()
      }
    })
  },
  
  update (req, res, next) {
    Jeopardy.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedJeopardy) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.jeopardy = updatedJeopardy
        next()
      }
    })
  },
  
  create (req, res, next) {
    
   Jeopardy.create(req.body, (err, createdJeopardy) => {
      
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.jeopardy = createdJeopardy
        next()
      }
    })
  },


  show (req, res, next) {
   Jeopardy.findById(req.params.id, (err, foundJeopardy) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.jeopardy = foundJeopardy
        next()
      }
    })
  }
}

const apiController = {
    index(req, res, next){
      res.json(res.locals.data.jeopardys)
    },
    show(req, res, next){
      res.json(res.locals.data.jeopardy)
    }
  }

module.exports = {dataController, apiController}