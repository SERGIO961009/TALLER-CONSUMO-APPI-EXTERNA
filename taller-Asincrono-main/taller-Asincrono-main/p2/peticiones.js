// variables globales
let contenedor = document.querySelector("#contenedor-peliculas");
let boton = document.querySelector("button");

// evento al botón
boton.addEventListener("click", () => {
    obtenerInfo();
});

// función para realizar la petición
function obtenerInfo() {
    let url = "https://jsonplaceholder.typicode.com/photos";

    fetch(url)
        .then((d) => d.json())
        .then((users) => {
            console.log(users);

            // tomamos solo los primeros 10 objetos
            const primeros10 = users.slice(0, 10);

            // iteramos sobre los primeros 10
            primeros10.forEach((u) => {
                contenedor.innerHTML += `
                    <h1>${u.title}</h1>
                    <h3>ID: ${u.id}</h3>
                    <img src="${u.url}" alt="${u.title}" width="200">
                    <hr>
                `;
            });
        })
        .catch((e) => {
            console.log(e);
        });
}