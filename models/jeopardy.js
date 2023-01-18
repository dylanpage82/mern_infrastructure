const { Schema, model } = require('mongoose')

const jeopardySchema = new Schema({
    question: {type: String, required: true},
    answer: {type: String, required: true},
    category: {type: String}
})

const Jeopardy = model('Jeopardy', jeopardySchema)

module.exports = Jeopardy