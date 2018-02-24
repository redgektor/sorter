class Sorter {
  constructor() {
    this.array = [];
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
  	indices.sort(function compareNumbers(a, b) {return a - b;});
    var compareArray = [];
    for (var i = 0; i < indices.length; i++) {
        compareArray.push(this.array[indices[i]]);
    }
    if (this.comparator == undefined) {
        compareArray.sort( function compareNumbers(a, b) {return a - b;})
    } else {
        compareArray.sort(this.comparator);
    }
    for (var i = 0; i < compareArray.length; i++) {
        this.array.splice(indices[i], 1, compareArray[i]); 
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
    }
}

module.exports = Sorter;
