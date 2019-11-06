import GenreService from '../services/GenreService';

class GenreController {

	getAll(req, res) {
		GenreService.getAll()
			.then((genres) => {
				res.json(genres);
			})
			.catch((err) => {
				throw(err);
			});
	}

	create(req, res) {
		const genre = req.body;
		GenreService.create(genre)
			.then((genre) => {
				res.json(genre);
			})
			.catch((err) => {
				throw(err);
			});
	}

	update(req, res) {
		const id = req.params.id;
		const genre = req.body;
		GenreService.update(id, genre)
			.then((genre) => {
				res.json(genre);
			})
			.catch((err) => {
				throw(err);
			});
	}

	remove(req, res) {
		const id  = req.params.id;
		GenreService.remove(id)
			.then((genre) => {
				res.json(genre.id);
			})
			.catch((err) => {
				throw(err);
			});
	}

	getOne(req, res) {
		const id = req.params.id;
		GenreService.getOne(id)
			.then((genre) => {
				res.json(genre);
			})
			.catch((err) => {
				throw(err);
			});
	}
}

export default new GenreController();