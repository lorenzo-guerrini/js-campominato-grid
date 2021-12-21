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
        gridGenerator(grid, 1, 100); //Easy
    } else if (difficulty == 2) {
        gridGenerator(grid, 1, 81); //Medium
    } else {
        gridGenerator(grid, 1, 49); //Hard
    }
}

//Genera la griglia con ciascun elemento
function gridGenerator(grid, min, max) {

    for (let i = 0; i < 100; i++) {
        //Crea gridSquare
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        let randomNumber = randomNumberGen(min, max);
        gridSquare.innerHTML = '<div class="grid-number">' + randomNumber + '</div>';

        //Aggiunge eventListener al click e fa append all'elemento in input
        gridSquare.addEventListener("click", addActiveClass);
        grid.append(gridSquare);
    }
}

//Funzione che genera numeri casuali
function randomNumberGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Aggiunge la classe "active" ad un elemento
function addActiveClass() {
    this.classList.add("active");
}