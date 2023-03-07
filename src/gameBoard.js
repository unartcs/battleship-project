function gameBoard() {
    this.array = new Array(100, null)
    //NOt sure if the check should be here or in the clickable DOM function
    function addShipHor(index, length) {
        let testArr = []
        for (let i = 0; i < length; i++) {
            testArr.push(this.array[index + i])
        }
        if (testArr.every(checkNull = (currentValue) => currentValue == null)) {
            for (let i = 0; i < length; i++) {
                this.array.push(index + i)
            }
        }
    }
    //NOt sure if the check should be here or in the clickable DOM function
    function addShipVert(index, length) {
        let testArr = []
        let jump = 0
        for (let i = 0; i < length; i++) {
            testArr.push(this.array[index + jump])
            jump += 10;
        }
        if (testArr.every(checkNull = (currentValue) => currentValue == null)) {
            for (let i = 0; i < length; i++) {
                this.array.push(index + jump)
                jump += 10;
            }
        }
    }
    function isShipAtPos(x) {
        return this.array[x] != null
    }
    return {
        array,
        isShipAtPos,
        addShipHor,
        addShipVert
    }
}