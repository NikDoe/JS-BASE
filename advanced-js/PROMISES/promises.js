function xhr(url) {
    return new Promise((res, rej) => {

        const request = new XMLHttpRequest();
        request.open('GET', url);

        request.addEventListener('load', () => {
            if (request.status !== 200) {
                return rej('Произошла ошибка :(')
            }

            res(JSON.parse(request.response));

        });

        request.send();

    });
}

function getFirstUserPost() {
    return xhr('http://jsonplaceholder.typicode.com/users')
    .then(([{id}]) => xhr(`http://jsonplaceholder.typicode.com/posts?userId=${id}`))
    .then( posts => {
        const div = document.querySelector('.demo');
        const header = document.createElement('h1');
        header.textContent = 'Posts';
        div.append(header);
        const ul = document.createElement('ul');
        posts.forEach(({title}) => {
            const li = document.createElement('li');
            li.textContent = title;
            ul.append(li);
        });
        div.append(ul);
    });
}

getFirstUserPost()
.then(
    () => console.log('Всё данные загружены...'),
    () => console.log('Что-то пошло не так')
);
