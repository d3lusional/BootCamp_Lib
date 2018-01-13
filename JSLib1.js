var _ = {
    map: function (array, callback) {
        let mappedValues = [];
        if (typeof array === "object") {
            for (let key in array) {
                mappedValues.push(callback(array[key], key))
            }
        }
        return mappedValues
    },
    reduce: function (arr, callBack, accumulator) {
        let accDefined = 0;
        if (accumulator === undefined){
            accumulator = arr[0];
            accDefined = 1
        }
        let singleOutput = accumulator;
            for (let i = accDefined; i < arr.length; i++) {
                singleOutput = callBack(singleOutput, arr[i]);
            }
            return singleOutput;

x    },
    find: function (arr, callBack) {
        //loop through array and return first call back. if
        for (let i = 0; i < arr.length; i++) {
            if (callBack(arr[i]) == true) {
                return arr[i];
            }
        }
    },
    filter: function (arr, callBack) {
        newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (callBack(arr[i]) == true) {
                newArr.push(arr[i])
            }
        }
        console.log(newArr)
    },
    reject: function (arr, callBack) {
        newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (callBack(arr[i]) !== true) {
                newArr.push(arr[i])
            }
        }
        console.log(newArr)
    }
}

// you just created a library with 5 methods
//var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

//console.log( _ = { reduce: function (arr, callback, accum) {/*....*/ } })
console.log(_.reduce([1, 2, 3, 4], function (previous, current) { return previous + current }))

//console.length(_)
//console.log(evens); // if things are working right, this will return [2,4,6]
