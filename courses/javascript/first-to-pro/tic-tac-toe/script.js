const players = [
    {
        name: "player one",
        symbol: "X"
    },
    {
        name: "player two",
        symbol: "O"
    }
]

function setPlayerNames() {
    const playerNames = document.querySelectorAll(".players span");
    
    for (let i = 0; i < playerNames.length; i++) {
        playerNames[i].textContent = players[i].name;
    }
}

setPlayerNames();

let currentPlayer = players[0];

function switchPlayer() {
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0]
}

function addSymbol() {
    if (!this.textContent) {
        this.textContent = currentPlayer.symbol;
        switchPlayer();
    }
}

const tiles = document.querySelectorAll(".tile");

tiles.forEach(tile => {
    tile.addEventListener('click', addSymbol)
})

