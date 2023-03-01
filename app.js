function shipFactory(name, length) {
    function getHit() {
        if (this.hits < this.length) {
            this.hits++
            this.sunken = this.hits >= this.length
        }
    }
    function isSunk() {
        return this.hits >= this.length
    }
    return {
        name,
        length,
        hits: 0,
        getHit,
        sunken: false,
        isSunk
    }
}

const shipList = [
    carrier = shipFactory('Carrier', 5),
    battleship = shipFactory('Battleship', 4),
    cruiser = shipFactory('Cruiser', 3),
    submarine = shipFactory('Submarine', 3),
    destroyer = shipFactory('Destroyer', 2)
]

let gameBoardArray = new Array(100).fill(null)

function Gameboard() {
    //grid should be 10x10
    function receiveAttack(cor) {
        if (cor == shipPosition) {
            asda
        }
    }
}

function domController() {
    const gameContainer = document.querySelector('.gameboard-container')
    function printGrid() {
        gameBoardArray.forEach((i,index)=> {
            console.log(index)
            newGrid = document.createElement('div')
            newGrid.classList.add(`grid`)
            gameContainer.appendChild(newGrid)
        })
        enableGrid();
    }
    function enableGrid() {
        const clickableTiles = document.querySelectorAll('.gameboard > .grid')
    }
    return {
        printGrid
    }
}

domController().printGrid()