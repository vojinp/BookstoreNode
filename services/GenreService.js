import repository from '../repositories/GenreRepository';

class GenreService {

	getAll() {
        return new Promise((resolve, reject) => {  
            repository.getAll((err, genres) => {
                if (err) reject(err);
                resolve(genres);
            });
        });
	}

	create(genre) {
        return new Promise((resolve, reject) => {  
            repository.create(genre, (err, genreResult) => {
                if (err) reject(err);
                resolve(genreResult);
            });
        });
	}

	update(id, genre) {
        return new Promise((resolve, reject) => {
            repository.update(id, genre, {new: true}, (err, genreResult) => {
                if (err) reject(err);
                resolve(genreResult);
            });
        });
	}

	remove(id) {
        return new Promise((resolve, reject) => {
            repository.remove(id, (err, genreResult) => {
                if (err) reject(err);
                resolve(genreResult);
            });
        });
	}

	getOne(id) {
        return new Promise((resolve, reject) => {
            repository.getOne((err, genre) => {
                if (err) reject(err);
                resolve(genre);
            }, id);
        });
	}
}

export default new GenreService();