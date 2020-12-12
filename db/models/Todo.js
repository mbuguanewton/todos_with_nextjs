import Mongoose, { Schema } from 'mongoose'

const TodoSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
    },

    markasread: {
        type: Boolean,
    },
})

module.exports = Mongoose.models.Todo || Mongoose.model('Todo', TodoSchema)
