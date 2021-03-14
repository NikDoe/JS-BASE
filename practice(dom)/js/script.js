/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv = document.querySelectorAll('.promo__adv img'),
    promoBG = document.querySelector('.promo__bg'),
    genre = promoBG.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

//1
promoAdv.forEach(e => e.remove(e));

//2
genre.textContent = 'драма';

//3
promoBG.style.backgroundImage = 'url("img/bg.jpg")';

//4, 5
movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((e, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${e}
        <div class="delete"></div>
    </li>
    `;
});

// movieDB.movies.forEach((e, i) => {
//     const li = document.createElement('li');
//     li.classList.add('promo__interactive-item');
//     li.insertAdjacentHTML('afterbegin', `${i+1}. ${e}`);
//     movieList.append(li);
// });