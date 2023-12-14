class Board {
    constructor() {
        this.gridSize = 10;
        this.boardContainer = document.getElementById('board-container');
        this.grid = this.createGrid();
    }

    // Create the grid and append buttons to the board container
    createGrid() {
        for (let i = 0; i < this.gridSize; i++) {
            for (let j = 0; j < this.gridSize; j++) {
                const button = document.createElement('button');
                button.addEventListener('click', this.toggleButton.bind(button));
                this.boardContainer.appendChild(button);
            }
        }
        return this.grid;
    }

    // Toggle the button state (on/off)
    toggleButton() {
        this.classList.toggle('active');
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const board = new Board();
});

// export default Board;