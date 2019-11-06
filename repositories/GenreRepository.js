import Genre from '../models/Genre';

class GenreRepository {
    getAll(callback, limit) {
        Genre.find(callback).populate('books');
    }

    getOne(callback, id) {
        Genre.findById(id, callback);
    }

    create(genre, callback) {
        Genre.create(genre, callback);
    }

    update(id, genre, options, callback) {
        const query = {_id: id};
        const update = {
            name: genre.name,
            books: genre.books
        }
        Genre.findOneAndUpdate(query, update, options, callback);
    }

    remove(id, callback) {
        const query = {_id: id};
        Genre.findOneAndRemove(query, callback);
    }
}

export default new GenreRepository();