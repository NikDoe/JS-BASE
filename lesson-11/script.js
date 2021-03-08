//создадим фукнцию start которая будет обрабатывать наш первый вопрос
// для этого переменную numberOfFilms сделаем глобальной для нашей функции
// само действие с prompt перенесём в тело функции и выполним наши проверки

let numberOfFilms;

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    //пока одно из условий будет true, мы будем постоянно выводить пользователю вопрос
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start(); //не забываем всегда вызывать функцию

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//далее поместим наш цикл тоже в функцию remebebrMyFilms

function remebebrMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Какой последний фильм ты смотрел?', ''),
            b = prompt('Какую оценку ему поставишь?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

// remebebrMyFilms(); // так же не забываем вызвать функцию

// далее создадим функцию detectPersonalLevel

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Вы смотрели мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман!');
    } else {
        console.log('error');
    }
}

// detectPersonalLevel(); // так же не забываем вызвать функцию

// создадим функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();


// function writeYourGenres () {
//     for(let i = 1; i <= 3; i++) {
//         const a = prompt(`Ваш любимый жанр под номером ${i}?`);
//         personalMovieDB.genres[i - 1] = a;
//     }
// }

// оптимизируем функцию writeYourGenres, убрав обьявление переменной, в которую передаем вопрос
// вместо этого сразу напрямую будем передавать вопрос в нашу personalMovieDB

function writeYourGenres () {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
}

writeYourGenres();