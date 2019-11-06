const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: 'String',
        required: true
    },
    author: {
        type: 'String',
        required: true
    },
    genre: {
        type: mongoose.Schema.ObjectId,
        ref: 'Genre'
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
