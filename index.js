const BASE_URL = "https://apis.scrimba.com/jsonplaceholder";
const titleInput = document.getElementById("title")
const bodyInput = document.getElementById("body")
const form = document.getElementById("formulario")
let endPoint = "/posts";
let postsArray = [];


function renderPost() {
  let html = "";
  for (let post of postsArray) {
    html += `
<h3>${post.title}</h3>
<p>${post.body}</p>
<hr/>
`;
  }
  document.getElementById("blog-list").innerHTML = html;
}

fetch(BASE_URL + endPoint, { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPost();
  });


  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let postTitle = titleInput.value;
    let postBody = bodyInput.value;
    const data = {
      title: postTitle,
      body: postBody,
    };

    fetch(BASE_URL + endPoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((post) => {
        postsArray.unshift(post);
        renderPost();
        form.reset()
      });
  });
