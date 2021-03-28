async function getFirstUserPost() {
  try {
    const userResponse = await fetch(
      "http://jsonplaceholder.typicode.com/users"
    );
    const [{ id, name }] = await userResponse.json();

    const div = document.querySelector(".demo");
    const header = document.createElement("h1");
    header.textContent = name;
    div.append(header);

    const postsResponse = await fetch(
      `http://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const posts = await postsResponse.json();

    const ul = document.createElement("ul");
    const titlePost = posts.map((item) => {
      return item.title;
    });

    titlePost.forEach((el) => {
      const li = document.createElement("li");
      li.textContent = el;
      ul.append(li);
    });
    div.append(ul);
  } catch (error) {
    console.error(error);
  }
}

getFirstUserPost();
