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
    // сортируем входящий массив
    if (this.comparator == undefined) {
        indices.sort( function compareNumbers(a, b) {return a - b;})
    } else {
        indices.sort(this.comparator);
    }
    
    for (var i = 0; i < indices.length; i++) {
        for (var j = 0; j < indices.length; j++) {
            if ( this.array[indices[j]] > this.array[indices[j+1]] ) {
                var x = this.array[indices[j+1]];
                this.array[indices[j+1]] = this.array[indices[j]];
                this.array[indices[j]] = x;
            }
        }
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
    }
}

module.exports = Sorter;
