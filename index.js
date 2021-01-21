'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {

    if (Array.isArray(collection)) {

        for (var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }

    }
    else {

        for (var key in collection) {
            action(collection[key], key, collection);
        }

    }

}
module.exports.each = each;

/**
 * identity: The identity function takes in a value and returns it unchanged
 * 
 * @param {*} value: the value going inside of identity
 * 
 * @returns {*}: returns the value unchanged
 */

function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: The typeOf function takes in a literal or variable and returns the
 * type as a string.
 * 
 * @param {*} value: The literal or variable passed into the function.
 * 
 * @returns {string}: Returns the type of the literal or variable passed into 
 * the function as a string.
 */

function typeOf(value) {

    if (typeof value === "string") return "string";
    if (Array.isArray(value)) return "array";
    if (typeof value === "undefined") return "undefined";
    if (typeof value === "number") return "number";
    if (typeof value === "boolean") return "boolean";
    if (value === null) return "null";
    if (typeof value === "function") return "function";
    if (typeof value === "object") return "object";

}
module.exports.typeOf = typeOf;

/**
 * first: The first function accepts an array and an index. It returns the
 * element located at the specified index.
 * 
 * @param {array} array: An array literal or a variable containing a reference
 * to an array.
 * @param {number} number: A number representing the index of the element to 
 * return from the function.
 * 
 * @returns {*}: Returns the element at the index passed into the function. If 
 * the first argument passed into the function is not an array, an empty array 
 * will be returned. If a second argument is not supplied or the second argument
 * is not a number, the first element of the array passed into the function is
 * returned.
 */


function first(array, number) {

    if (!Array.isArray(array)) return [];
    if (!number || isNaN(number)) return array[0];

    if (number === 1) return array[0];
    else return array.splice(0, number);

}
module.exports.first = first;

/**
 * last: The last funtion accepts an array and a number (n). It returns the
 * element located n elements from the end of the array. Example: if the number
 * equals five, the function returns the fifth element from the end of the
 * array.
 * 
 * @param {array} array: An array literal or a variable containing a reference
 * to an array.
 * @param {number} number: A number representing the number of elements from 
 * the end of the array to be returned by the function.
 * 
 * @returns {*}: Returns an element that is n elements from the end of the
 * array. N is equal to the number passed into the function as the second
 * argument. If the first argument passed into the function is not an array, an
 * empty array is returned. If the second argument passed into the function is
 * not a number or a second argument is not supplied, the last element of the 
 * array is returned. If the second argument is negative, an empty array is
 * returned. If the second argument is greater than the number of elements in an
 * array, the array is returned.
 */

function last(array, number) {

    if (!Array.isArray(array)) return [];
    if (!number || isNaN(number)) return array[array.length - 1];

    if (number < 0) return [];
    if (number > array.length) return array;

    return array.splice(array.length - number, number);

}
module.exports.last = last;

/**
 * indexOf: The indexOf function accepts an array and a value. If the value is
 * contained in the array, the index where the value is located is returned. If
 * the value is not containted in the array, the function returns -1.
 * 
 * @param {array} array: An array literal or variable containing a reference to 
 * an array.
 * @param {*} value: A literal or variable that the function will seek when
 * iterating over array.
 * 
 * @returns {number}: When the function iterates over array, it compares each 
 * element to value. If they are equal, it returns an integer that represents
 * the index where value equals the current element. If value is not found in
 * array, -1 is returned. If more than one instance of value can be found in 
 * array, only the location of the first instance is returned.
 */

function indexOf(array, value) {

    for (let i = 0; i < array.length; ++i) {

        if (array[i] === value) {
            return i;
        }
    }

    return -1;

}
module.exports.indexOf = indexOf;

/**
 * contains: The contains function accepts an array and a value. If the array 
 * contains value, true is returned. If the array does not contain value, false
 * is returned.
 * 
 * @param {array} array: An array literal or a variable containing a reference
 * to an array.
 * @param {*} value: A value for which the function will seek when iterating
 * over array.
 * 
 * @returns {boolean}: The function will iterate over array. It will compare
 * each element in array to value. If the element is equal to value, the
 * function will return true. If the function reaches the end of the arrray and
 * has not found a match, it will return false.
 */

function contains(array, value) {

    let result = false;

    for (let i = 0; i < array.length && !result; i++) {
        result = array[i] === value ? true : false;
    }

    return result;

}
module.exports.contains = contains;

/**
 * each: The each function accepts a collection and a callback function. It 
 * iterates over the collection. If the collection is an array, it invokes the 
 * callback function with three arguments: the element, the index, and the
 * collection. If the collection is an object, it invokes the callback function
 * with three arguments, as well. The arguments include the value, the key, and
 * the collection.
 * 
 * @param {collection} collection: An array literal, object literal, or
 * variable containing a reference to an array or an object.
 * @param {callback} function: A function to be called on every element or 
 * property in collection.
 */

