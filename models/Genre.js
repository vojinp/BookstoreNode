const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    books: [
      { type: mongoose.Schema.ObjectId, ref: 'Book'}
    ],
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Genre = mongoose.model('Genre', genreSchema);
export default Genre;
