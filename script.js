//Pulsante Play e contatore partite
const play = document.getElementById("play");
play.addEventListener("click", start);
let playCounter = 0;

//funzione start
function start() {

    //Variabili griglia e difficulty selector
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    const difficultySelector = document.getElementById("difficulty-selector");
    const difficulty = difficultySelector.value;

    //Funzioni da eseguire
    animationManager(grid);
    difficultyManager(grid, difficulty);

    playCounter++;
}

//Funzione che gestisce le animazioni
function animationManager(grid) {
    if (playCounter == 0) {
        grid.classList.add("started");
    }
}

//Funzione che gestisce le difficoltà
function difficultyManager(grid, difficulty) {
    if (difficulty == 1) {
        gridGenerator(grid, 100, 1); //Easy
    } else if (difficulty == 2) {
        gridGenerator(grid, 81, 2); //Medium
    } else {
        gridGenerator(grid, 49, 3); //Hard
    }
}

//Genera la griglia con ciascun elemento
function gridGenerator(grid, gridNumber, difficulty) {

    for (let i = 1; i <= gridNumber; i++) {
        //Crea gridSquare
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        if (difficulty == 1) {
            gridSquare.classList.add("easy");
        } else if (difficulty == 2){
            gridSquare.classList.add("medium");
        } else {
            gridSquare.classList.add("hard")
        }
        
        gridSquare.innerHTML = '<div class="grid-number">' + i + '</div>';

        //Aggiunge eventListener al click e fa append all'elemento in input
        gridSquare.addEventListener("click", addActiveClass);
        grid.append(gridSquare);
    }
}

//Aggiunge la classe "active" ad un elemento
function addActiveClass() {
    this.classList.add("active");
}