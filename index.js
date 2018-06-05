fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },


    each: function(collection, iteratee) {
      for (const i in collection) {
        iteratee(collection[i]);
      }
      return collection;
    },


    map: function(collection, iteratee) {
      let newArr = [];
      for (const i in collection) {
        newArr.push(iteratee(collection[i]));
      }
    return newArr;
    },


    reduce: function(collection, iteratee, acc) {
      let finalAcc = acc;
      for (const i of collection) {
        finalAcc = iteratee(finalAcc, i, collection);
      }
      return finalAcc;
    },

    find: function(collection, predicate) {
      for (const i in collection) {
        if (predicate(collection[i]) === true) {
          return collection[i];
        }
      }
    },


    filter: function(collection, predicate) {
      const newArr = [];
      for (const i in collection) {
        if (predicate(collection[i]) === true) {
          newArr.push(collection[i]);
        }
      }
      return newArr;
    },

    size: function(collection) {
      return Object.keys(collection).length;
    },

    first: function(array, n) {
      const newArr = [];
      if (n === undefined) {
        return array[0];
      } else {
        return array.slice(0, n);
      }
    },

    last: function(array, n) {
      const newArr = [];
      if (n === undefined) {
        return array[array.length-1];
      } else {
        return array.slice(array.length - n);
      }
    },

    compact: function(array) {
      const newArr = [];
      for (const i in array){
        if (array[i]) {
          newArr.push(array[i]);
        }
      }
      return newArr;
    },

    sortBy: function(array, iteratee){
    },


    flatten: function(array) {
      
    },





    functions: function() {

    },


  }
})()

fi.libraryMethod()
