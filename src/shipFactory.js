export function shipFactory(name, length) {
    this.name = name;
    this.length = length
    this.hits = 0;
    function setLength(l) {
        this.length = l
    }
    function getLength() { return this.length }
    function hitShip(amount) {
        if (this.hits < length) {
            this.hits += 1
        }
        else { return isSunken() }
    }
    function isSunken() { return (this.hits <= length) }
    return {
        setLength,
        getLength,
        hitShip,
        isSunken,
    }
}