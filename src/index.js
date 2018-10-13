class Sorter {
  constructor() {
    this.array = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {    
  	const sortedIndices = indices.sort((a, b) => a - b);
    let compareArray = [];

    for (let i = 0, len = sortedIndices.length; i < len; i++) {
        compareArray.push(this.array[sortedIndices[i]]);
    }

    compareArray.sort(this.comparator);

    for (let i = 0, len = compareArray.length; i < len; i++) {
        this.array.splice(sortedIndices[i], 1, compareArray[i]); 
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
    }
}

module.exports = Sorter;
