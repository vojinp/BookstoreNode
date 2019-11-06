import repository from '../repositories/BookRepository';

class BookService {

	getAll() {
        return new Promise((resolve, reject) => {  
            repository.getAll((err, books) => {
                if (err) reject(err);
                resolve(books);
            });
        });
	}

	create(book) {
        return new Promise((resolve, reject) => {  
            repository.create(book, (err, bookResult) => {
                if (err) reject(err);
                resolve(bookResult);
            });
        });
	}

	update(id, book) {
        return new Promise((resolve, reject) => {
            repository.update(id, book, {new: true}, (err, bookResult) => {
                if (err) reject(err);
                resolve(bookResult);
            });
        });
	}

	remove(id) {
        return new Promise((resolve, reject) => {
            repository.remove(id, (err, bookResult) => {
                if (err) reject(err);
                resolve(bookResult);
            });
        });
	}

	getOne(id) {
        return new Promise((resolve, reject) => {
            repository.getOne((err, book) => {
                if (err) reject(err);
                resolve(book);
            }, id);
        });
	}
}

export default new BookService();