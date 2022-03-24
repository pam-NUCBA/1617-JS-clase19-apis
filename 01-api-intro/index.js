//*https://developer.mozilla.org/es/docs/Web/API/Fetch_API
//* https://jsonplaceholder.typicode.com/
//https://jsonplaceholder.typicode.com/guide/
//https://jsonplaceholder.typicode.com/posts

const postContainer = document.getElementById("container");
// const postTitle = document.getElementById("title");
// const postComment = document.getElementById("comment");

//url de la api
let url = "https://jsonplaceholder.typicode.com/posts";

//traer lo datos:
//no es obligatorio que se llamen res/response, data, err. Pero es lo que solemos usar por convención
fetch(url)
    .then((res) => res.json())
    .then((data) => mostrarData(data))
    .catch((err) => console.log(err));

//*esto mostraría un solo dato:
// const mostrarData = data => {
//     console.log(data)
//     for (let i = 0; i < data.length; i++) {
//         postTitle.innerHTML = data[i].title;
//         postComment.innerHTML = data[i].body;

//     }
// }

const mostrarData = (data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        const newId = document.createElement("p");
        newId.classList.add("newId");

        const newTitle = document.createElement("div");
        newTitle.classList.add("title");

        const newComment = document.createElement("div");
        newComment.classList.add("comment");

        const newContainer = document.createElement("div");
        newContainer.classList.add("container");

        //vamos a crear un botoncito de borrar
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn");
        deleteBtn.innerHTML = "borrar";

        newId.innerHTML = `#${data[i].id}`;
        newTitle.innerHTML = data[i].title;
        newComment.innerHTML = data[i].body;

        //apendeo los hijos nuevos al container nuevo
        newContainer.appendChild(newId);
        newContainer.appendChild(newTitle);
        newContainer.appendChild(newComment);
        newContainer.appendChild(deleteBtn);

        postContainer.appendChild(newContainer);
        //apendeo el container nuevo al container viejo

        deleteBtn.addEventListener("click", () => {
            postContainer.removeChild(newContainer);
            console.log(`delete ${data[i].id}`);
        });
    }
};