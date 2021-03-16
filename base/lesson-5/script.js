const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой последний фильм ты смотрел?', ''),
      b = prompt('Какую оценку ему поставишь?', ''),
      c = prompt('Какой последний фильм ты смотрел?', ''),
      d = prompt('Какую оценку ему поставишь?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);