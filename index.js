const BASE_URL = "https://apis.scrimba.com/jsonplaceholder";
let endPoint = "/posts";

function renderPost() {
  fetch(BASE_URL + endPoint, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      const postsArr = data.slice(0, 5);
      let html = "";
      for (let post of postsArr) {
        html += `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <hr/>
    `;
      }

      document.getElementById("blog-list").innerHTML = html;
    });
}

renderPost();
