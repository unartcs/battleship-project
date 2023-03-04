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

let playerBoard = Gameboard()
let enemyBoard = Gameboard()

function Gameboard() {
    this.array = new Array(100).fill(null)
    function addShipHor(x, length) {
        this.array.splice(x, length, 'O')
    }
    function addShipVert(x, length) {
        let z = 0; 
        for (let i = 0; i < length; i++) {
            this.array.splice(x + z, 'O')
            z += 10
        }
    }
    function removeShip(x, length) {
        this.array[x].splice(1, length)
    }
    function checkIfShip(index) {
        return this.array[index] != ''
        //This will check if there is a ship in the index, if there is it will return true and then I can do what I want with the info
        //like adding a hit/placing a ship if this returns false etc..
        // if (this.array[index] != '') {
        //     //Check if theres a ship in the index and give it +1 hit if its hit
        // }
    }
    return {
        array,
        addShipHor,
        addShipVert,
        removeShip,
        checkIfShip
    }
}


function receiveAttack(cor) {
    if (cor == shipPosition) {
        asda
    }
}


function domController() {
    const gameContainer = document.querySelector('.gameboard-container')
    const gameContainerLeft = document.querySelector('.gameboard-container-left')
    const gameContainerRight = document.querySelector('.gameboard-container-right')
    function printGrid() {
        playerBoard.array.forEach((i, index) => {
            console.log(index)
            newGrid = document.createElement('div')
            newGrid.classList.add(`grid`)
            newGrid.setAttribute("id", index)
            gameContainerLeft.appendChild(newGrid)
            newGrid.innerText = i
        })
        enemyBoard.array.forEach((i, index) => {
            console.log(index)
            newGrid = document.createElement('div')
            newGrid.classList.add(`grid`)
            gameContainerRight.appendChild(newGrid)
            newGrid.innerText = i
        })
        enableGrid();
    }
    function enableGrid() {
        const clickableTiles = document.querySelectorAll('.gameboard-container-left > .grid')
        clickableTiles.forEach(t => {
            t.addEventListener('click', function () {
                console.log(t.id)
                playerBoard.addShipHor(t.id,4) 
                t.innerText = 'X'
                //Adding a custom ship with 4 length at the t.id
                //instead of removing the entire grid every click I should make it so
                //The inner text gets updated
            })
        })
    }
    return {
        printGrid
    }
}

domController().printGrid()