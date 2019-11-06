const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express_graphql = require('express-graphql');
import {buildSchema} from 'graphql';
import BookService from './services/BookService';

const schema = buildSchema(`
    type Query {
        book(id: String) : Book
        message: String
    }
    type Book {
        id: String
        title: String
        author: String
        genre: Genre
        genreWithId(genreId: String): Genre

    }
    type Genre {
        id: String
        name: String
    }
`);

const root = {
    message: () => 'Hello world',
    book: async ({id}) => {
        const book = await BookService.getAll().then((books) => books.find(b => b._id + '' === id));
        book.genreWithId = root.genreWithId;
        return book;
    },
    genreWithId: ({genreId}) => {
        return {name: 'genre with id ' + genreId};
    }
};

const genreRoutes = require('./routes/GenreRoutes');
const bookRoutes = require('./routes/BookRoutes');

const app = express();
mongoose.connect('mongodb://localhost/bookstore');
const db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/genres', genreRoutes);
app.use('/api/books', bookRoutes);

app.use('/graphql', express_graphql({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, function() {
    console.log('Server started on port 3000!')
});
