import Board from "./scripts/board.js";

document.addEventListener("DOMContentLoaded", () => {
    // Grab the board-container element from the HTML document
    const main = document.getElementById("board-container");

    // Create an instance of the Board class and pass the main element as an argument
    const board = new Board(main);
});


