/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 

6) После заоплнения формы и нажатия кнопки "Подтвердить" - новый фильм добавляется в список.
Страница не должна перезагружаться.Новый фильм добавляется в movieDB.movies.

7)Если название фильма больше 21 то обрезать и добавить 3 точки

8)При колике на мусорную корзину элемент удаляется из списка

9)Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение "Добавляем в любимое"

10)Отсортировать фильмы по алфавиту
*/


'use strict';
let advRemover = document.querySelectorAll('.promo__adv img'),
    blockBg = document.querySelector('.promo__bg'),
    blockGenre = blockBg.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    movieForm = document.querySelector('.add'),
    inputMovie = movieForm.querySelector('.adding__input'),
    checkbox = movieForm.querySelector('[type = "checkbox"]'),
    deleteItem = movieList.querySelectorAll('.delete');
document.addEventListener('DOMContentLoaded', (e) => {

    const movieDB = {
        movies: [
            "Я",
            "Логан",
            "Скотт Пилигрим против всех",
            "Ла-ла лэнд",
            "Оно",
            "Одержимость",
            "Лига справедливости"
        ]
    };
    //=====================Variables===================

    //=====================Main function=================================================
    //![1]
    const remover = (remove) => {
        for (let i of remove) {
            i.remove();
        }
    };
    //![2]'
    const changeGenre = (gnr) => {
        gnr.textContent = 'Драма';
    };
    //![3]
    const changeBg = (bg) => {
        bg.style.backgroundImage = "url('img/bg.jpg')";// код относительно HTML
    };
    //![6]      
    movieForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newMovie = inputMovie.value;
        const favorite = checkbox.checked;
        if (newMovie) {
            movieDB.movies.push(newMovie.toUpperCase());
        }
        if (favorite) {
            alert("Added to favourites")
        }
        sortMovies(movieDB.movies);
        addedMovies(movieList, movieDB.movies);
        e.target.reset();
    });
    //![4,5,7]
    const addedMovies = (parent, movie) => {
        parent.innerHTML = '';
        movie.forEach((e, n) => {
            const maxLength = 15;
            if (maxLength < e.length) {
                e = e.slice(0, 16) + "...";
            }
            parent.innerHTML += `<li class="promo__interactive-item">${n + 1}:${e}
        <div class="delete"></div>
        </li>`;
        });
        deleteItem.forEach((btn, i) => {
            btn.addEventListener('click', (event) => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                console.log(event.target);
            });
        });
    };
    //![10]
    const sortMovies = (arr) => {
        arr.sort();
    };



    sortMovies(movieDB.movies);
    remover(advRemover);
    changeGenre(blockGenre);
    changeBg(blockBg);
    addedMovies(movieList, movieDB.movies);
});
