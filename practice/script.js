let numberOfFilms;

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    //делаем все наши функции методами нашего обьекта
    remebebrMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Какой последний фильм ты смотрел?', ''),
                b = prompt('Какую оценку ему поставишь?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Вы смотрели мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман!');
        } else {
            console.log('error');
        }
    },

    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },

    //модифицируем наш метод работы с жанрами
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) { //делаем вызов цикла один раз вместо 3

            //помещаем в переменную а данные которое введет пользователь
            let а = prompt('перечислите ваши любимые жанры через запятую');

            //создадим условие проверки на кнопку отмена и пустую строку
            if (а == null || а === '') {

                i--; //если не соблюдено, то задаем вопрос заново

            } else {

                //так как вводимые пользователем данные буду прописаны в строке
                //мы можем воспользоватся оператором split который преобразует нашу строку в массив
                personalMovieDB.genres = а.split(', ');
            }
        }

        //выведем все наши данные используя метод перебора массивов forEach
        personalMovieDB.genres.forEach((elem, index)=>{
            console.log(`Любимый жанр ${index + 1} - это ${elem}`);
        });
    },

    //создаем метод, который будет проверять свойство privat, и переключать его на противоположное
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};