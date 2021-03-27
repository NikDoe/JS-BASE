function getFirstUserPost(callback) {
    const userRequest = new XMLHttpRequest();
    userRequest.open('GET', 'http://jsonplaceholder.typicode.com/users');
    userRequest.send();

    userRequest.addEventListener('load', () => {
        if (userRequest.status === 200) {
            const [{
                id,
                name
            }] = JSON.parse(userRequest.response);

            const postsRequest = new XMLHttpRequest();
            postsRequest.open('GET', `http://jsonplaceholder.typicode.com/posts?userId=${id}`);
            postsRequest.send();
            postsRequest.addEventListener('load', () => {
                if (postsRequest.status === 200) {
                    const data = JSON.parse(postsRequest.response);
                    const ul = document.createElement('ul');
                    div.append(ul);
                    data.forEach(({
                        title
                    }) => {
                        const li = document.createElement('li');
                        li.textContent = title;
                        ul.append(li);
                    });

                    return callback('все данные загружены :)');

                } else {
                    return callback('не удалось загрузить посты...');
                }
            });

            const div = document.querySelector('.demo');
            const postTitle = document.createElement('h1');
            postTitle.textContent = name;
            div.append(postTitle);
        } else {
            return callback('пользователь не найден...');
        }
    });
}

getFirstUserPost(error => {
    if (error) {
        console.log(`${error}`);
    }
});