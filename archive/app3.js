function shipFactory() {
    this.name = ''
    this.sunken = false;
    this.length = 0;
    function setName(s) {
        this.name = s
    }
    function getName() {
        return this.name
    }
    function setLength(x) {
        this.length = x;
    }
    function getHit() {
        if (this.length > 1) {
            this.length--
        }
        else {
            this.length = 0
            console.log(this + ' has sunken')
            this.sunken = true;
        }
    }
    function getLength() {
        return this.length;
    }
    function isSunk() {
        return this.sunken
    }
    return { setName, getName, setLength, getHit, getLength, isSunk }
}

function makeShips() {
   carrier.setLength(5)
   carrier.setName('Carrier')

   battleship.setLength(4)
   battleship.setName('Battleship')

   cruiser.setLength(3)
   cruiser.setName('Cruiser')

   submarine.setLength(3)
   submarine.setName('Submarine')

   destroyer.setLength(2)
   destroyer.setName('Destroyer')
}

const shipList = [carrier = shipFactory(), battleship = shipFactory(), cruiser = shipFactory(), submarine = shipFactory(), destroyer = shipFactory()]