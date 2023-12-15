class Board {
    constructor() {
        this.gridSize = 2;
        this.boardContainer = document.getElementById('board-container');
        this.grid = this.createGrid();
    }

    // Create the grid and append buttons to the board container
    createGrid() {
        for (let i = 1; i < 76; i++) {
                const button = document.createElement('button');
                button.addEventListener('click', this.toggleButton.bind(button));
                button.id = "pad"
                this.boardContainer.appendChild(button);
        }
        return this.grid;
    }

    // Toggle the button state (on/off)
    toggleButton() {
        this.classList.toggle('active');
        console.log("something")
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const board = new Board();
});

// export default Board;