import Book from '../models/Book';

class BookRepository {
    getAll(callback, limit) {
        Book.find(callback).limit(limit).populate('genre');
    }
    
    getOne(callback, id) {
        Book.findById(id, callback);
    }
    
    create(book, callback) {
        Book.create(book, callback);
    }
    
    update(id, book, options, callback) {
        const query = {_id: id};
        const update = {
            title: book.title,
            author: book.author,
            genre: book.genre
        }
        Book.findOneAndUpdate(query, update, options, callback);
    }
    
    remove(id, callback) {
        const query = {_id: id};
        Book.findOneAndRemove(query, callback);
    }
}

export default new BookRepository();
