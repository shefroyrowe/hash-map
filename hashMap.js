class HashMap {
    constructor(tableSize = 16) {
        this.table = new Array(tableSize);
        this.tableSize = tableSize;
    }
    hash(key) {
        let hashValue = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashValue = ((hashValue * primeNumber) + key.charCodeAt(i)) % this.tableSize;
        }
        return hashValue;
    }
    set(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
    }
    remove(key) {
        const index = this.hash(key);
        delete this.table[index];
    }
    get(key) {
        const index = this.hash(key);

        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        return this.table[index];
    }
}