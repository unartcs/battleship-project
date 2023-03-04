function gameBoard() {
    this.array = new Array(100, null)
    function addShipHor(index, length) {
        const arrCheck = () => {
            for (let i = 0; i < 3; i++) {
                return this.array[index + i]
            }
        }
        if (arrCheck == null) {
            console.log('null')
        }
        else { console.log('not null') }
        
        function isShipAtPos(x) {
            return this.array[x] != null
        }
        return {
            array,
            isShipAtPos
        }
    }
}