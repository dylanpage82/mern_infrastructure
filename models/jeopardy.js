const { Schema, model } = require('mongoose')

const jeopardySchema = new Schema({
    question: {type: String},
    answer: {type: String},
    category: {type: String}
})

const Jeopardy = model('Jeopardy', jeopardySchema)

module.exports = Jeopardy