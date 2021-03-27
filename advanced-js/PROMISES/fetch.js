function getFirstUserPost() {
    return fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(([{id, name}]) => {
        const div = document.querySelector('.demo');
        const header = document.createElement('h1');
        header.textContent = name;
        div.append(header);
        return fetch(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);
    })
    .then(response => response.json())
    .then( posts => {
        const div = document.querySelector('.demo');
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