function each(collection, callback) {

    if (Array.isArray(collection)) {

        for (let i = 0; i < collection.length; ++i) {
            callback(collection[i], i, collection);
        }

    }
    else if (typeof collection === "object") {

        for (let key in collection) {
            callback(collection[key], key, collection);
        }

    }

}
module.exports.each = each;

/**
 * unique: The unique function accepts an array that may contain duplicate 
 * elements and returns an array that does not contain duplicates.
 * 
 * @param {array} array: An array literal or variable holding a reference to an
 * array.
 * 
 * @returns {array}: The function will return a new array that includes every
 * unique element contained in the array passed into the function. There will be
 * no duplicate elements.
 */

function unique(array) {

    let newArr = [];

    for (let e of array) {

        if (this.indexOf(newArr, e) === -1) {
            newArr.push(e);
        }

    }

    return newArr;

}
module.exports.unique = unique;

/**
 * filter: The filter function accepts an array and filter function. The
 * element, index, and array are passed into the filter function. If the filter
 * function returns true, the element is returned in a new array. If the filter
 * function tests false, the element is not pushed into the new array.
 * 
 * @param {array} array: Ann array literal or variable containing a reference
 * to an array.
 * @param {function} callback: A filter function to be called on every element
 * in array. Filter function accepts three arguments: the element, the index
 * at which the element is located, and the array.
 * 
 * @returns {array}: The filter function returns an array containing all 
 * elements that, when passed into the filter function, return true.
 */

function filter(array, callback) {

    let newArr = [];

    for (let i = 0; i < array.length; ++i) {

        if (callback(array[i], i, array)) {
            newArr.push(array[i]);
        }

    }

    return newArr;

}
module.exports.filter = filter;

/**
 * reject: The reject function accepts an array and. a filter function. The 
 * element, index, and array are passed into the filter function. If the
 * function returns false, the element is returned in a new array. If the filter
 * function tests true, the element is not pushed into the new array.
 * 
 * @param {array} array: Ann array literal or variable containing a reference
 * to an array.
 * @param {function} callback: A filter function to be called on every element
 * in array. Filter function accepts three arguments: the element, the index
 * at which the element is located, and the array.
 * 
 * @returns {array}: The filter function returns an array containing all 
 * elements that, when passed into the filter function, return false.
 */

function reject(array, callback) {

    let newArr = [];

    for (let i = 0; i < array.length; ++i) {

        if (!callback(array[i], i, array)) {
            newArr.push(array[i]);
        }

    }

    return newArr;

}
module.exports.reject = reject;

/**
 * partition: The partition function accepts an array and callback function.
 * Every element in the array is passed into the callback function. If the
 * callback function returns true, the element is pushed into one array. If the 
 * callback function returns false, the element is pushed into a second array.
 * The partition function returns an array containing both arrays: the array
 * that contains the elements that test true when passed into the callback
 * function and the array that contains the elements that test false when
 * passed into the callback function.
 * 
 * @param {array} array: An array literal or variable that contains a reference
 * to an array.
 * @param {function} callback: A function to be called on every element in the
 * array, should return true or false.
 * 
 * @returns {array}: An array that contains two arrays. The first array
 * contains elements that test true when passed into the callback function. The 
 * second array contains elements that test false when passed into the callback
 * function.
 */

function partition(array, callback) {

    let testsTrue = [];
    let testsFalse = [];

    for (let i = 0; i < array.length; ++i) {

        if (callback(array[i])) {
            testsTrue.push(array[i]);

        }
        else {
            testsFalse.push(array[i]);
        }

    }

    return [
        testsTrue,
        testsFalse
    ];

}
module.exports.partition = partition;

/**
 * map: The map function accepts an array or object and a callback function. The
 * callback function is called on every every element in the array or value in
 * the object. The return value of the callback function is pushed into a new 
 * array. The new array is returned.
 * 
 * @param {collection} collection: An array literal or variable containing a 
 * reference to an array or an object literal or a variable containing a
 * reference to an object.
 * @param {function} callback: A callback function to be called on every element
 * or value in collection. Should have a return value other than undefined.
 * 
 * @returns {array}: The map function returns array that contains the return
 * values for every element or value in collection passed into the callback
 * function.
 */

function map(collection, callback) {

    let newArr = [];

    this.each(collection, function(element, index, collection) {
        newArr.push(callback(element, index, collection));
    });

    return newArr;

}
module.exports.map = map;

/**
 * pluck: The pluck function accepts an array of objects and a property string.
 * It returns an array that contains the value associated with the property
 * passed into the function for every object in the array.
 * 
 * @param {array} objects: An array literal or varaible that contains a
 * reference to an array that contains objects.
 * @param: {string} property: A key that will be used to access the values that
 * will be returned by the function.
 * 
 * @returns {array}: The pluck funtion returns an array of values associated 
 * with the property passed into the function for every object in arrays.
 */

function pluck(objects, property) {

    return this.map(objects, function(object) {
        return object[property];
    });

}
module.exports.pluck = pluck;

