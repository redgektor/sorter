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
    for (var i = indices.length; i >= 0; i--) {
        for (var j = 0; j < indices.length; j++) {
            if ( indices[j] > indices[j+1] ) {
                var x = indices[j+1];
                indices[j+1] = indices[j];
                indices[j] = x;
            } 
        }
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
    // your implementation
  }
}

module.exports = Sorter;
