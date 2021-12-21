
start()

//funzione start da dare al bottone
function start() {

    //Variabili griglia e bottone
    const grid = document.getElementById("grid");
    const play = document.getElementById("play");
    const difficulty = play.value;

    //funzioni da eseguire
    difficultyManager(grid, difficulty);
}

// Funzione che gestisce le difficoltà
function difficultyManager(element, value) {
    if (value == 1) {
        gridGenerator(element, 1, 100) //Easy
    } else if (value == 2) {
        gridGenerator(element, 1, 81) //Medium
    } else {
        gridGenerator(element, 1, 49) //Hard
    }
    
}

//Genera la griglia con ciascun elemento
function gridGenerator(element, min, max) {

    for (let i = 0; i < 100; i++) {
        //Crea gridSquare
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        let randomNumber = randomNumberGen(min, max)
        gridSquare.innerHTML = '<div class="grid-number">' + randomNumber +'</div>';

        //Aggiunge eventListener al click e fa append all'elemento in input
        gridSquare.addEventListener("click", addActiveClass);
        element.append(gridSquare);
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