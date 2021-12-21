
start()

//funzione start da dare al bottone
function start() {

    //Variabili griglia e bottone
    const grid = document.getElementById("grid");
    const play = document.getElementById("play");

    //funzioni da eseguire
    gridGenerator(grid);
}

//Genera la griglia con ciascun elemento
function gridGenerator(element) {

    for (let i = 0; i < 100; i++) {
        //Crea gridSquare
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.innerHTML = '<div class="grid-number">1</div>';

        //Aggiunge eventListener al click e fa append all'elemento in input
        gridSquare.addEventListener("click", addActiveClass);
        element.append(gridSquare);
    }

}

//Aggiunge la classe "active" ad un elemento
function addActiveClass() {
    this.classList.add("active");
}

//Funzione per cambiare colore al gridSquare quando cliccato



// Funzione che gestisce le difficoltà
// Easy? Genera questi elementi random. Hard? Genera questi altri

//Funzione che genera numeri casuali
