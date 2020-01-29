const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    user: {
        type:String,
        required: true,
        trim: true,
        minLength: 1
    },
    content: {
        type:String,
        required: true,
        trim: true,
        minLength: 1  
    },
    book: {
        type:String,
        required: true,
        trim: true,
        minLength: 1  
    }
}, {
timestamps:true
});

const Note = mongoose.model('Note', noteSchema)

module.exports = Note;