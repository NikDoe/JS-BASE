const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Какой последний фильм ты смотрел?', ''),
//         b = prompt('Какую оценку ему поставишь?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }

// }

// if (personalMovieDB.count < 10) {
//     console.log('Вы смотрели мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//     console.log('Вы киноман!');
// } else {
//     console.log('error');
// }

// personalMovieDB.count < 10
//     ? console.log('Вы смотрели мало фильмов')
//     : personalMovieDB.count >= 10 && personalMovieDB.count <= 30
//     ? console.log('Вы классический зритель')
//     : personalMovieDB.count > 30
//     ? console.log('Вы киноман!')
//     : console.log('error');

switch (true) {
    case personalMovieDB.count < 10 :
        console.log('Вы смотрели мало фильмов');
        break;
    case personalMovieDB.count >= 10 && personalMovieDB <= 30 :
        console.log('Вы классический зритель');
        break;
    case personalMovieDB.count > 30 :
        console.log('Вы киноман!');
        break;
    default :
        console.log('error');
}

console.log(personalMovieDB);