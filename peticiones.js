//Variabls globales
let contenedor = document.querySelector("#contenedor")
let boton = document.querySelector("button")


boton.addEventListener("click", ()=>{
    //alert("Todo bien")
    peticionApi();
})

//Funcion para realizar peticiones a api
function peticionApi(){
    let urlExterna = "https://jsonplaceholder.typicode.com/users";
    let urlInterna = "http://localhost/api/peliculas.txt.txt" ; 
    fetch(urlInterna)
    .then((d)=> d.json())
    .then((datos)=>{
        console.log(datos);
        datos.forEach((pelis)=>{
            contenedor.innerHTML += `
                <img src ="${pelis.imagen}" width = 200px;>
                <h3>${pelis.titulo}</h3>
                <p>${pelis.sinopsis}</p>
                <p>${pelis.genero}</p>
            `;
        })
    })
    .catch((error)=> console.log(error))
}