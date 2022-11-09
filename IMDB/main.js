// clases
class Movie
{
    constructor(photo,title,releaseYear,actors,nacionality,genre,director,producer,writer,language,plataforma,isMCU,distributor,mainCharacterName)
    {
        this.photo = photo;
        this.title = title;
        this.releaseYear = releaseYear;
        this.genre = genre;
        this.nacionality = nacionality;
        this.director = director;
        this.writer = writer;
        this.language = language;
        this.plataforma = plataforma;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.actors = actors;
    }

    printAll()
    {
        console.group(Movie)
            console.log("Title - " + this.title);
            console.log("Release Year - " + this.releaseYear);
            console.log("Nacionality - " + this.nacionality);
            console.log("Genre- " + this.genre);
            console.log("Actors - " + this.actors);
            console.log("Director - " + this.director);
            console.log("Writer - " + this.writer);
            console.log("Language - " + this.language);
            console.log("Plataform - " + this.plataforma);
            console.log("Is MCU? - " + this.isMCU);
            console.log("Main Character Name - " + this.mainCharacterName);
            console.log("Producer - " + this.producer);
            console.log("Distributor - " + this.distributor);
        console.groupEnd();
    }
}

class imdb{
    constructor (movies){
        this.movies = movies;
    }
}


// modal

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.getElementById("modal");
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click",function(e)
{
    e.preventDefault();
    modalC.style.opacity ="1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close")

});

cerrar.addEventListener("click",function()
{
    
    modal.classList.toggle("modal-close")
    setTimeout(function()
    {modalC.style.opacity ="0";
    modalC.style.visibility = "hidden";},700)
});


// funciones

let peliculas=[];

function agregarPeliculas()
{
    let imagen = document.getElementById("imgAdd");
    let titulo = document.getElementById("titulo");
    let anyo = document.getElementById("anyo");
    let genero = document.getElementById("genero");
    let idioma = document.getElementById("idioma");
    let plataforma = document.getElementById("plataforma");
    let mcu = document.getElementById("mcu");

    let peli = new Movie(imagen.value,titulo.value,anyo.value,genero.value,0,genero.value,0,0,0,idioma.value,plataforma.value,mcu.value,0,0);

    peliculas.push(peli);
    // mostrarPeliculas();

}

// function mostrarPeliculas()
// {
//     let cuerpo = getElementById("modal-cuerpo");
    
//     document.getElementById("t1").innerHTML=$`{titulo.value}`

    
    
// }

