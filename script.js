
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
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.innerHTML = '<div class="grid-number">1</div>';
    
        element.append(gridSquare);
    }

}

// Funzione che gestisce le difficoltà
// Easy? Genera questi elementi random. Hard? Genera questi altri

//Funzione che genera numeri casuali