/**
 * every: The every function accepts an array or object and an optional callback
 * function. If a callback function is supplied, the callback function is called
 * on every element or value. If any element or value passed into the callback
 * function returns false, the every function returns false. If every element
 * or value passed into the callback function returns true, the every function
 * returns true. If no callback function is supplied, if every element or value
 * tests truthy, the every function returns true. If any element or value tests
 * falsy, the every function returns false.
 * 
 * @param {collection} collection: An array literal or variable containing a 
 * reference to an array or an object literal or a variable containing a
 * reference to an object.
 * @param {function} callback: A callback function to be called on every element
 * or value in collection. Should have a return value of true or false.
 * 
 * @returns {boolean}: If a callback function is supplied, if every element or 
 * value in collection when passed into the the callback function returns true,
 * the every function returns true. If any element or value when passed into the
 * callback function returns false, the every function returns false. If a
 * callback function is not supplied, if every element or value tests truty, the
 * every function returns true. If any element or value tests falsy, the every
 * function returns false.
 */

function every(collection, callback) {

    let allTrue;

    if (!callback) {

        this.each(collection, function(element) {
            if (!element) allTrue = false;
        });

        if (allTrue === undefined) allTrue = true;

    }
    else {

        this.each(collection, function(element, index, array) {
            if (!callback(element, index, array)) allTrue = false;
        });

        if (allTrue === undefined) allTrue = true;

    }

    return allTrue;

}
module.exports.every = every;

/**
 * some: The some function accepts an array or object and an optional callback
 * function. If a callback function is supplied, the callback function is called
 * on every element or value. If any element or value passed into the callback
 * function returns true, the every function returns true. If every element
 * or value passed into the callback function returns false, the every function
 * returns false. If no callback function is supplied, if any element or value
 * tests truthy, the every function returns true. If every element or value 
 * tests falsy, the every function returns false.
 * 
 * @param {collection} collection: An array literal or variable containing a 
 * reference to an array or an object literal or a variable containing a
 * reference to an object.
 * @param {function} callback: A callback function to be called on every element
 * or value in collection. Should have a return value of true or false.
 * 
 * @returns {boolean}: If a callback function is supplied, if any element or 
 * value in collection when passed into the the callback function returns true,
 * the every function returns true. If every element or value when passed into 
 * the callback function returns false, the every function returns false. If a
 * callback function is not supplied, if any element or value tests truty, the
 * every function returns true. If every element or value tests falsy, the every
 * function returns false.
 */

function some(collection, callback) {

    let allTrue;

    if (!callback) {

        this.each(collection, function(element) {
            if (element) allTrue = true;
        });

        if (allTrue === undefined) allTrue = false;

    }
    else {

        this.each(collection, function(element, index, array) {
            if (callback(element, index, array)) allTrue = true;
        });

        if (allTrue === undefined) allTrue = false;

    }

    return allTrue;

}
module.exports.some = some;

/**
 * reduce: The reduce function accepts an array, callback function, and optional
 * seed or accumulator. The seed can be an array, object, empty string, number,
 * et cetera. If the seed is not provided, the seed is set equal to the first 
 * element of the array. The callback function is called on every element in the 
 * array. The callback function will alter and return the seed. The seed is
 * reassigned to the return value. After iteration is complete, the seed is 
 * returned.
 * 
 * @param {array} array: An array literal or variable that contains a reference 
 * to an array.
 * @param {function} callback: A function that alters and returns the seed. 
 * Often, an anonymous function.
 * @param {*} seed: The "starting point" for the return value. Often, the seed
 * is an empty array or object, an empty string, or 0. The seed is optional. If
 * a seed is not provided, the seed is set equal to the first element in the 
 * array.
 * 
 * @returns {*}: The seed will be altered as array is iterated over. After 
 * iteration is complete the "final" seed will be returned.
 */

function reduce(array, callback, seed) {

    let previousResult;

    for (let i = 0; i < array.length; ++i) {

        if (i === 0) {

            if (seed) {
                previousResult = seed;
            }

            else if (!seed && (seed === 0 || seed === "")) {
                previousResult = seed;
            }

            else {
                previousResult = array[i];
                continue;
            }

        }

        previousResult = callback(previousResult, array[i], i);

    }

    return previousResult;

}
module.exports.reduce = reduce;

/**
 * extend: The extend function accepts at least two objects as parameters. The 
 * properties from the second object will be copied in to the first object. If
 * the second object contains a property with the same key but a different
 * value, the property of the first object will be updated with the value of
 * the second object. If additional objects are passed into the function as 
 * parameters, the same process will be followed for every additional object.
 * 
 * @param {object} obj1: An object literal or variable containing a reference
 * to an object.
 * @param {object} obj2: An object literal or variable containing a reference
 * to an object.
 * 
 * @returns {object}: The function returns obj1. The function acts directly
 * upon obj1; a clone is not created.
 */

function extend(obj1, obj2, ...remainingObjs) {

    for (let key in obj2) {
        obj1[key] = obj2[key];
    }

    if (remainingObjs) {

        for (let obj of remainingObjs) {

            for (let key in obj) {
                obj1[key] = obj[key];
            }

        }

    }

    return obj1;

}
module.exports.extend = extend;
