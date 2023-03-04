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