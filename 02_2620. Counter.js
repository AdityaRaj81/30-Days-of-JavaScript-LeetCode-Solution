/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

/** 
 * const counter = createCounter(10);
 * console.log(counter()); // 10
 * console.log(counter()); // 11
 * console.log(counter()); // 12
 */



        /**
        OUTPUT
        
        Input: 
        n = 10 
        ["call","call","call"]
        Output: [10,11,12]
        Explanation: 
        counter() = 10 // The first time counter() is called, it returns n.
        counter() = 11 // Returns 1 more than the previous time.
        counter() = 12 // Returns 1 more than the previous time.
        */
