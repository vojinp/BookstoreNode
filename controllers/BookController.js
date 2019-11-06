import BookService from '../services/BookService';

class BookController {

	getAll(req, res) {
		BookService.getAll()
			.then((books) => {
				res.json(books);
			})
			.catch((err) => {
				throw(err);
			});
	}

	create(req, res) {
		const book = req.body;
		BookService.create(book)
			.then((book) => {
				res.json(book);
			})
			.catch((err) => {
				throw(err);
			});
	}

	update(req, res) {
		const id = req.params.id;
		const book = req.body;
		BookService.update(id, book)
			.then((book) => {
				res.json(book);
			})
			.catch((err) => {
				throw(err);
			});
	}

	remove(req, res) {
		const id  = req.params.id;
		BookService.remove(id)
			.then((book) => {
				res.json(book.id);
			})
			.catch((err) => {
				throw(err);
			});
	}

	getOne(req, res) {
		const id = req.params.id;
		BookService.getOne(id)
			.then((book) => {
				res.json(book);
			})
			.catch((err) => {
				throw(err);
			});
	}
}

export default new BookController();