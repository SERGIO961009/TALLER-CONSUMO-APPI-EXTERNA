//Datos BD
let peliculas = [
    {
        "titulo":"Megalodon",
        "genero":"Accion, Aventura",
        "sinopsis":"Tibunronsin jajaja",
        "imagen":"https://images.justwatch.com/poster/101709200/s718/megalodon-2018.jpg"
    },
    {
        "titulo":"El papa de los pollos",
        "genero":"Accion, Drama",
        "sinopsis":"El man era el papa de los pollos jajaja",
        "imagen":"https://tse2.mm.bing.net/th/id/OIP.D3QyuG2F5JGS4KP5ffSDwgHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        "titulo":"El lloron",
        "genero":"Terror, Miedo",
        "sinopsis":"Un man que llora por todo jajaja",
        "imagen":"https://tse2.mm.bing.net/th/id/OIP.D3QyuG2F5JGS4KP5ffSDwgHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
];

//Funcion servidor
function obtenerPeliculas(pelis){
    return new Promise((resolve, reject)=>{
        setTimeout (()=>{
            //Verificar si hay datos en la Base de datos
            if(pelis.length == 0){
                reject("Error, no hay datos en la BD")
            }else{
                resolve(pelis);
            }
        },2000);
    });
}
//Simulador del cliente

/*obtenerPeliculas(peliculas)
.then((d)=> console.log(d))
.catch((e)=> console.log(e))*/

//async - await
async function showMovies(movies){
    try {
        let data = await obtenerPeliculas(movies)
    } catch (error) {
        console.log(error)
    }
}

showMovies(peliculas);